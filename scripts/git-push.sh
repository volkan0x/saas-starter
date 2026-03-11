#!/bin/bash

# Git Push Script with Pre-Push Checks
# This script runs quality checks before pushing code to remote

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

usage() {
    cat <<'EOF'
Usage: ./scripts/git-push.sh [options]

Options:
  --check=type|build|none   Select pre-push check mode (default: type)
  --auto-commit             Auto stage and commit if working tree is dirty
  --message="..."           Commit message to use with --auto-commit
  -h, --help                Show this help message
EOF
}

CHECK_MODE="type"
AUTO_COMMIT=false
COMMIT_MESSAGE=""

for arg in "$@"; do
    case "$arg" in
        --check=type)
            CHECK_MODE="type"
            ;;
        --check=build)
            CHECK_MODE="build"
            ;;
        --check=none)
            CHECK_MODE="none"
            ;;
        --auto-commit)
            AUTO_COMMIT=true
            ;;
        --message=*)
            COMMIT_MESSAGE="${arg#*=}"
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        *)
            print_error "Unknown option: $arg"
            usage
            exit 1
            ;;
    esac
done

# Function to check if git repository exists
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not a git repository!"
        exit 1
    fi
}

# Function to check if there are uncommitted changes
check_uncommitted_changes() {
    if [[ -n $(git status -s) ]]; then
        print_warning "You have uncommitted changes:"
        git status -s
        echo ""
        if [ "$AUTO_COMMIT" = true ]; then
            git add .
            if [ -z "$COMMIT_MESSAGE" ]; then
                print_error "--auto-commit requires --message=\"your commit message\""
                exit 1
            fi
            git commit -m "$COMMIT_MESSAGE"
            print_success "Changes committed!"
        else
            print_error "Working tree is dirty. Commit/stash your changes or use --auto-commit with --message."
            exit 1
        fi
    else
        print_status "No uncommitted changes found."
    fi
}

# Function to get current branch
get_current_branch() {
    git rev-parse --abbrev-ref HEAD
}

ensure_not_detached_head() {
    local branch=$1
    if [ "$branch" = "HEAD" ]; then
        print_error "Detached HEAD detected. Switch to a branch before pushing."
        exit 1
    fi
}

# Function to check if branch exists on remote
check_remote_branch() {
    local branch=$1
    if git ls-remote --exit-code --heads origin "$branch" > /dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Function to run TypeScript checks
run_typescript_check() {
    print_status "Running TypeScript type check..."
    if npx tsc --noEmit; then
        print_success "TypeScript check passed!"
        return 0
    else
        print_error "TypeScript check failed!"
        return 1
    fi
}

# Function to run build check
run_build_check() {
    print_status "Running build check..."
    if pnpm run build; then
        print_success "Build successful!"
        return 0
    else
        print_error "Build failed!"
        return 1
    fi
}

# Function to check for sensitive data
check_sensitive_data() {
    print_status "Checking for sensitive data..."
    
    # Common patterns for sensitive data
    local patterns=(
        "password\s*=\s*['\"][^'\"]+['\"]"
        "api[_-]?key\s*=\s*['\"][^'\"]+['\"]"
        "secret\s*=\s*['\"][^'\"]+['\"]"
        "token\s*=\s*['\"][^'\"]+['\"]"
        "aws[_-]?access[_-]?key"
        "AKIA[0-9A-Z]{16}"
    )
    
    local found_sensitive=false
    
    for pattern in "${patterns[@]}"; do
        if git diff --cached | grep -iE "$pattern" > /dev/null 2>&1; then
            print_warning "Potential sensitive data found matching pattern: $pattern"
            found_sensitive=true
        fi
    done
    
    if [ "$found_sensitive" = true ]; then
        print_warning "Please review your staged changes for sensitive data."
        read -p "Continue anyway? (y/n): " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Push cancelled."
            exit 1
        fi
    else
        print_success "No sensitive data patterns detected."
    fi
}

# Main function
main() {
    echo ""
    echo "=================================="
    echo "   Git Push Pre-Check Script"
    echo "=================================="
    echo ""
    
    # Check if git repo
    check_git_repo
    
    # Get current branch
    current_branch=$(get_current_branch)
    ensure_not_detached_head "$current_branch"
    print_status "Current branch: $current_branch"
    
    # Check for uncommitted changes
    check_uncommitted_changes
    
    # Check for sensitive data
    check_sensitive_data
    
    echo ""
    case "$CHECK_MODE" in
        type)
            if ! run_typescript_check; then
                print_error "TypeScript check failed. Fix errors before pushing."
                exit 1
            fi
            ;;
        build)
            if ! run_build_check; then
                print_error "Build check failed. Fix errors before pushing."
                exit 1
            fi
            ;;
        none)
            print_warning "Skipping pre-push checks (--check=none)..."
            ;;
    esac
    
    # Check if branch exists on remote
    echo ""
    if check_remote_branch "$current_branch"; then
        print_status "Branch exists on remote. Pushing updates..."
        
        # Pull latest changes first to avoid conflicts
        print_status "Pulling latest changes from remote..."
        if git pull --rebase origin "$current_branch"; then
            print_success "Successfully pulled latest changes!"
        else
            print_error "Failed to pull changes. Please resolve conflicts manually."
            exit 1
        fi
        
        # Push to existing branch
        if git push origin "$current_branch"; then
            print_success "Successfully pushed to origin/$current_branch!"
        else
            print_error "Failed to push changes."
            exit 1
        fi
    else
        print_status "Branch does not exist on remote. Creating new remote branch..."
        
        # Push new branch with upstream
        if git push -u origin "$current_branch"; then
            print_success "Successfully created and pushed origin/$current_branch!"
        else
            print_error "Failed to push new branch."
            exit 1
        fi
    fi
    
    echo ""
    print_success "========================================="
    print_success "  Push completed successfully! 🚀"
    print_success "========================================="
    echo ""
    
    # Show latest commit
    print_status "Latest commit:"
    git log -1 --oneline
    echo ""
}

# Run main function
main

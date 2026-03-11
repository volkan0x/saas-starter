import NavbarDemo from "@/components/navbar-menu-demo";
import Slider from "@/components/slider/Slider";
import Link from "next/link";
import { CircleIcon } from "lucide-react";

export default function FirmaWebsiteProjeleriPage() {
  return (
    <main className="min-h-screen bg-gray-200">
      <div className="fixed inset-x-0 top-6 z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <CircleIcon className="h-6 w-6 text-orange-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Ajans 99</span>
          </Link>
        </div>
      </div>
      <NavbarDemo />
      <Slider />
    </main>
  );
}

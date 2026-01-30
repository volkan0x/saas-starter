import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  profileImage,
  profileName,
  profileIcon,
  whiteProfileIcon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  profileImage?: string;
  profileName?: string;
  profileIcon?: React.ReactNode;
  whiteProfileIcon?: boolean;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {profileName && (
        <div className="flex items-center gap-3 mb-2">
          {profileIcon ? (
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              whiteProfileIcon
                ? "bg-white border-2 border-neutral-200"
                : "bg-gradient-to-br from-orange-400 to-orange-600"
            }`}>
              {whiteProfileIcon ? (
                <div className="text-black">{profileIcon}</div>
              ) : (
                profileIcon
              )}
            </div>
          ) : profileImage ? (
            <img
              src={profileImage}
              alt={profileName}
              className="w-10 h-10 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700"
            />
          ) : null}
          <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {profileName}
          </span>
        </div>
      )}
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  const contentSnippets = [
    {
      label: "Website",
      title: "Modern açılış sayfaları",
      description: "Markanızı ilk bakışta güçlü gösteren sade ve dönüşüm odaklı tasarımlar.",
    },
    {
      label: "Video",
      title: "Dikkat çeken reklam kurguları",
      description: "Kısa sürede mesajı veren, hızlı tempolu ve profesyonel video içerikleri.",
    },
    {
      label: "UI/UX",
      title: "Mobil uyumlu deneyim",
      description: "Her ekranda akıcı görünen, kullanıcıyı yormayan arayüz dokunuşları.",
    },
    {
      label: "Creative",
      title: "Sosyal medya için güçlü görseller",
      description: "Paylaşılabilir, akılda kalan ve markaya özel kreatif tasarım dili.",
    },
    {
      label: "Brand",
      title: "Kurumsal kimliği öne çıkarın",
      description: "Renk, tipografi ve kompozisyonla güven veren bir dijital görünüm oluşturun.",
    },
    {
      label: "Motion",
      title: "Hikâye anlatan hareketli içerikler",
      description: "Ürününüzü etkileyici geçişler ve net mesajlarla daha görünür hale getirin.",
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => {
                  const message = contentSnippets[(colIndex * chunkSize + imageIndex) % contentSnippets.length];

                  return (
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="relative flex aspect-[970/700] items-end overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-200 p-6 ring ring-gray-950/5"
                      key={imageIndex + image}
                    >
                      <GridLineHorizontal className="-top-4" offset="20px" />
                      <div className="absolute left-4 top-4 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-600">
                        {message.label}
                      </div>
                      <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-orange-200/40 blur-2xl" />
                      <div className="relative z-20 max-w-md">
                        <h4 className="text-2xl font-semibold leading-tight text-slate-900">
                          {message.title}
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {message.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

export default ThreeDMarquee;

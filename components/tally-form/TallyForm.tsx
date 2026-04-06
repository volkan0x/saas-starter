"use client";

import { useEffect } from "react";

interface TallyFormProps {
  formId: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function TallyForm({ 
  formId, 
  title = "Bize Ulaşın",
  description = "Sorularınız veya teklif almak için formu doldurun, en kısa sürede size dönüş yapalım.",
  className = ""
}: TallyFormProps) {
  useEffect(() => {
    // Tally embed script'ini yükle
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className={`py-16 bg-white ${className}`} id="contact-form">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
          <iframe
            data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="İletişim Formu"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

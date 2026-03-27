import NavbarDemo from "@/components/navbar-menu-demo";
import Slider from "@/components/slider/Slider";
import Link from "next/link";
import { CircleIcon } from "lucide-react";

export default function FirmaWebsiteProjeleriPage() {
  return (
    <main className="min-h-screen bg-gray-200">
      <div className="fixed inset-x-0 top-6 z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center">
              <CircleIcon className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Ajans 99</span>
            </Link>

            {/* <a
              href="https://medusajs.com/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:bg-white"
            >
              Medusa Admin
            </a> */}
          </div>
        </div>
      </div>
      <NavbarDemo />
      <section className="bg-gray-800 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Öne Çıkan Videolar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            Kartları değiştirmek için slider alanına tıklayabilirsin.
          </p> */}
        </div>
        <Slider />
      </section>
    </main>
  );
}

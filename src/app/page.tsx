import Link from "next/link";
import Image from "next/image";
import { lusitana } from './ui/fonts';

import heroDesktop from "../../public/file.svg";
import heroMobile from "../../public/globe.svg";
import Customers from "./dashboard/customers/page";
import Invoices from "./dashboard/invoices/page";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Blue bar at top */}
      <div className="bg-blue-600 h-24 rounded-md m-4" />

      {/* Hero Section */}
      <section className="px-6 py-12">
        <div className="max-w-xl bg-gray-50 p-6 rounded-lg shadow-sm">
          <h1 className="text-lg font-semibold text-gray-900">
            Welcome to Acme.
          </h1>
          <p className="mt-2 text-gray-700">
            This is the example for the{" "}
            <Link href="https://nextjs.org/learn" className="text-blue-600 underline">
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>

          <div className="mt-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
              Log in →
            </Link>
          </div>
        </div>
      </section>

       <Image
        src={heroDesktop}
        alt="Hero Desktop"
        // width={300}
        // height={150}
        priority
        className="hidden md:block" // Hidden on mobile, shown on md+
      />

      {/* Mobile hero image */}
      <Image
        src={heroMobile}
        alt="Hero Mobile"
        // width={250}
        // height={300}
        priority
        className="block md:hidden" // Shown on mobile, hidden on md+
      />

      <h1 className="text-2xl font-bold md:text-blue-800 max-sm:bg-blue-300">Welcome to Next.js</h1>
      <p className={`${lusitana.className} text-lg text-gray-700 md:text-blue-800`}>
        This paragraph is styled with the Lusitana font.
      </p>

       <div className="p-6">
      <Image
        src={heroMobile}
        alt="Picture of the author"
        width={500}
        height={500}
        quality={90}
        priority
        // placeholder="blur"
        // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        style={{ objectFit: "cover", borderRadius: "50%" }}
        // onLoad={() => console.log("Image loaded!")}
        // onError={() => console.log("Image failed to load!")}
      />
    </div>

    <Invoices />
    <Customers />
    </main>
  );
}

'use client';

import { Home, FileText, Users, LogOut, Globe } from "lucide-react";
import Link from "next/link";
// returns the current pathname (the path part of the URL)
import { usePathname } from "next/navigation";
// utility library for conditionally constructing CSS class names
import clsx from "clsx";

// Links array for navigation
const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full flex flex-col w-64">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-4 bg-blue-600 text-white font-semibold text-lg">
        <Globe className="w-5 h-5" />
        Acme
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4 bg-gray-50">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center gap-3 px-6 py-3 text-sm hover:bg-sky-100 hover:text-blue-600 transition-all duration-200',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                  'text-gray-700': pathname !== link.href,
                },
              )}
            >
              <LinkIcon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sign Out */}
      <div className="mt-auto px-6 py-4 bg-gray-50">
        <button className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
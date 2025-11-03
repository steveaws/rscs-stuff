"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard/first", label: "First Page" },
    { href: "/dashboard/second", label: "Second Page" },
    { href: "/dashboard/third", label: "Third Page" },
    { href: "/dashboard/todos", label: "Todos Page" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <div className="mb-8">
        <Link href="/dashboard">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </Link>
      </div>
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  pathname === link.href
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
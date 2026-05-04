import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AccessPath — Career Transition Planner for Developers Going Blind",
  description:
    "Track skills, discover accessible tools, and connect with mentors who've navigated vision loss as a developer. Your career doesn't stop here."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="d75e96fb-e91d-4685-9718-70a6f15c5528"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

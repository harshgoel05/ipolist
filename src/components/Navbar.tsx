"use client";
import { Logo } from "@/app/logo";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex py-4 px-8 items-center justify-between">
      <Link href="/" className="flex gap-4 items-center">
        <Logo />
        <p className="text-3xl font-bold">IPOList</p>
      </Link>
    </div>
  );
}

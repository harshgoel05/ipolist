import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-sm text-center p-4">
      <Link href="https://linkedin.com/in/harshgoel05" target="_blank">
        Made with <span className="animate  animate-pulse">❤️</span> by Harsh
        Goel
      </Link>
    </div>
  );
}

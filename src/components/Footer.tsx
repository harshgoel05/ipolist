import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-sm text-center p-4 space-y-2">
      <div>
        <Link href="https://linkedin.com/in/harshgoel05" target="_blank">
          Made with <span className="animate animate-pulse">❤️</span> by Harsh
          Goel
        </Link>
      </div>
      <div className="text-xs text-gray-500 w-8/12 mx-auto">
        Disclaimer: The content provided on theipolist.in is for educational and
        informational purposes only. We are not SEBI-registered advisors and are
        not involved in any grey market trades. Please consult with a registered
        financial advisor before making any investment decisions.
      </div>
    </div>
  );
}

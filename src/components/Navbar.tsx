import { Logo } from "@/app/logo";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="flex py-4 px-8 items-center justify-between">
      <Link href="/" className="flex gap-2 sm:gap-4 items-center">
        <Logo />
        <p className="text-xl sm:text-3xl font-bold">The IPOList</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/blogs">
          <p className="text-md font-semibold">Blogs</p>
        </Link>
        <Link
          href="https://chat.whatsapp.com/Ernw2YP3lBzHy4jRVLhEnc"
          target="_blank"
        >
          <button className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#25D366] rounded-lg font-semibold transition-colors hover:bg-[#1ebe57]">
            <FaWhatsapp className="text-xl" />
            Join Community
          </button>
          <button className="flex sm:hidden items-center justify-center gap-2 px-4 py-2 text-white bg-[#25D366] rounded-lg font-semibold transition-colors hover:bg-[#1ebe57]">
            <FaWhatsapp className="text-xl" />
            Join
          </button>
        </Link>
      </div>
    </div>
  );
}

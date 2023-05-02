import Link from "next/link";

export default function Cta({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <button className="mt-5 md:mt-10 mx-4 group rounded-2xl h-10 md:h-12 w-36 md:w-48 bg-white font-bold text-lg text-gray-700 relative overflow-hidden">
        {text}
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-green-100/30 rounded-2xl"></div>
      </button>
    </Link>
  );
}

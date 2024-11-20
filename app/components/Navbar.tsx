import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white bg-opacity-90 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-slate-800">
            <Link href="/" className="hover:text-slate-800">
              NextWeb Solutions
            </Link>
          </h1>
          <ul className="flex space-x-4 text-slate-600">
            <li>
              <Link href="/yhteystiedot" className="hover:text-slate-800">
                Yhteystiedot
              </Link>
            </li>
            <li>
              <Link href="/tuotteet" className="hover:text-slate-800">
                Tuotteet
              </Link>
            </li>
            <li>
              <Link href="/video" className="hover:text-slate-800">
                Video
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

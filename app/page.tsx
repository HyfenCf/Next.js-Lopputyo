import Image from "next/image";
import YouTubeEmbed from "./components/YoutubeEmbed";

export default function Home() {
  return (
    <div className="bg-white bg-opacity-80 min-h-screen pt-16">
      <h1 className="text-3xl font-bold flex justify-center text-center">
        NextWeb Solutions
      </h1>
      <div className="text-2xl text-slate-700 flex flex-col justify-center items-center p-12">
        <h3 id="about" className="text-center max-w-2xl mb-8">
          Yritys tuottaa moderneja nettisivuja yritykselle käyttäen{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , joka on CSS framework.
        </h3>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/tailwind.png"
            alt="Kuva Tailwind CSS:stä"
            width={400}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </a>
      </div>
    </div>
  );
}

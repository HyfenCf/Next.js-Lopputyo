import YouTubeEmbed from "../components/YoutubeEmbed";

export default function Video() {
  return (
    <div className="bg-white bg-opacity-80 flex justify-center pt-16 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-full max-h-[400px] max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">Youtube video</h1>
        <YouTubeEmbed videoId="Zq5fmkH0T78" />
      </div>
    </div>
  );
}

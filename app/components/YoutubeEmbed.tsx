// components/YouTubeEmbed.tsx
import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

export default function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  return (
    <div
      className="relative"
      style={{
        paddingBottom: "100%",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        position: "relative",
      }}
    >
      <iframe
        className="w-72 h-72 mx-auto" // 72 x 72 pikseliä, tekee videosta neliön
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

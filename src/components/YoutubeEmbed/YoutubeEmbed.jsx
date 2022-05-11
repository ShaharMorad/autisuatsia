import React from "react";
import './styles.css';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
export default YoutubeEmbed;

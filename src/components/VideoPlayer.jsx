import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/interaction-areas';
import 'cloudinary-video-player/cld-video-player.min.css';

const VideoPlayer = ({ id, publicIds, ...props }) => {
  const cloudinaryRef = useRef();
  const playerRef = useRef();
  const interactionDisplay = {
    theme: { template: 'shadowed' },
    layout: { enable: true, showAgain: true },
  };
  const interactionAreas = {
    enable: true,
    template: 'portrait',
    onClick: (event) => {
      const src = publicIds[event.item.id];
      if (event.item.id === 'middle') {
        window.alert('Middle clicked');
      } else {
        event.zoom(src);
      }
    },
  };

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: 'demo',
      secure: true,
      controls: true,
      interactionDisplay,
    });
    player.source(publicIds.main, { interactionAreas });
  }, [interactionDisplay, interactionAreas, publicIds.main]);

  return (
    <video
      ref={playerRef}
      id={id}
      className="cld-video-player cld-fluid"
      {...props}
    />
  );
};

export default VideoPlayer;

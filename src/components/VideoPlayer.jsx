import React, { useEffect, useRef, useState } from 'react';

const VideoPlayer = ({ activeVideoUrl, setActiveVideoUrl }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    } else {
      createPlayer();
    }

    window.onYouTubeIframeAPIReady = createPlayer;

    function createPlayer() {
      const youtubeId = getYouTubeId(activeVideoUrl);
      if (!youtubeId) return;

      playerRef.current = new window.YT.Player('yt-player', {
        videoId: youtubeId,
        events: {
          onReady: () => setPlayerReady(true),
        },
        playerVars: {
          modestbranding: 1,
          controls: 1,
          rel: 0,
          fs: 0,
          showinfo: 0,
        },
      });
    }

    return () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [activeVideoUrl]);

  const getYouTubeId = (url) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleTogglePlay = () => {
    if (!playerReady || !playerRef.current) return;

    const state = playerRef.current.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    setActiveVideoUrl(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="relative w-full max-w-6xl aspect-video bg-black mx-auto px-4">
        {/* Close Button */}
        <div className="absolute top-3 w-full bg-black text-white text-right z-20">
          <button
            className="text-5xl font-bold z-20 hover:text-red-500 transition"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>

        {/* YouTube Player */}
        <div className="relative w-full h-full">
          <div id="yt-player" className="w-full h-full rounded-2xl shadow-2xl border-none"></div>

          {/* Transparent overlay for right-click prevention */}
          <div
            className="absolute inset-0 z-10"
            onContextMenu={(e) => e.preventDefault()}
            onMouseDown={(e) => {
              if (e.button === 2) e.preventDefault();
            }}
            style={{ pointerEvents: 'auto', backgroundColor: 'transparent' }}
          ></div>

          {/* Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 px-6 py-3 rounded-full text-lg shadow-xl"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-3 w-full text-white bg-black backdrop-blur-2xl text-center z-20">
          <h1>video name</h1>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

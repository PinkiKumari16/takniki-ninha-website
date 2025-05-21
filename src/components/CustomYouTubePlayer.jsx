// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player/youtube';

// const CustomYouTubePlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const playerRef = useRef(null);

//   // Disable right-click context menu on player wrapper
//   const handleContextMenu = (e) => {
//     e.preventDefault();
//   };

//   // Toggle play and pause
//   const togglePlay = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   return (
//     <div
//       onContextMenu={handleContextMenu} // Disable right-click
//       className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg bg-black" // Tailwind CSS classes
//     >
//       <ReactPlayer
//         ref={playerRef}
//         url="https://www.youtube.com/watch?v=9JVcbWTWDEs&t=3862s&rel=0" // Your specified YouTube video URL
//         playing={isPlaying}
//         controls={false}
//         width="100%"
//         height="405px"
//         config={{
//           youtube: {
//             playerVars: {
//               modestbranding: 1, 
//               rel: 0, // don't show related videos
//               controls: 0, // no YouTube controls
//               disablekb: 1, // disable keyboard controls
//               showinfo: 0, // no video info
//               fs: 0, // disable fullscreen button
//               iv_load_policy: 3, // disable video annotations
//             },
//           },
//         }}
//       />

//       {/* Custom Play Button Overlay */}
//       {!isPlaying && (
//         <button
//           onClick={togglePlay}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 border-none rounded-full w-20 h-20 cursor-pointer flex items-center justify-center shadow-md transition duration-300" // Tailwind CSS classes
//           onMouseEnter={(e) => {
//             e.currentTarget.classList.add('bg-opacity-100');
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.classList.remove('bg-opacity-100');
//           }}
//           aria-label="Play video"
//         >
//           {/* Using SVG Play Icon */}
//           <svg
//             height="40"
//             viewBox="0 0 24 24"
//             width="40"
//             fill="#000"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M8 5v14l11-7z" />
//           </svg>
//         </button>
//       )}

//       {/* Click on video area while playing pauses video */}
//       {isPlaying && (
//         <div
//           onClick={togglePlay}
//           className="absolute top-0 left-0 w-full h-full cursor-pointer" // Tailwind CSS classes
//           aria-label="Pause video"
//           role="button"
//           tabIndex={0}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') togglePlay();
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default CustomYouTubePlayer;

'use client'

import React from "react";
import { FaPlusCircle, FaSignOutAlt  } from "react-icons/fa"; 

const movieList = () => {
  return (
    <div className="bg-[#093545] text-[#FFFFFF] min-h-screen px-5 lg:px-20 py-10">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-[24px] lg:text-[32px] font-semibold">My Movies</h2>
          <FaPlusCircle size={28} /> 
        </div>
        <div className="flex items-center gap-3">
           <p className="text-sm font-medium">Logout</p>
           <FaSignOutAlt className="text-xl cursor-pointer" />
       </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-[#224957] rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/200x300?text=Poster+${index + 1}`}
              alt={`Movie Poster ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="p-3">
              <p className="text-[16px] font-medium">Movie Name</p>
              <p className="text-[14px] text-[#B0BEC5]">Year Released</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default movieList;

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaPlusCircle, FaSignOutAlt } from "react-icons/fa"; 

// const MovieList = () => {
//   // State to store movie data
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   // Fetch movie data on component mount
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch("http://localhost:8001/movies/getAll"); 
//         const data = await response.json();
        
//         // Ensure that data.movies exists and is an array
//         if (Array.isArray(data.movies)) {
//           setMovies(data.movies);
//         } else {
//           console.error("Movies data is not in expected format");
//         }
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   // Handle the movie click event (to play movie)
//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   // Logout handler
//   const handleLogout = () => {
//     // Logic to handle logout 
//     console.log("Logging out...");
//   };

//   return (
//     <div className="bg-[#093545] text-[#FFFFFF] min-h-screen px-5 lg:px-20 py-10">
//       <div className="flex justify-between items-center mb-8">
//         <div className="flex items-center gap-3">
//           <h2 className="text-[24px] lg:text-[32px] font-semibold">My Movies</h2>
//           <Link href="/create-movie">
//             <FaPlusCircle size={28} className="cursor-pointer" />
//           </Link>
//         </div>
//         <div className="flex items-center gap-3">
//           <p className="text-sm font-medium">Logout</p>
//           <FaSignOutAlt className="text-xl cursor-pointer" onClick={handleLogout} />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="bg-[#224957] rounded-lg overflow-hidden cursor-pointer"
//               onClick={() => handleMovieClick(movie)} 
//             >
//               <img
//                 src={movie.poster ? movie.poster : "https://via.placeholder.com/200x300?text=No+Poster"}
//                 alt={movie.title}
//                 className="w-full h-auto"
//               />
//               <div className="p-3">
//                 <p className="text-[16px] font-medium">{movie.title}</p>
//                 <p className="text-[14px] text-[#B0BEC5]">{movie.publishing_year}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-white">No movies found</p>
//         )}
//       </div>
//       {selectedMovie && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-[#093545] p-4 rounded-lg">
//             <button
//               className="text-white text-xl mb-4"
//               onClick={() => setSelectedMovie(null)}
//             >
//               X
//             </button>
//             <h2 className="text-[24px] lg:text-[32px] font-semibold mb-4">{selectedMovie.title}</h2>
//             <video
//               className="w-full h-auto"
//               controls
//               autoPlay
//               src={selectedMovie.movie ? selectedMovie.movie : ""}
//             >
//               Sorry, your browser does not support the video tag.
//             </video>
//             <p className="text-[14px] text-[#B0BEC5]">{selectedMovie.publishing_year}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieList;

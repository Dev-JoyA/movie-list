"use client"

import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation'; 

const CreateMovie = () => {
  const [poster, setPoster] = useState(null); 
  const [video, setVideo] = useState(null);  
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!poster || !video) {
      alert('Please upload both a poster image and a video.');
      return;
    }

    const formData = new FormData();
    formData.append('poster', poster);
    formData.append('video', video);

    try {
      const response = await fetch('http://localhost:8001/movies/add-movie', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create the movie');
      }

      alert('Movie created successfully!');
      
      
      router.push('/create-movie'); 
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while creating the movie.');
    }
  };

  return (
    <div className="min-h-screen bg-[#093545] text-[#FFFFFF] px-5 lg:px-20 py-10">
      <h3 className="text-[24px] lg:text-[32px] font-semibold text-center mb-8">
        Create a New Movie
      </h3>

      <div className="lg:flex lg:items-start lg:space-x-8 max-w-5xl mx-auto lg:space-y-0 space-y-4">
        <div className="flex justify-center lg:w-1/2">
          <div className="w-full lg:h-[300px] border-2 border-dashed border-[#ffffff] rounded-lg flex flex-col items-center justify-center py-8 px-4">
            {poster ? (
              <img
                src={URL.createObjectURL(poster)}
                alt="Uploaded Poster"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <label className="relative cursor-pointer flex flex-col items-center justify-center text-center">
                <FaArrowDown size={48} className="text-[#FFFFFF]" />
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] h-[6px] w-[40px] rounded-md"></div>
                <p className="text-[16px] font-medium mt-4">
                  Drop an image here or click to upload
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setPoster(e.target.files[0])}
                />
              </label>
            )}
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <div className="w-full lg:h-[300px] border-2 border-dashed border-[#ffffff] rounded-lg flex flex-col items-center justify-center py-8 px-4">
            {video ? (
              <video
                src={URL.createObjectURL(video)}
                alt="Uploaded Video"
                className="w-full h-full object-cover rounded-lg"
                controls
              />
            ) : (
              <label className="relative cursor-pointer flex flex-col items-center justify-center text-center">
                <FaArrowDown size={48} className="text-[#FFFFFF]" />
                <div className="bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] h-[6px] w-[40px] rounded-md text-center"></div>
                <p className="text-[16px] font-medium mt-4">
                  Drop a video here or click to upload
                </p>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setVideo(e.target.files[0])}
                />
              </label>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:space-y-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full lg:w-[90%] bg-[#093545] text-[#FFFFFF] rounded-lg px-4 py-3 text-[16px] border border-[#2BD17E] focus:outline-none focus:ring-2 focus:ring-[#2BD17E]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Publishing Year"
              className="w-full lg:w-[50%] bg-[#093545] text-[#FFFFFF] rounded-lg px-4 py-3 text-[16px] border border-[#2BD17E] focus:outline-none focus:ring-2 focus:ring-[#2BD17E]"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between lg:justify-start lg:space-x-4 mt-4 lg:mt-0">
            <button
              className="w-1/2 lg:w-auto bg-[#224957] text-[#FFFFFF] px-6 py-2 rounded-lg text-[16px] font-medium hover:bg-[#E11D48] transition"
              type="button"
            >
              Cancel
            </button>
            <button
              className="w-1/2 lg:w-auto bg-[#2BD17E] text-[#FFFFFF] px-6 py-2 rounded-lg text-[16px] font-medium hover:bg-[#1BA562] transition"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
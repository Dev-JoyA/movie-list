import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; 

const Editmovie = () => {
  return (
    <div className="min-h-screen bg-[#093545] text-[#FFFFFF] px-5 lg:px-20 py-10">
      <h3 className="text-[24px] lg:text-[32px] font-semibold text-center mb-8">
        Edit
      </h3>
      <div className="lg:flex lg:items-start lg:space-x-8 max-w-5xl mx-auto lg:space-y-0 space-y-4">
        <div className="flex justify-center lg:w-1/2">
          <div className="w-full lg:h-[300px] border-2 border-dashed border-[#2BD17E] rounded-lg flex flex-col items-center justify-center py-8 px-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <FaArrowDown size={48} className="text-[#FFFFFF]" />
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] h-[6px] w-[40px] rounded-md"></div>
              </div>
              <p className="text-center text-[16px] font-medium mt-4">
                Drop an image here or click to upload
              </p>
            </div>
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
          <div className="flex justify-between lg:justify-start lg:space-x-4 mt-4 lg:mt-0">
            <button
              className="w-1/2 lg:w-auto bg-[#224957] text-[#FFFFFF] px-6 py-2 rounded-lg text-[16px] font-medium hover:bg-[#2BD17E] transition"
              type="button"
            >
              Cancel
            </button>
            <button
              className="w-1/2 lg:w-auto bg-[#2BD17E] text-[#FFFFFF] px-6 py-2 rounded-lg text-[16px] font-medium hover:bg-[#1BA562] transition"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editmovie;

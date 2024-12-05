import React from 'react';

const emptyState = () => {
  return (
    <div className="bg-[#093545] px-5 lg:px-0 py-10 lg:py-40 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg text-center ">
        <h2 className="text-[#FFFFFF] font-[600] ] sm:text-[32px] lg:text-[28px] lg:px-0 mb-8">
          Your movie list is empty
        </h2>
        <button
          className="bg-[#2BD17E] text-[#FFFFFF] py-3 px-6 rounded-lg font-[700] text-[16px] w-full lg:w-auto lg:px-8"
          type="button"
        >
          Add a new movie
        </button>
      </div>
    </div>
  );
};

export default emptyState;

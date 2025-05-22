import React from "react";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 w-full">
      <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 max-w-3xl w-full mb-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white">
           مزودو الخدمات السحابية
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center mb-8">
          تعرّف على أبرز المنصات السحابية التي تُحدث تحولاً في العالم الرقمي في المملكة
        </p>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

function Card({ provider }) {
  return (
    <Link to={`/${provider.link}`} className="block">      <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl mb-3 border border-gray-700/50 p-4 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group h-full">
        <div className="relative h-36 mb-3 rounded-lg overflow-hidden">
          <img
            src={provider.image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2 font-['Cairo'] group-hover:text-blue-400 transition-colors duration-300">
          {provider.name}
        </h2>
        <p className="text-gray-300 text-sm font-['Cairo'] line-clamp-2">
          {provider.description}
        </p>
      </div>
    </Link>
  );
}

export default Card; 
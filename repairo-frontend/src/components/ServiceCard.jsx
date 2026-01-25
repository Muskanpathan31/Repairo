import React from 'react';
import { Bolt, Snowflake, Brush, PaintBucket, Shield, Clock } from 'lucide-react';

const iconMap = {
  "Electrician": <Bolt size={28} className="text-blue-600" />,
  "Plumber": <Brush size={28} className="text-blue-600" />,
  "Carpenter": <PaintBucket size={28} className="text-blue-600" />,
  "AC & Appliance Repair": <Snowflake size={28} className="text-blue-600" />,
  "Cleaning & Pest Control": <Brush size={28} className="text-blue-600" />,
  "InstaHelp": <Clock size={28} className="text-blue-600" />,
};

const ServiceCard = ({ name, isNew, onClick }) => (
  <button 
    onClick={onClick}
    className="relative flex flex-col items-center justify-center p-6 bg-[#f0f3ff] rounded-2xl hover:shadow-lg transition-all border border-transparent hover:border-blue-200 group"
  >
    {isNew && (
      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
        NEW
      </span>
    )}
    <div className="mb-4 transition-transform group-hover:scale-110">
      {iconMap[name] || <Bolt size={28} className="text-blue-600" />}
    </div>
    <span className="text-xs font-bold text-gray-700 text-center leading-tight">
      {name}
    </span>
  </button>
);

export default ServiceCard;
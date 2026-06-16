import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[150px] max-w-[150px] p-2 rounded cursor-pointer hover:bg-[#ffffff26] flex-shrink-0"
    >
      <img
        className="rounded w-[150px] h-[150px] object-cover"
        src={image}
        alt=""
      />

      <p className="font-semibold mt-2 text-sm truncate">
        {name}
      </p>

      <p
        className="text-slate-300 text-xs mt-1 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default AlbumItem;
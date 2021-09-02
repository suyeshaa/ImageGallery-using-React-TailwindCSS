import React from "react";

export const ImageCard = (props) => {
  const img = props.image;
  const tags = img.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={img.previewURL} alt="imge" className="w-full" />

      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By {img.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {img.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {img.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {img.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((el, idx) => {
          return (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              key={idx}
            >
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
};

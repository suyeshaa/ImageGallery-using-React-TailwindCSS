import React, { useState } from "react";

const ImageSearch = ({ clicked }) => {
  const [txt, setTxt] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    clicked(txt);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-18 mx-auto">
      <form onSubmit={submitHandler} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            type="text"
            onChange={(e) => setTxt(e.target.value)}
            placeholder="Search item term..."
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-gray py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

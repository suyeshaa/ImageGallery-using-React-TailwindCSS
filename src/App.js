import React, { useEffect, useState } from "react";
import "./App.css";
import { ImageCard } from "./components/ImageCard";
import "./assets/main.css";
import ImageSearch from "./components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  console.log(term);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=23200873-3017c8fe1fa7c94b59122077f&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch
        clicked={(txt) => {
          setTerm(txt);
        }}
      />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">
          Images Not Found!
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-5xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((el) => (
            <ImageCard key={el.id} image={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

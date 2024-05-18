import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filmName, setFilmName] = useState("");
  // const debounce = useDebounce(filmName, 300);
  const [isSearching, setIsSearching] = useState(false);
  const handleFetchFilms = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=3bcbe4f5&s="${filmName}"`
      );
      const data = await response.json();
      console.log(data);
      setFilms(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target[0].value;
  //   setFilmName(name);
  //   handleFetchFilms();
  // };
  const handleChange = (event) => {
    setFilmName(event.target.value);
    handleFetchFilms();
    debounce(()=>handleFetchFilms(),1000);
  }
  // useEffect(() => {
  //   const searchFilm = async () => {
  //     setIsSearching(true);
  //     if (debouncedSearchTerm) {
  //       handleChange()
  //       handleFetchFilms()
  //     }
  //     setIsSearching(false);
  //   };

  //   searchFilm();
  // }, [debouncedSearchTerm]);
  let timerId;
  const debounce=(fn,delay=500)=> {
    
    return function(...arg) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(()=>{
        fn(...arg);
      }, delay);
    }
  }
  return (
    <>
      <form onSubmit={()=>{}}>
        <input type="text" onChange={handleChange} value={filmName}></input>
        <button type="submit">Search</button>
      </form>
      {
        <ul>
          {films&&films.length>0&&films.map((film) => {
            return <li key={film.url}>{film.Title}</li>;
          })}
        </ul>
      }
    </>
  );
};
export default Films;

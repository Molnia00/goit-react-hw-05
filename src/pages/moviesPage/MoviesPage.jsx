import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../../api";
import MovieList from "../../components/movieList/MovieList";

function MoviePages() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [info, setInfo] = useState([]); 
    const query = searchParams.get('query') || ''; 
    const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        if (query) { 
          const data = await getMovieSearch(query);
            setInfo(data || []); 
            console.log(data)
        } else {
          setInfo([]); 
        }
      } catch (error) {
        console.log('Error fetching movie search results:', error);
        setInfo([]); 
      }
    };
    getData();
  }, [query]); 

    const handleSubmit = (event) => {
    event.preventDefault(); 
    const newQuery = event.target.elements.query.value; 
    setSearchParams({ query: newQuery }); 
  };
  return (
    <>
       <form onSubmit={handleSubmit}> 
        <input 
            type="text" 
            placeholder="Find the movie" 
            name="query"
        />
        <button type="submit">Search</button>
          </form>
          {info.length <= 0 ? <h3>No pages found</h3> : <MovieList movies={info} />}
    </>
  );
}

export default MoviePages;
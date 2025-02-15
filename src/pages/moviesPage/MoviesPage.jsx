import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../../api";

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
          setInfo(data.results || []); 
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
    const newQuery = event.target.value; 
    setSearchParams({ query: newQuery }); 
  };

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <input 
            type="text" 
            placeholder="Find the movie" 
            value={query} 
            onChange={(e) => { 
                setSearchParams({ query: e.target.value }); 
            }} 
        />
        <button type="submit">Search</button>
      </form>
      {info.length > 0 ? (
          <ul>
              {info.map((movie) => (
                  <li key={movie.id}><Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link></li> 
              ))}
          </ul>
      ) : (
          <p>No results found.</p> 
      )}
    </>
  );
}

export default MoviePages;
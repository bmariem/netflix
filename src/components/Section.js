//Components
import MovieList from "./MovieList";

const Section = (props) => {
  return props.movies.map((movie, index) => {
    return (
      <div className="section-content" key={index}>
        <h2 className="title">{movie.category}</h2>

        <MovieList movies={movie.images} />
      </div>
    );
  });
};

export default Section;

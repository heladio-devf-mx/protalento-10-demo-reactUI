import MoviesList from "../components/MoviesList";
import { MoviesContextProvider } from "../contexts/MoviesContext";

const Movies = () => {
  return (
    // Este es el paso 3. del uso de contexto, lo configuramos
    <MoviesContextProvider> 
      {/* Children components-> Usamos el contexto en los hijos */}
      <div>
        <header>
          <h2>Bienvenido a tu colección de Películas</h2>
        </header>
        <MoviesList />
        <section>Detalle de Películas</section>
      </div>
    </MoviesContextProvider>
  );
};

export default Movies;
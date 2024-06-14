// const API_URL = `http://localhost:3003/api/v1/`;  // URL estática de mi ambiente local
// variable dinámica para saberl la URL de mi API(backend)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getMoviesList = async() => {
  try {
    const result = await fetch(`${API_BASE_URL}/movies`);
    const moviesData = await result.json();
    // Todo salió bien...
    return moviesData.data;
  } catch (error) {
    console.log(`Error al recuperar las películas: ${error.message}`);
  }
};

export {
  getMoviesList
};

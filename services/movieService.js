const OMDB_BASE_URL = "https://www.omdbapi.com";
const OMDB_API_KEY = "2ac430ef";

// Fetch specific movie details
const fetchMoviesByTitle = async (titles) => {
  try {
    const movieData = await Promise.all(
      titles.map(async (title) => {
        const response = await fetch(
          `${OMDB_BASE_URL}/?t=${encodeURIComponent(
            title
          )}&apikey=${OMDB_API_KEY}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          return {
            id: data.imdbID,
            title: data.Title,
            imageUrl: data.Poster,
            rating: data.imdbRating,
          };
        } else {
          console.error(`Movie not found: ${title}`);
          return null;
        }
      })
    );
    return movieData.filter((movie) => movie !== null);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Export for use in your component
export const fetchPopularMovies = async () => {
  const popularMoviesTitles = [
    "Inception",
    "Avengers: Endgame",
    "The Dark Knight",
    "Titanic",
    "Spider-Man: No Way Home",
  ]; // Add more popular/trending movie titles
  return await fetchMoviesByTitle(popularMoviesTitles);
};

export const fetchTrendingMovies = async () => {
  const trendingMoviesTitles = [
    "The Super Mario Bros. Movie",
    "Dune: Part Two",
    "Guardians of the Galaxy Vol. 3",
    "Avatar: The Way of Water",
    "John Wick: Chapter 4",
    "Kraven the Hunter"
  ]; // Add more trending movie titles
  return await fetchMoviesByTitle(trendingMoviesTitles);
};

export const searchMovies = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=2ac430ef&s=${encodeURIComponent(
        searchQuery
      )}`
    );
    console.log("Raw Response:", response);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Data:", data);

    if (data.Response === "False") {
      throw new Error(`API Error: ${data.Error}`);
    }

    return data.Search; // Return movie results array
  } catch (error) {
    console.error("Error during fetch:", error.message);
    alert("Something went wrong. Please try again later.");
    return [];
  }
};


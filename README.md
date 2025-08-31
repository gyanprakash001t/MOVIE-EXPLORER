# React + Vite

components/

Small building blocks: SearchBar, MovieCard, MovieList, Navbar.

🔹 pages/

Screens for routing:

Home → Search + Results.

Favorites → Show saved favorites.


🔹 utils/

Helpers like saveToLocalStorage, getFromLocalStorage.
Keeps logic clean.

🔹 .env

Store your API key safely:

VITE_OMDB_KEY=your_api_key_here


Use via import.meta.env.VITE_OMDB_KEY.
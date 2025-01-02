import Homepage from '../Pages/Homepage'
import SignInPage from '../Pages/SignInPage'
import SignupPage from '../Pages/SignUpPage'
import MovieDetailsPage from '../Pages/MovieDetailsPage'
import ProfilePage from '../Pages/ProfilePage'
import WatchlistPage from '../Pages/WatchlistPage'
import SearchResults from '../Pages/SearchResults'
import TrendingPage from "../Pages/TrendingPage";
import TopRatedPage from "../Pages/TopRatedPage";
import PopularPage from "../Pages/PopularPage";
import Error404 from '../Pages/Error404'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App

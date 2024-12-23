import Homepage from '../Pages/Homepage'
import SignIn from '../Pages/SignInPage'
import SignupPage from '../Pages/SignUpPage'
import MovieDetailsPage from '../Pages/MovieDetailsPage'
import ProfilePage from '../Pages/ProfilePage'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App

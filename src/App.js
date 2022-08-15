import {Routes, Route, useLocation} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";
import Preloader from "./components/Preloader";

function App() {
    const location = useLocation();
    return (
        <div className="page">
            {location.pathname === '/' ||
            location.pathname === '/movies' ||
            location.pathname === '/saved-movies' ||
            location.pathname === '/profile' ?
                <Header/> :
                <></>}
            <Routes>
                <Route path="/" element={
                    <Main/>
                }/>
                <Route path="/movies" element={
                    <Movies/>
                }/>
                <Route path="/saved-movies" element={
                    <SavedMovies/>
                }/>
                <Route path="/profile" element={
                    <Profile/>
                }/>
                <Route path="/signup" element={
                    <Register/>
                }/>
                <Route path="/signin" element={
                    <Login/>
                }/>
                <Route path="*" element={
                    <Error/>
                }/>
            </Routes>
            <Preloader/>
            {location.pathname === '/' ||
            location.pathname === '/movies' ||
            location.pathname === '/movies' ?
                <Footer/> :
                <></>}
        </div>
    );
}

export default App;

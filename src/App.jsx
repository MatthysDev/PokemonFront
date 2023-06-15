import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import {UserContextProvider} from "./context/UserContext.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import axios from "axios";
import Pokemons from "./pages/Pokemons/Pokemons.jsx";
import PokemonInfo from "./pages/Pokemons/PokemonInfo.jsx";
import PokemonUpdate from "./pages/Pokemons/PokemonUpdate.jsx";

axios.defaults.withCredentials = true

export default function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pokemons" element={<Pokemons/>} />
                    <Route path="/pokemon/:name" element={<PokemonInfo/>} />
                    <Route path="/pokemon/update/:name" element={<PokemonUpdate/>} />
                </Route>
                <Route path="/login" element={<Login/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </UserContextProvider>

    )
}
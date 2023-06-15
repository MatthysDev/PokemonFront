import axios from "axios";

export const getAllPokemon = async () => {
    const pokemons = await axios.get('http://localhost:3010/api/pokemons')
    return pokemons.data
}

export const getPokemonById = async (id) => {
    const pokemon = await axios.get(`http://localhost:3010/api/pokemons/${id}`)
    return pokemon.data
}

export const createPokemon = async (pokemon, token) => {
    const pokemonCreated = await axios.post('http://localhost:3010/api/pokemons', pokemon, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    return pokemonCreated.data
}

export const updatePokemon = async (pokemonId, data, token) => {
    const pokemonUpdated = await axios.patch(`http://localhost:3010/api/pokemons/${pokemonId}`, data, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    return pokemonUpdated.data
}

export const deletePokemon = async (pokemonId, token) => {
    return await axios.delete(`http://localhost:3010/api/pokemons/${pokemonId}`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
}

export const getLatestPokemon = async () => {
    const pokemons = await axios.get('http://localhost:3010/api/pokemons/latest')
    return pokemons.data
}

export const getPokemonByName = async (name) => {
    const pokemon = await axios.get(`http://localhost:3010/api/pokemons/name/${name}`)
    return pokemon.data
}
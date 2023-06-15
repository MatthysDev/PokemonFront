import back from '../../assets/icons/back.svg'
import {useNavigate} from "react-router-dom";
import Input from "../../components/ui_form/Input.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {getAllPokemon} from "../../services/pokemon.services.js";
import PokemonCard from "../../components/ui/PokemonCard.jsx";

export default function Pokemons() {

    const nav = useNavigate()
    const [pokemonName, setPokemonName] = useState('')
    const [pokemons, setPokemons] = useState([])

    const{user} = useContext(UserContext)

    const getPokemons = async () => {
        const data = await getAllPokemon()
        setPokemons(data)
    }

    useEffect(() => {
        getPokemons().then().catch(err => console.log(err))
    }, [])

    function handleBack() {
        nav('/')
    }

    return (
        <div className={'h-full w-full bg-primary p-2'}>
            <div className={'flex items-center gap-4 p-2 shadow-lg'}>
                <img className={'cursor-pointer'} onClick={handleBack} src={back} alt=""/>
                <h1 className={'text-white text-3xl font-bold'}>Tous les Pokemons !</h1>
            </div>
            <div className={'mt-4'}>
                <div className={'flex flex-col items-center justify-center gap-4'}>
                    <p className={'font-bold text-xl pb-2 text-white border-b-2 border-primary_dark'}>Rechercher un pokemon</p>
                    <form>
                        <Input
                            type={'text'}
                            placeholder={'Pikachu'}
                            value={pokemonName}
                            setValue={setPokemonName}
                        />
                    </form>
                </div>
            </div>
            <div className={'w-[75%] mx-auto flex flex-wrap basis-1 items-center justify-center gap-8 mt-6'}>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            (!pokemonName || pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())) ? (
                                <div key={index}>
                                    <PokemonCard pokemon={pokemon}/>
                                </div>
                            ) : null
                        )
                    })
                }
            </div>
        </div>
    )
}
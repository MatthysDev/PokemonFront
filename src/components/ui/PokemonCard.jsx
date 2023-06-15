import {useNavigate} from "react-router-dom";

export default function PokemonCard({pokemon}){

    const nav = useNavigate()

    function handlePokemon(){
        nav(`/pokemon/${pokemon.name.toLowerCase()}`)
    }

    return(
        <div onClick={handlePokemon} className={'flex w-[250px] p-2 rounded-lg mx-auto items-center gap-2 bg-white/50 shadow-md hover:shadow-xl flex-col cursor-pointer'}>
            <div className={'w-6/12 flex items-center justify-center py-2'}>
                <img src={pokemon.sprite} alt={pokemon.name}/>
            </div>
            <p className={'font-bold uppercase text-lg'}> <span className={'font-light text-xs italic'}>#{pokemon.pokedexNumber}</span> {pokemon.name}</p>
        </div>
    )
}
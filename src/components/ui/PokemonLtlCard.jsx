import {formatDate} from "../../utils/formatDate.js";


export default function PokemonLtlCard({pokemon}){
    return(
        <div className={'flex min-h-32 w-10/12 p-2 rounded-lg mx-auto items-center gap-2 bg-white/50 shadow-md flex-col md:flex-row'}>
            <div className={'w-6/12 flex items-center justify-center py-2 md:py-0'}>
                <img src={pokemon.sprite} alt={pokemon.name}/>
            </div>
            <div className={'flex flex-col gap-2 pt-2 w-6/12'}>
                <p className={'font-bold uppercase text-lg'}>{pokemon.name}</p>
                {
                    pokemon.types.map((type, index) => {
                        return (
                            <p className={'capitalize '+type} key={index}>{type}</p>
                        )
                    })
                }
                <p className={'text-xs'}>Ajouté le : {formatDate(pokemon.createdAt)}</p>
            </div>
        </div>
    )
}
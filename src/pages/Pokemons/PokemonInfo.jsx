import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../../context/UserContext.jsx";
import {useContext, useEffect, useState} from "react";
import {deletePokemon, getPokemonByName} from "../../services/pokemon.services.js";
import back from "../../assets/icons/back.svg";
import Input from "../../components/ui_form/Input.jsx";
import Button from "../../components/ui_form/Button.jsx";


export default function PokemonInfo() {

    const {name} = useParams()
    const {user} = useContext(UserContext)
    const nav = useNavigate()

    const [pokemon, setPokemon] = useState({})

    const getPokemon = async () => {
        const data = await getPokemonByName(name)
        if(!data) return nav('/pokemons')
        setPokemon(data)
    }

    useEffect(() => {
        getPokemon().then().catch(err => console.log(err))
    }, [])

    function handleBack() {
        nav('/pokemons')
    }

    function handleUpdate() {
        nav(`/pokemon/update/${pokemon.name.toLowerCase()}`)
    }

    const deleteThePokemon = async (id) => {
        const ok = confirm('Voulez-vous vraiment supprimer ce pokemon ?')
        if(!ok) return
        await deletePokemon(pokemon._id, user.token)
        nav('/pokemons')
    }

    return (
        <div className={'h-full w-full bg-primary p-2'}>
            <div className={'flex items-center gap-4 p-2 shadow-lg'}>
                <img className={'cursor-pointer'} onClick={handleBack} src={back} alt=""/>
                <h1 className={'text-white text-3xl font-bold'}>Informations de {pokemon.name}</h1>
            </div>
            {
                user && user.data.isAdmin && (
                    <div className={'flex items-center gap-4 mt-2'}>
                        <Button
                            type={'button'}
                            text={'Modifier'}
                            action={handleUpdate}
                        />
                        <Button
                            type={'button'}
                            text={'Supprimer'}
                            action={deleteThePokemon}
                        />
                    </div>
                )
            }
            <div className={'flex flex-col gap-2 mt-2 items-center bg-white/50 p-2'}>
                <div className={'flex flex-col items-center gap-2 '}>
                    <img className={'h-32'} src={pokemon.sprite} alt={pokemon.name}/>
                    <p className={'font-bold text-3xl'}> <span className={'font-light text-xs italic'}>#{pokemon.pokedexNumber}</span> {pokemon.name}</p>
                </div>
                <div className={'w-full md:w-auto'}>
                    <div className={'flex gap-2'}>
                        {
                            pokemon.types?.map((type, index) => {
                                return (
                                    <p className={'capitalize my-2 text-lg font-bold w-[200px] '+type} key={index}>{type}</p>
                                )
                            })
                        }
                    </div>
                    <h2 className={'text-2xl font-bold mt-4'}>Informations</h2>
                    <div className={'flex flex-col lg:flex-row gap-4'}>
                        <div className={'flex flex-col'}>
                            <Input
                                label={'Poids'}
                                value={pokemon.weight}
                                disabled={true}
                            />
                            <Input
                                label={'Taille'}
                                value={pokemon.height}
                                disabled={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
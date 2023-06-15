import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {getPokemonByName} from "../../services/pokemon.services.js";
import back from "../../assets/icons/back.svg";
import Input from "../../components/ui_form/Input.jsx";
import Button from "../../components/ui_form/Button.jsx";
import Select from "../../components/ui_form/Select.jsx";


export default function PokemonUpdate() {

    const {name} = useParams()
    const {user} = useContext(UserContext)
    const nav = useNavigate()

    const [types, setTypes] = useState([])

    const [pokemon, setPokemon] = useState({})

    const [newPokemon, setNewPokemon] = useState({})

    function newPokemonName(name) {
        setNewPokemon({...newPokemon, name: name})
    }
    function newPokemonPokedexNumber(pokedexNumber) {
        setNewPokemon({...newPokemon, pokedexNumber: pokedexNumber})
    }


    useEffect(() => {
        console.log(newPokemon)
    } ,[newPokemon])

    function newPokemonType(type, index){
        debugger
        const newTypes = [...newPokemon.types]
        newTypes[index] = type
        newPokemonTypes(newTypes)
    }
    function newPokemonTypes(types) {
        setNewPokemon({...newPokemon, types: types})
    }

    function newPokemonWeight(weight) {
        setNewPokemon({...newPokemon, weight: weight})
    }

    function newPokemonHeight(height) {
        setNewPokemon({...newPokemon, height: height})
    }

    const getPokemon = async () => {
        const data = await getPokemonByName(name)
        if(!data) return nav('/pokemons')
        setPokemon(data)
        setNewPokemon(data)
    }

    useEffect(() => {
        getPokemon().then().catch(err => console.log(err))
    }, [])

    function handleBack() {
        nav(`/pokemon/${pokemon.name.toLowerCase()}`)
    }

    function handleUpdate(e) {
        e.preventDefault()
    }

    return (
        <div className={'h-full w-full bg-primary p-2'}>
            <div className={'flex items-center gap-4 p-2 shadow-lg'}>
                <img className={'cursor-pointer'} onClick={handleBack} src={back} alt=""/>
                <h1 className={'text-white text-3xl font-bold'}>Mettre à jour {pokemon.name}</h1>
            </div>

            <form className={'flex flex-col gap-2 mt-2 items-center bg-white/50 p-2'}>
                <div className={'flex flex-col items-center gap-2 '}>
                    <img className={'h-32'} src={newPokemon.sprite} alt={newPokemon.name}/>
                    <p className={'font-bold text-3xl'}> <span className={'font-light text-xs italic'}>#{newPokemon.pokedexNumber}</span> {newPokemon.name}</p>

                    <div className={'flex flex-col md:flex-row gap-2'}>
                        <Input
                            value={newPokemon.pokedexNumber}
                            setValue={newPokemonPokedexNumber}
                            type={'number'}
                            required={true}
                        />
                        <Input
                            value={newPokemon.name}
                            setValue={newPokemonName}
                            required={true}
                        />
                    </div>

                </div>
                <div className={'w-full md:w-auto'}>
                    <div className={'flex gap-2'}>
                        {
                            newPokemon.types?.map((type, index) => {
                                return (
                                    <p className={'capitalize my-2 text-lg font-bold w-[200px] '+type} key={index}>{type}</p>
                                )
                            })
                        }
                    </div>
                    <div className={'flex gap-2'}>
                        {
                            newPokemon.types?.map((type, index) => {
                                console.log(type)
                                return (
                                    <Select key={index} value={newPokemon.types[index]} setValue={(selectedType) => newPokemonType(selectedType, index)}>
                                        {["acier", "combat", "dragon", "eau", "électrik", "feu", "fée", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "ténèbres", "vol"].map(
                                            (type, index) => {
                                                return (
                                                    <option value={type} key={index}>{type}</option>
                                                )
                                            }
                                        )}
                                    </Select>
                                )
                            })
                        }
                    </div>


                    <h2 className={'text-2xl font-bold mt-4'}>Informations</h2>
                    <div className={'flex flex-col lg:flex-row gap-4'}>
                        <div className={'flex flex-col'}>
                            <Input
                                label={'Poids'}
                                value={newPokemon.weight}
                                setValue={newPokemonWeight}
                                type={'number'}
                            />
                            <Input
                                label={'Taille'}
                                value={newPokemon.height}
                                setValue={newPokemonHeight}
                                type={'number'}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    text={'Mettre à jour'}
                    type={'submit'}
                    action={handleUpdate}
                />
            </form>

        </div>
    )
}
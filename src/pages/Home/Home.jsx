import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import Button from "../../components/ui_form/Button.jsx";
import {useNavigate} from "react-router-dom";

import pokeball from '../../assets/icons/pokeball.svg'
import game from '../../assets/icons/game.svg'
import profil from '../../assets/icons/profil.svg'
import HomeCards from "./HomeCards.jsx";
import {getLatestPokemon} from "../../services/pokemon.services.js";
import PokemonLtlCard from "../../components/ui/PokemonLtlCard.jsx";
import {logout} from "../../services/users.services.js";
export default function Home() {

    const {user} = useContext(UserContext)
    const nav = useNavigate()

    const [latestPokemons, setLatestPokemons] = useState([])

    const getPokemons = async () => {
        const data = await getLatestPokemon()
        setLatestPokemons(data)
    }

    async function handleLogout() {
        await logout()
        window.location.reload()
    }

    useEffect(() => {
        getPokemons().then().catch(err => console.log(err))
    }, [])

    return (
        <div className={'h-screen w-full p-2 flex flex-col'}>
            <div className={"bg-primary shadow"}>
                {
                    user && <div className={'relative p-2'}>
                        <div className={'flex items-center justify-between mb-2'}>
                            <h1 className={'font-bold text-white text-2xl'}>Bonjour <span className={'text-primary_darker'}>{user.data.username}</span> !</h1>
                            <img onClick={handleLogout} src={profil} alt=""/>
                        </div>

                    </div>
                }
                {
                    !user && <div className={'p-2'}>
                        <h1 className={'font-bold text-white text-2xl'}>Bonjour inconnu,</h1>
                        <p className={'text-white text-xl'}>Le monde des pokemons est juste devant <b>toi</b> !</p>
                        <p className={'text-white text-xl mt-2'}>Connecte toi pour plus de fonctionnalités !</p>
                        <div className={'flex gap-2'}>
                            <Button
                                text={'Je me connecte !'}
                                action={() => nav('/login')}
                            />
                            <Button
                                text={'Je me créer un compte !'}
                                action={() => nav('/register')}
                            />
                        </div>
                    </div>
                }
            </div>

            <div className={'mt-4 flex flex-col gap-2 lg:flex-row justify-around'}>
                <HomeCards
                    title={'Liste des pokemons'}
                    imgSrc={pokeball}
                    subtitle={'Dernièrement créé'}
                    btnText={'Tous les voir'}
                    action={() => nav('/pokemons')}
                >
                    <div className={"flex flex-col gap-2 mt-2"}>
                        {
                            latestPokemons.map((pokemon, index) => {
                                return (
                                    <PokemonLtlCard key={index} pokemon={pokemon}/>
                                )
                            })
                        }
                    </div>
                </HomeCards>

                <HomeCards
                    title={'Fais une partie !'}
                    imgSrc={game}
                    subtitle={'Les meilleurs scores'}
                    btnText={'Fais une partie !'}
                >
                    fz
                </HomeCards>

                <HomeCards
                    title={'Fais une partie !'}
                    imgSrc={game}
                    subtitle={'Les meilleurs scores'}
                    btnText={'Fais une partie !'}
                >
                    fz
                </HomeCards>

            </div>

        </div>
    )
}
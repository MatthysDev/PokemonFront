import pikachu from '../../assets/img/pikachu-home.png'
import Input from "../../components/ui_form/Input.jsx";
import {useContext, useState} from "react";
import Button from "../../components/ui_form/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext.jsx";
import {login} from "../../services/users.services.js";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const nav = useNavigate()
    const {setUser} = useContext(UserContext)

    function reset() {
        setEmail('')
        setPassword('')
        setUsername('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userLog = await login({
                email,
                password,
                username
            })
            setUser(userLog.data)
            nav('/')
        } catch (err) {
            alert('Erreur')
            reset()
        }
    }

    return (
        <div className={"flex"}>
            <img className={"h-screen w-3/5 object-cover hidden lg:block"} src={pikachu} alt=""/>
            <div className={"h-screen w-full lg:w-2/5 bg-primary"}>
                <form className={"h-full flex flex-col items-center justify-center"} onSubmit={handleSubmit}>
                    <h2 className={"text-white font-bold text-5xl pb-2 mb-4 border-b-2"}>Connexion</h2>
                    <Input
                        label={'Email'}
                        type={"email"}
                        placeholder={"exemple@gmail.com"}
                        value={email}
                        setValue={setEmail}
                        required={true}
                    />
                    <Input
                        label={'Nom d\'utilisateur'}
                        type={"text"}
                        placeholder={"XxD4rkSasukexX"}
                        value={username}
                        setValue={setUsername}
                        required={true}
                    />
                    <Input
                        label={'Mot de passe'}
                        type={"password"}
                        placeholder={"******"}
                        value={password}
                        setValue={setPassword}
                        required={true}
                    />
                    <Button
                        type={'submit'}
                        text={'Se connecter'}
                    />
                    <Link to={'/register'} className={'px-4 py-2 text-s mt-6 text-white italic underline hover:bg-gray-400/25 transition rounded-full'}>Pas encore de compte ?</Link>
                </form>
            </div>
        </div>
    )
}
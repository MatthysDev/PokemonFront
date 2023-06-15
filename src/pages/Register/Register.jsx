import pikachu from '../../assets/img/pikachu-home.png'
import Input from "../../components/ui_form/Input.jsx";
import {useState} from "react";
import Button from "../../components/ui_form/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../../services/users.services.js";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const nav = useNavigate()

    function reset() {
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await register({
                email,
                password,
                username
            })
            nav('/login')
        } catch (err) {
            alert("Erreur")
        }
    }


    return (
        <div className={"flex"}>
            <img className={"h-screen w-3/5 object-cover hidden lg:block"} src={pikachu} alt=""/>
            <div className={"h-screen w-full lg:w-2/5 bg-primary"}>
                <form className={"h-full flex flex-col items-center justify-center"} onSubmit={handleSubmit}>
                    <h2 className={"text-white font-bold text-5xl pb-2 mb-4 border-b-2"}>Créer un compte</h2>
                    <Input
                        label={'Email'}
                        type={"email"}
                        placeholder={"exemple@gmail.com"}
                        value={email}
                        required={true}
                        setValue={setEmail}
                    />
                    <Input
                        label={'Nom d\'utilisateur'}
                        type={"text"}
                        placeholder={"XxD4rkSasukexX"}
                        value={username}
                        required={true}
                        setValue={setUsername}
                    />
                    <Input
                        label={'Mot de passe'}
                        type={"password"}
                        placeholder={"******"}
                        value={password}
                        setValue={setPassword}
                        required={true}
                    />
                    <Input
                        label={'Confirmer mon mot de passe'}
                        type={"password"}
                        placeholder={"******"}
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                        required={true}
                    />
                    <Button
                        type={'submit'}
                        text={'Créer mon compte'}
                    />
                    <Link to={'/login'} className={'px-4 py-2 text-s mt-6 text-white italic underline hover:bg-gray-400/25 transition rounded-full'}>Déjà membre ?</Link>
                </form>
            </div>
        </div>
    )
}
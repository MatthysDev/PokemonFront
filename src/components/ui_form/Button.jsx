export default function Button({action, text, type, addClass=''}){
    return(
        <button
            className={'py-2 px-4 bg-primary_dark rounded text-white font-bold shadow-lg hover:bg-primary_darker transition ease-in-out duration-300 hover:shadow-xl focus:outline-white ' + addClass}
            type={type}
            onClick={action}>
            {text}
        </button>
    )
}
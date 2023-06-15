export default function Input({label, type, placeholder='...', value, setValue, required=false, disabled=false }){
    return(
        <div className={"mb-4"}>
            <label className={"block text-md text-gray-600"}>{label}</label>
            <input
                className={"py-2 px-4 shadow-lg rounded focus:outline-primary_dark text-gray-500"}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required={required}
                disabled={disabled}
            />
        </div>
    )
}
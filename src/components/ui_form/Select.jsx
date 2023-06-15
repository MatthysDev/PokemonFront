export default function Select({label, value, setValue, required=false, children}){
    return(
        <div className={"mb-4"}>
            <label className={"block text-md text-gray-600"}>{label}</label>
            <select
                className={"py-2 px-4 shadow-lg rounded focus:outline-primary_dark text-gray-500"}
                value={value}
                onChange={(e) => setValue(e.target.value)
                }
                required={required}
            >
                {children}
            </select>
        </div>
    )
}
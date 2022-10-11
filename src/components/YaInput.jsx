const YaInput = (props) => {
    return (
    <div className="yainput mb-4">
        <label 
          className="block text-gray-700 text-sm font-bold mb-2"
           htmlFor={props.name}
           >
          {props.name}
        </label>
        <input 
          onChange={props.onChange} 
          required={props.required} 
          className={
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             + (props.errors ? "border-red-400" : "")
            }
          id={props.name} 
          name={props.name} 
          type={props.type} 
          placeholder={props.placeholder}
        />
        {
        props.errors && <p className="pt-2 w-[200px] text-red-400 text-sm">{props.errors}</p>
        }
    </div>

    )
}
export default YaInput;
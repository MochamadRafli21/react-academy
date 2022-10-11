const YaInput = (props) => {
    return (
    <div className="yainput mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.name}>
          {props.name}
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} />
    </div>

    )
}
export default YaInput;
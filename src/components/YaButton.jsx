const YaButton = (props) => {
    return (
        <button className={
            ( props.disabled ? "bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow": "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow")
        }
            type={props.type} disabled={props.disabled}>
            {props.name}
        </button>
    )
}
export default YaButton;
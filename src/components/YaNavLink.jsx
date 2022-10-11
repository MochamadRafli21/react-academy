const YaNavLink = (props) => {
    return (
        <a href={props.url}>
        <button className={
            ( props.disabled ? "bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow": "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow")
        }
            type="button" disabled={props.disabled} onClick={() => setCount((count) => count + 1)}>
            {props.name}
        </button>
        </a>
    )
}
export default YaNavLink;
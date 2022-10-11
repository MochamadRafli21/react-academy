const YaButton = (props) => {
    return (
        <button className={"mx-1 font-semibold py-2 px-4 border border-gray-400 rounded shadow "+ 
            (props.disabled === true ? "bg-slate-400 text-gray-300 ": "bg-slate-50 hover:bg-gray-200 text-gray-800")
        }
            type={props.type} disabled={props.disabled}>
            {props.name}
        </button>
    )
}
export default YaButton;
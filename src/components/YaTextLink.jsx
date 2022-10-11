const YaLink = (props) => {
    return (
    <a href={props.url} className="block text-green-700 text-sm font-bold mb-2">
        {props.name}
    </a>

    )
}
export default YaLink;
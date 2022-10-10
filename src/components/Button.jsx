const Button = (props) => {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <button className="px-6 py-2 rounded bg-slate-100 hover:bg-slate-200 border-solid border border-slate-400 hover:border-emerald-200 hover:text-emerald-200 text-slate-700" type="button" disabled={props.disabled} onClick={() => setCount((count) => count + 1)}>
                    props.disabled
                </button>
            </div>
        </div>
    )
}
export default Button;
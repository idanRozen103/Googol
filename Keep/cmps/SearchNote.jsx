
export function SearchNote({ onSetFilter }) {
    return (
        <form className="flex note-filter">
            <img src="./assets/img/search.png" alt="" />
            <input name="filter" type="text" placeholder="Search Note" onChange={(ev) => {
                onSetFilter(ev.target.value)
            }} />
        </form>
    )
}

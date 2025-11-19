import MenuItem from "./menuItem"

export default function MenuList({ listItems = [] }) {
    return (
        <ul className="list-container">
            {listItems && listItems.length > 0
            ? listItems.map((element, index) => {
                    return <MenuItem key={index} item={element} />
                })
                :
                null
            }
        </ul>
    )
} 
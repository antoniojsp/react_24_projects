import MenuItem from "./menuItem"

export default function MenuList({ lists = [] }) {
    console.log(lists)
    return (
        <ul className="menu-list-container">
            {lists && lists.length > 0 ?
                lists.map(item => {
                    return <MenuItem item={item} />
                })
                :
                null
            }


        </ul>
    )
} 
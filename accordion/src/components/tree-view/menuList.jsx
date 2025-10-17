import MenuItem from "./menuItem"

export default function MenuList({lists=[]}){
    console.log(lists)
    return(
        <div className="menu-list-container">
            {lists && lists.length > 0 ?
                lists.map(item => <menuItem>{item}</menuItem>)
            :
            null
            }
        </div>
    )
}
import MenuList from "./menuList"       

export default function MenuItem({item}){  
    console.log("item", item)
    return(
        <li className="menu-list-container">
            {item.label}
             {item.children && item.children.length > 0 ? 
                                    <ul>
                                        <MenuList lists={item.children}/>
                                    </ul>:null
                                }
        </li>
    )
}
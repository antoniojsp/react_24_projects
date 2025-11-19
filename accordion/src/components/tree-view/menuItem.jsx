import MenuList from "./menuList"       
import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function MenuItem({ item }){  
    const [displayCurrChildren, setDisplayCurrChildren] = useState({})

    function handleToggleChildren(level){        
        setDisplayCurrChildren(prev =>( {...prev, 
                                         [level]: prev[level] ? !prev[level] : true }))
    }

    return( 
        <li>
            <div className="item-container" >
                <p>{item.label}</p>
                {item && item.children && item.children.length > 0 
                ? <span onClick={() => handleToggleChildren(item.label)}>
                    {displayCurrChildren[item.label] ? <FaMinus color="#fff" size={25}/>
                                                       :  
                                                       <FaPlus color="#fff" size={25}/>
                    }
                </span>:null}
                
            </div>

             {item && item.children && item.children.length > 0  && displayCurrChildren[item.label]
                                    ? 
                                    (
                                        <MenuList  listItems={item.children}/>
                                    
                                    ):null
                                }
        </li>
    )
}
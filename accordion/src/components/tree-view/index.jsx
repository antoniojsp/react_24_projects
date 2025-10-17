import MenuList from "./menuList"
export default function TreeView({ list = [] }) {
    // console.log(list)
    return (
        <div className="tree-view-container">
            <MenuList lists={list}/>
        </div>
    )
}
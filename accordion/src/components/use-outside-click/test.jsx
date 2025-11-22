import { useRef, useState } from "react";
import useOutSideClick from ".";

export default function testUseOutsideClick(){
    const ref = useRef();
    const [showContent, setShowContent] = useState(true);
    useOutSideClick(ref, ()=>{
                    setShowContent(false)
                });

    return (<div ref ={ref} className="use-outside-click-container">
        {
            showContent ?<div>
                <h1>Randon Content</h1>
                <p>Click outside</p>
            </div>:( <button onClick={()=>setShowContent(prev => !prev)}>Toggle</button>)
        }
       
    </div>)
}
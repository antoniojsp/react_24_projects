import data from "./data"
import { useEffect, useState } from "react";
import "./styles.css"
export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelected] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSlection(getCurrentId) {
        setSelected(prev => prev === getCurrentId ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        setMultiple(prev =>
            prev.includes(getCurrentId) ? prev.filter(x => !(x === getCurrentId)) : [...prev, getCurrentId]
        )
    }

    useEffect(() => console.log(multiple), [multiple]);

    return (
        <div className="wrapper">
            <button onClick={() => { setEnableMultiSelected(prev => !prev) }}>Enable Multi-Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => {
                            const selection_mode = enableMultiSelection ?
                                multiple.includes(dataItem.id) :
                                selected === dataItem.id
                            const handleClick = () => enableMultiSelection ?
                                handleMultiSelection(dataItem.id) :
                                handleSingleSlection(dataItem.id)

                            return <div className="item" key={dataItem.id}>
                                <div
                                    className="title"
                                    onClick={handleClick} >
                                    <h3 > {dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {selection_mode && <div className="answer"> {dataItem.answer}</div>}
                            </div>
                        })
                        :

                        (<div>No data Found</div>)
                }
            </div>
        </div>
    );

}
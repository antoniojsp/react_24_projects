import { useRef } from "react";

export default function ScrollToSection() {

    const sectionRef = useRef(null);
    const data = [
        {
            label: "First Section",
            style: {
                width: "100%",
                height: "600px",
                background: "red"
            }
        },
        {
            label: "Second Section",
            style: {
                width: "100%",
                height: "600px",
                background: "blue"
            }
        }, {
            label: "Third Section",
            style: {
                width: "100%",
                height: "600px",
                background: "green"
            }
        }, {
            label: "Fourth Section",
            style: {
                width: "100%",
                height: "600px",
                background: "pink"
            }
        }, {
            label: "Fifth Section",
            style: {
                width: "100%",
                height: "600px",
                background: "yellow"
            }
        }, {
            label: "Sixth Section",
            style: {
                width: "100%",
                height: "600px",
                background: "teal"
            }
        },
    ]

    function handlerScroll(){       
        sectionRef.current.scrollIntoView({behavior:"smooth"});
    }

    return <div>
        <h1>Scroll To Section Component</h1>
        <button onClick={handlerScroll}>Scroll to third</button>
        {
            data.map((section, index) =>
                <div key={index} ref={index === 2?sectionRef:null} style={section.style}>
                    <h2>{section.label}</h2>
                </div>
            )
        }
    </div>

}
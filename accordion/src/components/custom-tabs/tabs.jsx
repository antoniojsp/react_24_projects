import { useState } from "react"
import "./tabs.css"

export default function Tabs({tabsContent, onChange}){
    // console.log(tabsContent)
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleChangeTabs(index){
        setCurrentTabIndex(index)
    }

    return (<div className="wrapper">
                <div className="heading">
                    {
                        tabsContent.map((tab, index) => (
                        <div 
                            key={tab.label}
                            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                            onClick={(x) => handleChangeTabs(index)}
                        >
                            <span className="label">
                                    {tab.label}
                            </span>
                        </div>))
                    } 
                </div>
                <div className="tab-content">
                    {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content ?
                        tabsContent[currentTabIndex].content
                    :null
                    }
                </div>
        </div>)
}
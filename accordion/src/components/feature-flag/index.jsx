import LightDarkTheme from "../light-dark"
import TicTacToe from "../tic-tac-toe"
import RandomColor from "../random-folder"
import Accordian from "../accordian"
import TreeView from "../tree-view"
import TabTest from "../custom-tabs/tab-test"
import data from "../tree-view/data"

import { FeatureFlagsContext } from "./context"
import { useContext } from "react"

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext)
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkTheme />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView list={data}/>
        },
        {
            key: 'showTabs',
            component: <TabTest />
        },
    ]

    if (loading) {
        return <h1>Loading Data</h1>
    }

    return (<div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(
                (item ) =>  enabledFlags[item.key]?item.component:null
            )
        }
    </div>)
}
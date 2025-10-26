import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";

export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]); // all the user names, load once
    const [currSearch, setCurrUsers] = useState([]); // 
    const [showSuggestion, setShowSuggestions] = useState(false);
    const [searchParameter, setSearchParameter] = useState("");

    async function getUsers() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users?limit=0")
            const data = await response.json()
            if (data && data.users.length > 0) {
                const userNames = data.users.map(
                    x => x.username
                )
                setUsers(userNames)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => { 
        getUsers(); }
        , [])

    function handleSearch(value) {
        setSearchParameter(value)
        const currentSearch = users.filter(x => x.startsWith(value)).sort()
        setCurrUsers(currentSearch)
        if(value){ // if value is empty, hides suggestions
            setShowSuggestions(true)
        }else{
            setShowSuggestions(false)
        }
    }

    function handleOnClick(e){
        setShowSuggestions(false)
        setSearchParameter(e.target.innerText)
        setCurrUsers([])
    }

    if(loading){
        return <div>Loading.. </div>
    }

    return (<div className="search-autocomplete-container">
                <input
                    name="search-users"
                    value={searchParameter}
                    placeholder="Search users here..."
                    onChange={e => handleSearch(e.currentTarget.value)}
                />

                    {(showSuggestion && currSearch.length > 0) ? 
                        <Suggestions data={currSearch} handleOnClick={handleOnClick}/>: null}
            </div>
    )
}
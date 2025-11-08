import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";
import "./styles.css"

export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]); // all the user names, load once
    const [currSearch, setCurrUsers] = useState([]); // 
    const [showSuggestion, setShowSuggestions] = useState(false);
    const [searchParameter, setSearchParameter] = useState("");
    const  [selectedUser, setSelectedUser] = useState(null)

    async function getUsers() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users?limit=0")
            const data = await response.json()
            if (data && data.users.length > 0) {
                const userNames = data.users.map(
                    x => [x.username, x.university]
                )
                setUsers(userNames)
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    function searchId(){
        // console.log(users)
        const result = users.findIndex(x => x[0] === selectedUser)
        console.log("here", result, users[result][1]);
        const [name, university] = users[result];
        return `${name} goes to ${university}`;
    }

    useEffect(() => { 
        getUsers(); }
        , [])
    

    function handleSearch(value) {
        setSearchParameter(value)
        const currentSearch = users.map(x =>{ if (x[0].startsWith(value)) {
                                                    return x[0];
                                                 } return}
                                                ).sort()
        setCurrUsers(currentSearch)
        if(value){ // if value is empty, hides suggestions
            setShowSuggestions(true)
        }else{
            setShowSuggestions(false)
        }
    }


    console.log(users[34])

    if(loading){
        return <div>Loading.. </div>
    }
    
    return (<div className="search-autocomplete-container">
                <input
                    name="search-users"
                    value={searchParameter}
                    placeholder="Search users here..."
                    onChange={e => handleSearch(e.currentTarget.value)}
                    list="userList"
                />
                <button type="submit" onClick={() => setSelectedUser(searchParameter)}>Lookup</button>
                <datalist id="userList">
                    {currSearch.map((user, index) => (
                        <option 
                            key={index} 
                            value={user}
                        />
                    ))}
                </datalist>

                {selectedUser && <p>{searchId(selectedUser)}</p>}

                    {/* {(showSuggestion && currSearch.length > 0) ? 
                        <Suggestions data={currSearch} handleOnClick={handleOnClick}/>: null} */}
            </div>
    )
}
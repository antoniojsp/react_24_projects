import { useEffect, useState } from "react"
import User from "./card";
import "./styles.css"

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("antoniojsp");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    function handleSubmit() {
        fetchGitHubInfo(userName)
    }

    async function fetchGitHubInfo(user) {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${user}`)
            const data = await response.json()
            if (data && data.avatar_url) {
                setUserData(data);
                setUserName("")
            } else {
                setUserData(null);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    useEffect(x => {
        fetchGitHubInfo(userName)
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (<div className="profile-container">
        <div className="input-wrapper">
            <input
                name="search-by-name"
                type="text"
                placeholder="Search GitHub user name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSubmit}> Search </button>
        </div>
        <div>
            {userData ? <User user={userData} /> : null}
        </div>
    </div>
    )
}
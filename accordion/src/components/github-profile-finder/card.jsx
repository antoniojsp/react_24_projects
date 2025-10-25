
import "./styles.css"

export default function User({ user }) {

    const { avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at
    } = user

    const createdAt = new Date(created_at);

    return (
        <div className="container-github">
            <div>
                <img src={avatar_url} className="avatar" />
            </div>

            <div className="name-container">
                <a href={`https://github.com/${login}` }> {name || login} </a>
                <p>
                    User joined on{" "}
                    {`${createdAt.getDate()} ${createdAt.toLocaleString("en-us", {
                        month: "short",
                    })} ${createdAt.getFullYear()}`}
                </p>
            </div>

            <div className="profile-info">
                <div>
                    <p>Public repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>

        </div>
    )
}
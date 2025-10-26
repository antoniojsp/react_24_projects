
export default function Suggestions({data, handleOnClick}){


    return (
        <ul>
            {data.map(x => <li onClick={handleOnClick}>{x}</li>)}
        </ul>
    )
}
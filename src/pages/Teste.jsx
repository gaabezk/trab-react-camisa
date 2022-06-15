import {Tweet} from "../components/Tweet";
import {useState} from "react";

export function Teste() {

    const [tweets, setTweets] = useState([
        "coe 1",
        "coe 2",
        "coe 3",
        "coe 4",
        "coe 5",
        "coe 6",
        "coe 7",
        "coe 8",
    ])

    function criarTweet() {
        setTweets([...tweets, "coe 9"])
    }

    return (
        <>
            {tweets.map(tweet => {
                return <Tweet texto={tweet}/>
            })}
            <button style={{backgroundColor: "#825766"}} onClick={criarTweet}>Adicionar tweet</button>

        </>
    )

}
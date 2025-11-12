import { useEffect, useState } from "react"
// import "./SearchPage.css"
import PlayerCard from "../../components/PlayerCard/PlayerCard"

const SearchPage = () => {
    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState([])
    const [error, setError] = useState(undefined)
    const [filteredPlayers, setFPlayers] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if (playerName.trim().length <= 0 ) return
        setFPlayers(players)
        // console.log(players);
        setFPlayers(players.filter((el) => el.name.toLowerCase().includes(playerName.toLowerCase())))
    }

    useEffect(() =>{
        setError(undefined)
        const fetchPlayers = async () => {
            try {
                const res = await fetch(`https://khl.api.webcaster.pro/api/khl_mobile/players_v2_light.json`)
                const data = await res.json()
                if (data.Response === "False") {
                    throw new Error(data.Error)
                }
                setPlayers(data)
                setFPlayers(data)
            } catch(err) {
                setError(err.message)
                console.error(err)
            }
        }
        fetchPlayers()
    },[])



    return (
        <>
            <h1>Поиск</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    type="text" />
                <button type="submit" >Поиск</button>
            </form>
            {error ? 
                (   <div>{error}</div>) : 
                    (<div className="player-feed">
                    {filteredPlayers && filteredPlayers.map((player) => 
                    <PlayerCard key={player.id} {...player} />)}
            </div>)}
        </>
    )
}

export default SearchPage
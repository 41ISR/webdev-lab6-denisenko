import { useState } from "react"
import "./SearchPage.css"
import PlayerCard from "../../components/PlayerCard/PlayerCard"

const SearchPage = () => {
    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState([])
    const [error, setError] = useState(undefined)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (playerName.trim().length <= 0 ) return
        setError(undefined)
        setPlayers([])
        try {
            const res = await fetch(`https://records.nhl.com/site/api/draft?cayenneExp=draftYear=2023%20`)
            const data = await res.json()
            if (data.Response === "False") {
                throw new Error(data.Error)
            }
            setPlayers(data.Search)
        } catch(err) {
            setError(err.message)
            console.error(err)
        }
    }

    return (
        <>
            <h1>Поиск</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    type="text" />
                <button>Поиск</button>
            </form>
            {error ? 
                (   <div>{error}</div>) : 
                    (<div className="movie-feed">
                    {players.map((player) => <PlayerCard {...player} />)}
            </div>)}
        </>
    )
}

export default SearchPage
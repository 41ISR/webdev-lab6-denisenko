import { useEffect, useState } from "react"
import { useParams } from "react-router"

const PlayerDetails = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState(undefined)

    useEffect(() => {
        const handleLoad = async () => {
            try {
                const res = await fetch(`https://khl.api.webcaster.pro/api/khl_mobile/players_v2_light.json?q[id_in][]=${id}`)
                const data = await res.json()
                setPlayer(data)
            } catch (error) {
                console.errror(error)
            }
        }
        handleLoad()
    },[id])

    return (
        <>
            {player && (
                <div className="player-details">
                    {Object.entries(player).map(
                        (entry) => (
                            <div className="entry">
                                <span><b>
                                    {entry[0]}:
                                </b></span>
                                <span>
                                    {JSON.stringify(entry[1])}
                                </span>
                            </div>
                            
                        )
                        )}
                </div>
            )}
            
        </>
    )
}


export default PlayerDetails
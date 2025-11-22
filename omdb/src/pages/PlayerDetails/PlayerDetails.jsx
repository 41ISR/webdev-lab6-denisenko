import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import "./PlayerDetails.css"

const PlayerDetails = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState({})
    const [err, setError] = useState(undefined)

    useEffect(() => {
        const handleLoad = async () => {
            setError(undefined) 
            try {
                const res = await fetch(`https://khl.api.webcaster.pro/api/khl_mobile/players_v2.json?q[id_in][]=${id}`)
                const data = await res.json()
                console.log(data);
                
                
                setPlayer(data[0].player)
                

            } catch (error) {
                setError(error.message)
                console.error(error)
                setPlayer([])
            }
        }
        handleLoad()
        
    },[])

    return player && (
                <div className="player-details">
                    {err ? (<div>{err}</div>) : (
                        <>
                            <h1 className="player-details-name">{player.name}</h1>
                            
                            <div className="player-details-info">
                                <div className="player-details-img"><img src={player.image} /></div>
                                <div className="player-details-bio">
                                    <div><span>Возраст:</span><span>{player.age}</span></div>
                                    <div><span>Рост:</span> <span>{player.height}</span></div>
                                    <div><span>Вес:</span> <span>{player.weight}</span></div> 
                                </div>

                                <div className="player-details-role">
                                    <div className="player-details-num">{player.shirt_number ? player.shirt_number : "-"}</div>
                                    <div className="player-details-amplua">{player.role}</div>
                                </div>

                                <div className="player-details-team">
                                    <div className="player-details-team-img"><img src={player.team ? player.team.image : "https://i.pinimg.com/originals/d4/32/86/d43286e92d2b2ce825f178ffc7d2e3c7.png"} /></div>
                                    
                                    <div className="player-details-team-name">
                                        <div>{player.team ? player.team.name : "" }</div>
                                        <div>{player.team ? player.team.location : "" }</div>
                                    </div>
                                </div>

                                <div className="player-details-country">
                                    <div className="player-details-country-img"><img src={player.flag_image_url} /></div>
                                    <div>{player.country}</div>
                                </div>
                            </div>

                            <div className="player-details-stats">
                                {player.stats && player.stats.map((el) =>(
                                    <div className="player-details-stats-block" key={el.id}>
                                        <div className="stats-block-title">{el.title}</div>
                                        <div className="stats-block-val">{el.val}</div>
                                        <div className="stats-block-max">max: {el.max}</div>
                                    </div>
                                ))}
                            </div>
                            
                            
                        </>)}
                
                </div>
            )

}


export default PlayerDetails
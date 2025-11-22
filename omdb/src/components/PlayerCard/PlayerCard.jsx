import { useNavigate } from 'react-router'
import "./PlayerCard.css"

const PlayerCard = ({name, id, team, image}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/player/${id}`)
    }
    return (
        <div onClick={handleClick} className="player-card">
            <div className="player-card-img"><img src={image} /></div>
            <div className="player-card-info">
                <h4 className="player-card-name">{name != null && name}</h4>
                <div className="player-card-team">{team !== null ? team.name : 'Нет команды'}</div>
            </div>
            
        </div>
    )
}

export default PlayerCard
import { useNavigate } from 'react-router'

const PlayerCard = ({playerName, id, ageInYears, teamPickHistory}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/player/${id}`)
    }
    return (
        <div onClick={handleClick} className="player-card">
            <h4 className="player-card__player-name">{playerName}</h4>
            <div className="player-card__age-in-years">{ageInYears}</div>
            <div className="player-card__team-pick-history">{teamPickHistory}</div>
        </div>
    )
}

export default PlayerCard
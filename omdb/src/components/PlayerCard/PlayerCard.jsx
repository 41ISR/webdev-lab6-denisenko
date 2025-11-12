import { useNavigate } from 'react-router'

const PlayerCard = ({name, id, age, team}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/player/${id}`)
    }
    return (
        <div onClick={handleClick} className="player-card">
            <h4 className="player-card__player-name">{name != null && name}</h4>
            {/* <div className="player-card__age-in-years">{age}</div> */}
            <div className="player-card__team-pick-history">{team !== null ? team.name : 'null'}</div>
        </div>
    )
}

export default PlayerCard
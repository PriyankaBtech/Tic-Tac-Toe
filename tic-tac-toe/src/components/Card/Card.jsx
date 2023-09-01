import Icon from "../Icon/Icon";

function Card() {
    let icon = <Icon/>
    if(player === 'X') {
        icon = <Icon name="cross"/>
    } else if(player === 'O') {
        icon = <Icon name="circle"/>
    }
    return (
        <div className="icon">
             {icon}
        </div>
    )
}

export default Card;
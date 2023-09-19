import Card from "./card/Card";
import './CardContainer.css'


function CardContainer(){
    return(
        <div className="card-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

    )
}

export default CardContainer;
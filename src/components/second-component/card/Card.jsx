import HeadingOfCard from "./HeadingOfCard";
import Info from "./Info";
import BoxCard from "./BoxCard";
import ButtonCard from "./ButtonCard";
import './Card.css'

function Card(){
  let src="career/src/imaages/Vector.png"
  return(
    <div id="card">
    <HeadingOfCard></HeadingOfCard>
    <Info></Info>
    <BoxCard></BoxCard>
    <ButtonCard></ButtonCard>
    </div>
  )
}

export default Card;
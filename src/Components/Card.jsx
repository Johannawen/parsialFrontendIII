const Card = (props) => {
  return (
    <div className="card">  
      <h4>Hola soy {props.name} y quiero que recuerdes que: </h4>
      <h2> {props.phrase}</h2>
    </div>
  )
}

export default Card;

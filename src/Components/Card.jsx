const Card = (data) => {
  return (
    <div>
      <h4>Hola soy {data.name} y quiero que recuerdes que: </h4>
      <h2> {data.phrase}</h2>
    </div>
  )
}

export default Card;

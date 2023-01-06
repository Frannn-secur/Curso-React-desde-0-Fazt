export function Saludar({title, name= "User"}) {
  return <h1>Esto es el props del componente {title.toString()}, dice {name}</h1>;
}

export function UserCard(props) {
  console.log(props)
  return <div>
    <h1>Usuario: {props.name}</h1>
    <p>Este es tu dinero: ${props.amount}</p>
    <p>¿Esta casado?: {props.married ? "Si" : "No"}</p>
    <ul>
      <li>City: {props.address.city}</li>
      <li>Calle: {props.address.street}</li>
    </ul>
    <p>Alerta sacada con exito {props.greet}</p>
  </div>;
}


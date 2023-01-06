import './tarea.css'

export function Tarea(props) {
  return (
    <div className='tarea'>
      <h1>Esta es mi primera Tarea</h1>
      <span
      className={props.preparado ? 'bg-green' : 'bg-red'}>{
        props.preparado ? "Tarea Realizada" : "Tarea Pendiente"
      }</span>
      <p>Tarea realizada con exito.</p>
    </div>
  );
}

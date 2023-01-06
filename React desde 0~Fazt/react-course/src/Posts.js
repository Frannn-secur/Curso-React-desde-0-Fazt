import {VscBug} from 'react-icons/vsc'
import {VscArchive} from 'react-icons/vsc'

export const Post = () => {
    return <button onClick={() => {
        fetch("https://jsonplaceholder.typicode.app/posts")
        //Esto significa que una vez que coja la informacion de la pagina quiero que me la guarde en un fichero JSON 
        .then(response=> response.json())
        //Y luego quiero que me la muestre en la consola.
        .then(data => console.log(data))
        //Y aqui si se ha producido un error, me lo capturará y me lo mostrará por pantalla.
        .catch (error => console.error(error))
    }}>
        <VscBug/>
        Traer Datos
        <VscArchive/>
    </button>
}
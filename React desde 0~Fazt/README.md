# **Introduccion

## ¿Qué es React?

React es una biblioteca de JavaScript para poder desarrollar aplicaciones web interactivas que responden velozmente como si fueran aplicaciones nativas, es un biblioteca open source, se usan en muchas empresas como Facebook, Pinterest, Netflix.

Esta al mismo nivel que Angular. React esta basado en componentes lo cual te permite crear aplicaciones grandes a través de partes mas chicas. Te permite crear interfaces pero no te dice como ni que utilizar, necesita de otro modulo React y que no es parte de este mismo. React sirve para crear interfaces graficas rapida y de forma sencilla.

**Node** es basicamente un programa que nos permite utilizar node fuera del navegador, necesitamos unas herramientas que nos permita crear estas aplicaciones. Node nos permitirá crear un servidor de desarrollo para poder empezar a diseñar nuestra interfaz a medida que vamos tocando el codigo.

## Create-react-app

Hay dos formas bastante comunes de crear una app en react.

1. Esta es la forma mas facil y común de crear un proyecto en React --> **<https://create-react-app.dev/>** te vas aquí y con un simple comando tendrías todo ya creado.
2. Hay una herramienta que es mas fácil y rapida que es --> **<https://vitejs.dev/>** esta herramienta permite crear multiples proyectos no solo de React.

Vamos a crearlo con la primera opcion...

Lo primero que tenemos que hacer es irnos a un cmd normal, poner esta linea de comando:
npx create-react-app react-course --> donde npx es un comando que viene con node 10, luego create-react-app es la herramienta que vamos a usar para crear la aplicacion de node y el tercer parametro es el nombre del proyecto en mi caso es react-couse (No puede estar separado por espacios).

Esto puede tomar unos minutos...

Cuando lo instalas te salen una serie de comandos, se hacreado el proyecto de react,

* npm start --> Ejecutar un servidor de desarrollo.
* npm run build --> Preparar la app para la produccion.
* npm test --> Podemos hacer test de nuestra interfaz.
* npm run eject --> Permite poder sacar la configuracion.

## Estructura de proyecto

Ya tenemos el proyecto creado de React. Ahora vamos a ver que tenemos dentro de esta carpeta.
Dentro del la carpeta public hay un index.html, este mismo tiene un div con un id llamado root, este div es el que cargara toda nuestra aplicacion. Todo siempre va a estar por debajo del div.
Dentro de la carpeta src tenemos tanto ficheros css, js, sbg y también podríamos tener ficheros html.
El fichero package.json es el que almacenara que bibliotecas se estan utilizando justo ahora en nuestra aplicacion.
Falta una carpeta que se llama build. Dentro de src crearemos ficheros que inyectaremos en el public, para que esta app se despliegue necesitaremos un comando llamado **npm run build** esta nos creara una carpeta comprimida como si fuese un zip de todo lo que haya en la carpeta de react-course. Por lo que cuando queramos desplegar nuestra aplicacion solo tendremos que pasar la carpeta build.
En la carpeta node_modules son modulos creados por otros desarrolladores, no tenemos que modificar nada de eso al igual que package-lock.json.

## Nuestro primer Hola Mundo en React

~~~js
import React from "react";
import ReactDOM from "react-dom/client";

//Queremos que monte todo en el div padre (en el root)

//Esto seria el elemento root
const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

//El render espera elementos hijos
rootElement.render(<h1>Hola mundo</h1>);
~~~

Lo primero que tenemos que hacer es importar los modulos de react y el react dom de esa forma. Luego tenemos que acceder al elemento root que en este caso es el div para poder dentro de ese mismo insertar otros elementos hijos.
Con ReactDOM.createRoot() hacemos el elemento root en este caso hemos hecho que el elemento root en este caso sea el div con id root que viene ya por defecto y luego con el metodo render() insertamos elementos hijos al elemento root.

## Componentes en React

Un componente es una porcion de una interfaz grafica, tu empiezas con un componente inicial que tenga a todos los componentes, este componente inicial es el root. Adentro de este componente root podemos hacer lo que queramos.

## Primer Componente creado por mi

Esta seria una forma de crear un componente:

~~~js
const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

//Esto seria nuestro primer componente
function Saludar() {
    return <h1>Hello Word!</h1>
}

rootElement.render(<div>
    {/* Para interpretar codigo dentro de aqui tendriamos que poner unos {}, puedes llamar todas las veces que tu quieras.*/}
    {Saludar()}
    {Saludar()}
    {Saludar()}
    {Saludar()}
</div>);
~~~

Esa forma es muy rudimentaria y quedaria mucho mas legible de la siguiente forma:

~~~js
rootElement.render(<div>
    {/* Esta es otra forma de poner el componente */}
    <Saludar></Saludar>
    {/* Y tambien puedes hacerlo asi. Esto se le llama Self Closing Tags.*/}
    <Saludar/>
</div>);
~~~

Podemos inyectar de esas dos formas los componentes.
Como puedes ver en los dos ejemplos de antes cuando son varios componentes los metemos dentro de un div, siempre cuando hagamos un componente tiene siempre que estar dentro de un padre. En el primer ejemplo no nos dio un error porque se trataba de algo simple de ejecutar.

## JSX

Una funcion puede retornar cosas en formato HTML, pero si quisieramos correr esto en JavaScript no podriamos, porque en JavaScript tendriamos que devolver un String.
Con JSX podemos mezclar JavaScript y HTML de la siguiente forma:

~~~js
//Esto seria nuestro primer componente
function Saludar() {
  const married = true;

  return <h1>{married ? "Estoy Casado😀" : "No estoy casado"}</h1>;
}
~~~

Nos hemos creado una variable a true y hemos hecho dentro de un h1 de un HTML un operador ternario, en caso de que sea true nos sacará por pantalla "Estoy Casado😀" y en caso de que no sea True no sacará "No estoy casado".

~~~js
function Saludar() {
  const user = {
    nombre: "Francisco",
    apellido: "Gomez"
  }
  return <h1>{JSON.stringify(user)}</h1>;
}
~~~

Cuando ponemos directamete user si nada delante, nos salta un error de que los objeto no son validos como elementos hijos de un elemento padre, no sabe como mostrarlo, lo sacamos con esto **JSON.stringify(user)**.

~~~js
function Saludar() {
  const user = {
    nombre: "Francisco",
    apellido: "Gomez"
  }
  const booleano = true;

  function sumar (x ,y) {
    return x + y;
  }
  return <div>
    <h1>{user.nombre}</h1>
    <h3>{user.apellido}</h3>
    {/* Si nosotros queremos sacar por pantalla el valor de un booleano lo podemos hacer de la siguiente forma: */}
    <p>{booleano.toString()} y esta es la suma de los numero 2 y 4 = {sumar(2,4)}</p>
  </div>;
}
~~~

En este caso hemos hecho una funcion sumar dentro de la funcion Saludar y la hemos llamado dentro de esta misma.
En caso de que no queramos tener un componente dentro de un otro div, porque simplemente queremos tenerlo donde esta el root existe la etiqueta Fragment que es esta --> "**<>**" la cual React entiende que el elemento padre de esta misma es el propio Root. (Esto lo hariamos sobretodo dentro del render())

## EcmaScript- JavaScript Modules

Para que React te tome las funciones como componentes sigue un estandar que es capitalizar la primera letra de cada funcion. Este es un ejemplo exportando e importando dichos componentes.

~~~js
export function Saludar() {
    return <h1>Componente React</h1>
  }

  export function UserCard() {
    return <p>Esto exportara algo</p>
  }
~~~

Esta no es la unica forma de exportar...

~~~js
function Product () {
    return <div>
        <h1>Prodcuto de Fran</h1>
    </div>
}

export function NavBar() {
    return <nav>
        navigation
    </nav>
}

export default Product;
~~~

Podemos exportar por defecto con el export default y el nombre de la funcion, de esta forma solo tendriamos que poner en el fichero donde queremos usar esa funcion:

~~~js
import Product, {NavBar} from "./Product"
~~~

De esta forma, si dentro de esa biblioteca de componentes queremos exportar libremente uno podemos hacerlo con , {} y te autocompleta casi el mismo practicamente.

## Extension JSX

Si estamos viendo que estamos usando un archivo js para componentes jsx podemos ponerle directamente .jsx en vez del .js, esto no nos aporta nada solamente tener de una forma mas visual los archivos que tenemos y la configuracion del mismo. Llamarlo de una forma o de otra es una preferencia del programador.

## React Props

Los props son para cambiar dentro del componente informacion. Los props son parametros que se le pasan a la funcion, este parametro es un objeto.

~~~js
export function Saludar({title, name= "User"}) {
  return <h1>Esto es el props del componente {title.toString()}, dice {name}</h1>;
}
~~~

Le pasamos a name por defecto User en caso de que no tenga nada, y lo pasamos como un objeto por que al fin y al cabo es lo que es.

~~~js
rootElement.render(
  <>
    <Saludar title="hola" name="Fran"/>
    <Saludar title="bye" name="Juaki"/>
    <Saludar title= {30}/>
    <Saludar title= {true}/>
    <Saludar title= {[1,2,3]}/>
  </>
);
~~~

Le pasariamos informaciona esos props pasandole la info como si fuesen atributos de la etiqueta.
Esta seria otra forma de hacerlo:

~~~js
rootElement.render(
  <>
    <UserCard
      name="Francisco Jose"
      amount={400}
      married={true}
      points={[99, 33.33, 22.3]}
      address={{ street: "123 Main Street", city: "Cordoba" }}
      greet = {function () {
        alert("Esto es una alerta compa")
      }}
    />
  </>
);
~~~

## PropTypes y defaultProps

~~~js
export function Boton(props) {

    if (!props.texto) {
        console.error("Es necesario el texto")
    }
    return <button>
        {props.texto} - {props.married}
    </button>
}

Boton.propTypes = {
    texto: PropTypes.string.isRequired
}

Boton.defaultProps = {
    married: "No"
}
~~~

Con el **Boton.defaultProps**, podemos asignar valores por defecto a atributos o propiedades de dichos componentes que creemos.

~~~js
<Boton
      texto= "Es el primer boton"/>
    <Boton
      texto = "Es el segundo boton"/>
      {/* Lo siguiente da error */}
    <Boton texto = "Fran" 
    married = "Si"/>
~~~

Esta seria la creacion de dichos componentes **Boton** con las propiedades/atributos de **texto y married**.

## Estilos de componentes

Podemos ponerle estilos a los componentes en forma de linea que seria de esta forma:

~~~js
export function Tarea() {
  return (
    <div style={{ background: "#202020", color: "white", padding: "20px" }}>
      <h1 style={{ fontWeight: "lighter" }}>Esta es mi primera Tarea</h1>
      <p>Tarea realizada con exito.</p>
    </div>
  );
}
~~~

Podemos tambien guardar estos estilos en una variable en JavaScript y ponerselo de esta forma:

~~~js
export function Tarea() {

  const estilosTarea = {
    background: "#202020",
    color: "white",
    padding: "20px",
  };

  const estiloH1 = { fontWeight: "lighter" };

  return (
    <div style={estilosTarea}>
      <h1 style={estiloH1}>Esta es mi primera Tarea</h1>
      <p>Tarea realizada con exito.</p>
    </div>
  );
}
~~~

Queda mucho mas bonito y mejor. Pero es mucho mucho mejor meter los estilos de css en un archivo e importar dicho archivo al componente de la siguiente forma:

~~~js
import './tarea.css'

export function Tarea() {

  return (
    <div className='tarea'>
      <h1>Esta es mi primera Tarea</h1>
      <p>Tarea realizada con exito.</p>
    </div>
  );
}
~~~

Los atributos en react son diferentes por lo que tenemos que tener cuidado, sobre todo porque por ejemplo en HTML seria en vez de className sería class, esto nos ha provocado un warning y lo hemos solucionado ya, por eso esta puesto el className.

Ahora vamos a ver como condicional los estilos en react:

~~~js
import './tarea.css'

export function Tarea(props) {
  return (
    <div className='tarea'>
      <h1>Esta es mi primera Tarea</h1>
      <span
      style= {props.preparado ? {background: "green"} : {background: "red"}}>{
        props.preparado ? "Tarea Realizada" : "Tarea Pendiente"
      }</span>
      <p>Tarea realizada con exito.</p>
    </div>
  );
}
~~~

Podemos hacer lo fuera de la etiqueta con unos corchete, o podemos hacerlo dentro de los style, tenemos tambien otra forma:

~~~js
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
~~~

Esta seria una forma con un ternario para poner nombres de clases segun si es true o false la propiedad preparado.

## Tipos de componentes

Podemos crear un componente haciendo una clase, no es lo mas aconsejable sinceramente:

~~~js
import { Component } from "react"

export class Salut extends Component{
    render() {
        return <h1>Hola mundo</h1>
    }
}
~~~

Las clases son algo mas viejo, las funciones son una cosa implementada nueva de React que hace que sea el codigo mas legible y mejor.

## Event Handlers (Manejador de Eventos)

Manejador de eventos en React:

~~~js
export function Boton(props) {
    return <button onClick={function () {
        console.log("Hola mundo")
    }}>
        {props.texto} - {props.married}
    </button>
}
~~~

Asi es como hariamos un evento al clickar un boton... Tambien puedes poner ese mismo evento en el index.js donde llamamos a todos los componentes, por ejemplo de esta forma:

~~~js
rootElement.render(
  <>
    <Boton
      texto= "Es el primer boton"/>
    <input type='text' onClick={function () {
      alert("Seleccionado el input")
    }}></input>
    // Este evento lo que te ofrece es informacion cada vez que escribimos en el input.
    <input id="hola" onChange={function(event) {
      console.log(event);
    }}></input>
    // De esta forma podemos acceder a valores de dentro del evento de la siguiente forma:
    <input type='text' id="hola"onChange={function (event) {
      console.log(event.target.value);
    }}></input>
    <Tarea preparado= {false}/>
    <Salut/>
  </>
);
~~~

El evento onChange es una evento que te dara informacion cada vez que escribamos dentro deeste input. Dentro de este evento podemos ver todas las propiedades de este mismo. Es mucho mas comun almacenar dicha funcion en una variable y llamar a esta funcion en dicho evento de la siguiente forma:

~~~js
const handleChange = (event) => {
  console.log(event.target.value);
}
<input type='text' id="hola" onChange={handleChange}></input>
~~~

De esta forma queda mucho mas legible y facil de visualizar. Esta es otra forma de ver un evento que usaremos mucho que es el submit en un formulario:

~~~js
<form onSubmit={(e) => {
      e.preventDefault()
      alert("Enviado")
    }}>
~~~

Cuando tu de por si haces un submit en React te redirecciona a una pagina o a la misma pasandole argumentos, que es lo normal, entonces si no ponemos el e.preventDefault() que es para alterar los valores por defecto de dicho evento antes no nos podra cargar dicho alert.

## Fecth() API

Es una de las mas usadasde todas y sirve para traer datos.
Rara vez vamos a tener todos los datos en el archivo por lo que vamos a recoger datos desde un sitio web desde JsonPlaceHolder cogeremos datos de ejemplo para trabajar.

~~~js
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
        Traer Datos
    </button>
}
~~~

tanto el .then como el .catch son promesas. que hacen lo que esta puesto en los comentarios.

## Modulos de terceros

Los modulos de terceros son basicamente componentes ya creados por otras personas que nosotros podemos utilizar sin ningun problema descargandonos desde node esos paquetes, en mi caso he probado los iconos de react icons, he hecho un **npm install de react-icons --save** y luego he usado dicho modulo de la siguiente forma:

~~~js
//Los importamos de la forma en la que nos indica la pagína, el nombre entre {} va segun el icono a archivo que tu quieras.
import {VscBug} from 'react-icons/vsc'
import {VscArchive} from 'react-icons/vsc'

//Y luego lo implementas como todos los componentes que hemos creado con anterioridad:
<VscBug/>
Traer Datos
<VscArchive/>
~~~

## Arrays



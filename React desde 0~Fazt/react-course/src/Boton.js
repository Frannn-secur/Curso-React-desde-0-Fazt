import PropTypes from 'prop-types';

export function Boton(props) {
    return <button onClick={function () {
        console.log("Hola mundo")
    }}>
        {props.texto} - {props.married}
    </button>
}

Boton.propTypes = {
    texto: PropTypes.string.isRequired
}

Boton.defaultProps = {
    married: "No"
}


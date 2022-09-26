import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto';


const ComponenteB = ({ contacto }) => {
    return(
        <div>
            <h2>
                Nombre: {contacto.nombre}
            </h2>
            <h2>
                Apellido: {contacto.apellido}
            </h2>
            <h2>
                Email: {contacto.email}
            </h2>
            <h3>
                Conectado: {
                    contacto.conectado ?
                    'Contacto en Linea' :
                    'Contacto no disponible'
                }
            </h3>
        </div>
    )
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB
import React from 'react';
import { Contacto } from '../models/contacto';
import ComponenteB from './ComponenteB';

const ComponenteA = () => {

    const newContacto = new Contacto('Agustin', 'Ramirez', 'rlagustin0@gmail.com', false);

    return(
        <div>
            <h1>
                Usuario: 
            </h1>
            <ComponenteB contacto={newContacto}/>
        </div>
    )
};


export default ComponenteA;
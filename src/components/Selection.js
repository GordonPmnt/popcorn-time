import React from 'react';
import axios from 'axios';


const Selection = ({ match }) => {
    const { movie } = match.params;
    
    return <p>{movie}</p>
}

export default Selection;
import React from "react";

const Movie = ({movieDescr, addTofavourite}) => {

    const styles = {
        container:{
            display: 'flex',
            backgroundColor: 'yellow',
        }
    }

    return (
            <tr>
                <td style={styles.container}>
                    {movieDescr.title}
                </td>
                <button onClick={addTofavourite}>Add to favourites</button>
            </tr>
        )
    }

export default Movie;

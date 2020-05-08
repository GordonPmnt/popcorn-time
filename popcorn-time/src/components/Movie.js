import React from 'react';


const Movie = ({ id, title }) => {
    const styles = {
        p: {
            margin: '1px'
        },
        button: {
            marginRight: '10px'
        },
    }

    const movie = title

    return (
        <div>
            <p style={styles.p}>
                {movie}
            </p>
        </div>
    )
}

export default Movie;
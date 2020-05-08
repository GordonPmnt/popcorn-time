import React from 'react';


const Movie = ({ addToFavorite, id, title }) => {
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
                <button 
                    style={styles.button} 
                    onClick={() => addToFavorite(id, title)}
                >
                    favorites + 
                </button>
                {movie}
            </p>
        </div>
    )
}

export default Movie;
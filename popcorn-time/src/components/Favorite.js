import React from 'react'


const Favorite = ({ id, title, removeFromFavorites }) => {
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
                    onClick={() => removeFromFavorites(id)}
                >
                    favorites - 
                </button>
                {movie}
            </p>
        </div>
    )
}

export default Favorite;
import React from 'react'


const Favorite = ({ id, title }) => {
    const styles = {
        p: {
            margin: '1px'
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

export default Favorite;
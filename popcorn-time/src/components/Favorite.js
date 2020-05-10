import React from 'react'
import Chip from '@material-ui/core/Chip';


const Favorite = ({ id, title, removeFromFavorites }) => {
    const styles = {
        chip: {
            margin: '5px',
            color: '#ff8300',
            background: 'transparent',
            border: 'solid 1px #ff8300',
        },
    }

    return ( 
        <Chip
            style={styles.chip}
            label={title} 
            onDelete={() => removeFromFavorites(id)} 
        />
    )
}

export default Favorite;
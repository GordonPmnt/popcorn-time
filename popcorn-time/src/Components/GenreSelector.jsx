import React from 'react'

const GenreSelector = ({genres, getSelection}) => {
    
    return(
        <select name="pets" id="pet-select" onChange={({target}) => getSelection(target.value)}>
            <option value="">--Please choose an option--</option>
            {genres.map((genre, i) => (
                <option key={i} value={genre}>{genre}</option>
            ))}
        </select>
    )
}

export default GenreSelector;
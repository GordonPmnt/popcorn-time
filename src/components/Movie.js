import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: '#96999C',
        margin: 15,
        padding: '5px',
        borderRadius: '15px',
        background: 'linear-gradient(145deg, #292b2e, #222427)',
        boxShadow: '5px 5px 10px #202225, -5px -5px 10px #2c2e31',
        border: '1px solid rgba(0, 0, 0, 0.02)',
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'column',
    },
    screen: {
        display: 'flex',
        width: '105px',
        height: '140px',
        marginTop: '8px',
        borderRadius: '10px',
        background: '#26282B',
        boxShadow: 'inset 5px 5px 10px #1e2022, inset -5px -5px 10px #2e3034',
        justifyContent: 'center',
        alignItems: 'center',
    },
    media: {
        borderRadius: '5px',
        width: '85px',
        height: '120px',
        fontSize: '0.5rem',
        opacity: '0.85',
        border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    button: {
        borderRadius: '100%',
        background: 'linear-gradient(145deg, #292b2e, #222427)',
        boxShadow: '5px 5px 9px #1e2022, -5px -5px 9px #2e3034',
        border: '1px solid rgba(0, 0, 0, 0.02)',
    },
    buttonfavorite: {
        color: '#ff8300',
        background: '#26282B',
        boxShadow: 'none',
        border: 'solid 1px #ff8300',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: '10px',
        borderRadius: '100%',
        background: 'linear-gradient(145deg, #292b2e, #222427)',
        boxShadow: '5px 5px 9px #1e2022, -5px -5px 9px #2e3034',
        border: '1px solid rgba(0, 0, 0, 0.02)',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        boxShadow: 'none',
        background: '#26282B',
        color: '#ff8300',
        border: 'solid 1px #ff8300',
    },
    plot: {
        fontSize: '0.6rem', 
        overflow: 'scroll',
        width: '85px',
        height: '120px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '5px',
    }
}));

const Movie = ({ 
    id, 
    title,
    year,
    genres,
    director,
    actors,
    plot,
    posterUrl, 
    favorite,
    addToFavorite,
    removeFromFavorites,
    }) => {
    
    const classes = useStyles();
    const [ expanded, setExpanded ] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleFavoriteClick = () => {
        if(favorite) {
            removeFromFavorites(id)
        }
        if(!favorite) {
            addToFavorite(id, title)
        }
    };

    return (
        <Card className={classes.root}>
            <div className={classes.header}>
                <CardHeader
                    title={expanded ? director : title}
                    subheader={expanded ? actors : `${year} - ${genres.join(', ')}`}
                />
                <CardActions disableSpacing>
                    <IconButton 
                        onClick={() => handleFavoriteClick()}
                        className={clsx(classes.button, {
                            [classes.buttonfavorite]: favorite,
                        })}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </div>
            <div className={classes.screen}>
            {expanded 
            ?
                <p className={classes.plot}>
                    {plot}
                </p>
            :
                <img 
                    className={classes.media}
                    src={posterUrl}
                    alt={title}
                />
            }
            </div>
        </Card>
    );
}

export default Movie;
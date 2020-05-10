import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#26282B',
        color: '#96999C',
        margin: 20,
        padding: '5px',
        borderRadius: '20px',
        background: 'linear-gradient(145deg, #292b2e, #222427)',
        boxShadow: '5px 5px 10px #202225, -5px -5px 10px #2c2e31',
        border: '1px solid rgba(0, 0, 0, 0.02)',
    },
    screen: {
        display: 'flex',
        width: '90px',
        height: '130px',
        marginTop: '8px',
        borderRadius: '10px',
        background: '#26282B',
        boxShadow: 'inset 5px 5px 10px #1e2022, inset -5px -5px 10px #2e3034',
        justifyContent: 'center',
        alignItems: 'center',
    },
    media: {
        borderRadius: '5px',
        width: '65px',
        height: '105px',
        fontSize: '0.5rem',
        opacity: '0.85',
        border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
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
    addToFavorite,
    }) => {
    
    const classes = useStyles();
    const [ expanded, setExpanded ] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={`${year} - ${genres.join(', ')}`}
            />
            <div className={classes.screen}>
                <img 
                    className={classes.media}
                    src={posterUrl}
                    alt={title}
                />
            </div>
            <CardActions disableSpacing>
            <IconButton onClick={() => addToFavorite(id, title)} >
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
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {plot}
                    <hr />
                    Director: {director}
                    <br />
                    Actors: {actors}
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Movie;
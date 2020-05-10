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


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 200,
        background: '#26282B',
        color: '#96999C',
        margin: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    addToFavorite 
    }) => {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={`${year} - ${genres.join(', ')}`}
            />
            <CardMedia
                className={classes.media}
                image={posterUrl}
                title={title}
            />
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
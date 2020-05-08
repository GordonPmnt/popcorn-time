# checkpoint-2-react-popcorn
> Popcorn Time

```
# clone
git clone <REPO-URL>

# change directory
cd <REPO-DIRECTORY>

# create your own branch
git checkout -b city_lastName_firstName
```

Try to commit after each exercise with an explicit message. Don't forget to push.

### React

#### Setup
- Create a new React app

#### Movies list
- Fetch movies at [`/movies.json`](https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json)
- Display the list of movies
  - Create a `Movie` component

#### Favorites list
- Place an 'Add to Favourites' button on each `Movie`
  - on click, movie should be added to the favourite list
- Display all the favourites on top of the movie list
- Add a 'Remove from Favourites' button on each favourite
  - on click, it should be removed from the favourite list

#### Picker
- Create a `Pick` button in the favourites list
  - on click, a random movie from the favourites shoud be displayed in a different page (you will use React Router for this)


#### Optional 
- Add a dropdown to filter movies by `genres`. Don't hardcode the `genres`, instead iterate over `genres` from your JSON file.

> Feel free to make it look awesome with your amazing css skills!

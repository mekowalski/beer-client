# App Ideas
- I'm thinking maybe I could make this app in a similar style from my previous apps of `Song App`, `Book App` or `Blog App`
- The layout could also be similar, given a list of beers on one side, with beer details on the other side
- I can request info/data from the Rails API(build actions, action creators, reducers and store)
- Not certain how to get the data and modify it if necessary, that may be for later
- Literally using and external API(rails part), requesting data from the react/redux side then displaying it
- I've done this probably 4-5 separate times!!!

- Beer Attributes:
- Name, Brand, Style, ABV
- Build a select button to show detail of that specific Beer on one side of the screen

- GOTTA MAKE API REQUEST
  - [x] constructor with props (not sure if i'll need constructor)
  - [x] give state, beers: [] (default)
  - [x] build lifecycle call (fetch request to localhost:3001, which would come from actions )
    - response return json and return list of beers, which is where i can setState

  - current issue is `App.js:11 Fetch API cannot load localhost:3001/api/beers. URL scheme must be "http" or "https" for CORS request.`
  - maybe i need `http` or `https` and can't just use localhost
  - YESSSS alright, forgot to call `json` with its `()` and was able to successfully get all the fake beer data


## COMPONENT IDEAS
- REACT SIDE
- Components
  1. Beers: Renders the list of Beers with name only
  2. BeerDetail: Render the Beer details of name, brand, style and abv
  3. App: will render both Beer and BeerDetail dependent on the selection of a beer
    - first there will be a list on the left side with just beer names
    - second there will be a select button next to each beer name
    - third a beer can be selected and this will then display BeerDetail on the right side


### Tree Structure
- not sure if i should have separate folders such as `components`, `reducers`, `actions`, etc
- maybe `store.js` should be inside a `reducers` folder??? don't know
- also so used to having `App.js` inside the `components` folder, this is all preference
- should i also have a sub-folder for the REST pages such as:
- `BeerCreate` form
- `BeerUpdate` form
- `BeerShow` page
- `BeerDelete` page


## Continue thoughts/notes
- Do i need to create a separate `apis/railsURL` folder/file to separate the url?
- Or would I instead create a `.env` file to hold the API_URL?
- Not certain on which one to do

- [x] Refactor `beers.map` to its own card/container/detail
  - Components/BeerDetail to display the details of the Beer
  - something along the lines of `<BeerDetail beer={beer} />`

- COMPONENTS and STATE
- Beers: should have some State, this will help with beer selection, anytime the button is clicked, update the Redux Store
<!-- - Beers: will have a connect() function -->
- Beers: create form functionality => <BeerForm />
  - [] create `BeerForm` and export/import into Beers
  - this will actually contain `connect()` with redux store

- BEGIN REDUX
- Have a Store that the App can access data from, this will have all the App's State in one central area
- Instead of having different state in different areas, which I currently have with `App.js`
- Store will have collection of Beers {...beers}
- Store will also have a State of BeerFromData {beer attributes: name, brand, style, abv}
- Store will have current Beer(selected, /api/beers/:id)


- App Setup/Structure Ideas
- Actions: would hold the action creators with functionality to make requests to external API
- Apis: this file would hold the baseURL of the Rails API(could i use axios?)
- Reducers: i would hold an `index.js` file that uses `combineReducers`. this would also hold other reducers for fetching beers or other context i need for the app
- Components: mainly used to hold components that aren't smart, they just display content
- Containers: these would hold components that need to actually use and manage State and Data


- currently i have a beer SHOW page(that isn't working yet) and a beer INDEX page (struggling with format)

- right now, the SHOW page isn't working, only the INDEX page is working
- is it because i don't have any buttons? i'm just typing in the direct url???

1. Remove the detail from the index page, only render the beer title
2. Make the beer title a link to /beers/id
3. Have the application respond to that request and fetch the beer json by id
4. Use that json to render the appropriate beer detail


- 072719
- [] need to update `Beers.js` to grab the info from reducers
- [x] also need to install `react-redux` library
  - redux is a simple library, react-redux will ACTUALLY connect React to Redux


- 072919
- `App.js` originally has information on the Beers, but that should no longer be its functionality
- Entire App is now wrapped in Provider, want to connect to actual State of Beer component
- [x] import `connect` in Beers
- Beers already has props that can be passed down, grab State and pass it to the props
  - eg: `this.props.beers`


080119
- State is now coming from Redux, currently with hard-coded fake data
- Ideally make async call to back in via `componentDidMount()`
- [] reducers folder

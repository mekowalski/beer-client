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


## Continue thoughts/notes
- Do i need to create a separate `apis/railsURL` folder/file to separate the url?
- Or would I instead create a `.env` file to hold the API_URL?
- Not certain on which one to do

- [x] Refactor `beers.map` to its own card/container/detail
  - Components/BeerDetail to deisplay the details of the Beer
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

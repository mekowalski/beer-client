# App Ideas
- I'm thinking maybe I could make this app in a similar style from my previous apps of `Song App`, `Book App` or `Blog App`
- The layout could also be similar, given a list of beers on one side, with beer details on the other side
- I can request info/data from the Rails API(build actions, action creators, reducers and store)
- Not certain how to get the data and modify it if necessary, that may be for later
- Literally using and external API(rails part), requesting data from the react/redux side then displaying it
- I've done this probably 4-5 separate times!!!

- GOTTA MAKE API REQUEST
  - [x] constructor with props (not sure if i'll need constructor)
  - [x] give state, beers: [] (default)
  - [x] build lifecycle call (fetch request to localhost:3001, which would come from actions )
    - response return json and return list of beers, which is where i can setState

  - current issue is `App.js:11 Fetch API cannot load localhost:3001/api/beers. URL scheme must be "http" or "https" for CORS request.`
  - maybe i need `http` or `https` and can't just use localhost
  - YESSSS alright, forgot to call `json` with its `()` and was able to successfully get all the fake beer data

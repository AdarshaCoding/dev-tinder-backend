# dev-tinder-backend

### Steps

Episode - 03

- Added npm configuration - npm init
  - metadata for the project
- Added src folder
  - app.js : entry point for the project
- Installed express.js : npm i express
- Create a express server
  - listen on 4000 port
  - Write a request/route handlers for /test, /hello
- Install nodmon and update the scripts inside package.json - npm install -g nodmon
- what are dependencies?
- What is the use of "-g" while npm install
- Difference b/w caret and tilde (^ vs ~)

Episode - 04

- Initialize git repository

  - add .gitignore file and add all the files which you don't want to push them to git repository
  - create a remote git repository
  - push all the code to remote repository
  - play with routes and its expensions /, /test, /test/123
  - order of routes matters a lot
  - Install the postman app and make a workspace/collection > test API calls
  - Write a logic to handle GET, POST, DELETE, PATCH API calls and test them on postman
  - Explore different routing and use of ?, +, (), \* in the routes
  - use of regex in routes, /a/, /.\*fly$/
  - reading the query params in the routes and reading the dynamic routes
  - Reading the dynamic routes

Episode - 05

- Multiple route handler
- next()
- next function and errors along with res.send()
- app.user("/route", rH1, [rH2, rH3], rH4)
- What is middleware? Why do we need it?
- How express js handles requests behind the scene?
- Difference b/w app.use vs app.all
- Create a dummy auth middleware for admin
- Create a dummy auth middleware for user routes except user/login
- Error handling using app.use(("/", err, req, res, next)=> {})

Episode - 06:

- Craete a cluster on mongodb official website, mongo Atlas
- Install mongoose npm library
- Connect your application to the database ("connection URL/database_name")
- Call the connectDB function and connect to database before starting the application on 4000 port!
- Create a userSchema & user Model
- Create POST /singup API to add data to database
- Push some documents using POST API calls from postman

- JS Object vs JSON (difference)
- Add the express.json middleware to your app and explore why it is used
- Make your signuo API dynamic to receive data from the end user (as of now from POSTMAN)

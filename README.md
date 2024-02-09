# nodejs-boilerplate

Clean Architecture for node.js projects

## Folder Structure

```
src
│   main.ts         # Application entry point
└───route           # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configurations
└───docs            # Contains the components required to generate swagger ui
└───loaders         # Split the startup process into modules (eg. db setup and swagger ui)
└───models          # Mongo models
└───services        # All the business logic is here
└───repository      # An abstraction layer to interact with the db, allows for the swapping of db providers
└───middlewares     # All middleware logic
└───exceptions      # All the custom exceptions is located here

tests               # All tests files located here
| 

```

## Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

### Install

- Install yarn with `npm install -g yarn`
- Install all dependencies with `yarn install`

### Docker compose
Using the docker compose file, we can spawn a local docker img of mongodb. Currently, the docker compose yml is designed to spin up a copy of both the app and mongodb. For testing purposes, we are only interested in setting up mongodb. The default config for mongodb can be found in the yml file.

This can be done by running the command `docker compose up -d`. 
The default port used for api is `8080`, and the default port for mongodb is `27017`.
This can be changed in the `docker-compose.yml` file.

Test the api by visiting `http://localhost:8080/api/docs/` in your browser.

To stop the container, run `docker compose down`


### Setting up env variables
Create a copy of the `.example.env` file and rename it to `.env`. All the required env variables should be set inside this .env file. JWT secret can be ignored if no auth strategy is implemented

### Running in dev mode

- Run `yarn dev`
- The server address is located at `http://localhost:3000/api`
- The swagger ui can be accessed from the browser at `http://localhost:3000/api/docs/`

### Building the project and run it

- Run `yarn build` to generated all JavaScript files from the TypeScript sources.
- the builded app located in `dist`.


### Testing
This repo makes use of the jest framework to perform testing. Run them using the command `yarn test`


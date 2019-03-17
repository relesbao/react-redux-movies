# React Redux Movies

![](https://media.giphy.com/media/4WFsmTX3VfvUGKf3FE/giphy.gif)

A movie search POC application is written in javascript with react and redux.

## Getting Started

Install the dependencies:

`npm run install`

Run the application:

`npm run dev`

## Deploy to surge.sh

`npm run deployToSurge`

## Features

The application uses [The Movie Database API](https://developers.themoviedb.org/3) version 3 implementing some of it's API's.

- Movie Search
- Top Rated Movies
- Trending Movies


## Roadmap

- Filter by genres
- Move the API to a backend
- Social login
- Rate movies
- Create collections

## Architecture

The application is organized in the `redux` and `ui` folders, keeping the state decoupled from the interface, exposing only the actions to the ui.

The application is using `redux` middlewares to transform user actions into internal actions, dispatching apiRequests, setting api busy state and normalizing the data.

The UI is comprised of `react` components, using `HashRouter` to manage routing and route states and mappers to glue the redux `store` and `actions` to the components. Some components have an internal state for the sake of simplicity.

The code is all commented out.


## Component Dependency
![](https://i.imgur.com/QIRB0Ew.png)

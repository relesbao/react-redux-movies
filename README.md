# React Redux Movies

![](https://media.giphy.com/media/4WFsmTX3VfvUGKf3FE/giphy.gif)

A movie search POC application written in javascript with react and redux.

## Getting Started

Install the dependencies:

`npm run install`

Run the application:

`npm run dev`

## Dependencies

- NodeJS
- React
- Redux

## Features

The application uses [The Movie Database API](https://developers.themoviedb.org/3) version 3 implementing some of it's API's.

- Movie Search
- Top Rated Movies
- Trending Movies

## Architecture

The application is organized in the `redux` and `ui` folders, keeping the state decoupled from the interface, exposing only the actions to the ui.

The application is using `redux` middlewares to transform user actions into application internal actions, dispatching apiRequests, setting api busy state and normalizing the store data.

The UI is organized into `react` components, using `HashRouter` to manage the navigation and mappers to glue the redux `store` and `actions` to the components.

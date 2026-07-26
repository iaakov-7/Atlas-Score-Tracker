# ATLAS-SCORE-TRACKER

## About the project

A server that stores results of retro games Space - Invaders, Tetris, Snake, on Atlas
and returns live scoreboards.
Written in Java Script.

## Folder structure

```
├── README.md
├── controllers
│   ├── game_controller.js
│   ├── leaderboard_controller.js
│   ├── player_controller.js
│   ├── score_controller.js
│   └── stats_controller.js
├── db.js
├── middlewares
│   ├── error_handler.js
│   └── valid_schema.js
├── .gitignore
├── .env_exemple
├── package-lock.json
├── package.json
├── repositories
│   ├── game_repository.js
│   ├── lraderboard_repository.js
│   ├── player_repository.js
│   ├── score_repository.js
│   └── stats_repository.js
├── routers
│   ├── game_routes.js
│   ├── leaderboard_routes.js
│   ├── player_routes.js
│   ├── scores_routes.js
│   └── stats_routes.js
└── server.js
```

## Endpoints

- POST `/scores` // Submitting a result
- GET `/leaderboard/:game` // Scoreboard for a specific game
- GET `/leaderboard/global` // Global Scoreboard
- GET `/player/:name` // Player profile
- GET `/stats` // General statistics
- GET `/games` // List of games

## Operating and running instructions

### Env file:

Prepare a file according to the .env_example

### What to install

- npm install

### How to run

- node app.js

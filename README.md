# mern-auth

Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client

Client Dependencies 
cd client && npm install 

Server Dependencies
cd backend && npm install 

// Run client & server with concurrently
npm start

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

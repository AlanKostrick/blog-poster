# Blog-Poster

## Install instructions

- clone this app and run `npm install` inside each of the directories (the front end and the api).

## To run this app...

- navigate to the api folder and run with `node app.js`
- navigate to the frontend folder and run with `npm start`

### Tech used

- API:
  - Node.js
  - MongoDB
  - Mongoose
- Frontend:
  - Parcel
  - Fetch API

### Purpose of this app

This app is designed to demonstrate basic `CRUD` operations. It builds out "Blog Post" objects that contain both a `title` and `content`. The API is set up on the server to handle

- `get` requests that return the collection or the singular item by id
- `post` requests that return the newly added blog post object
- `put` requests that can edit the blog post object
- `delete` requests that can remove the blog post based on its known id and return the remaining collection.

The front end builds out modular components and renders a `S`ingle `P`age `A`pplication. Forms have been created to handle the basic `CRUD` operations through `fetch` requests.

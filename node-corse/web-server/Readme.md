# Readme Web Server

- start with `npm init -y`
- add `npm i express`
- make src directory
- make an app.js file inside src
- add express to the app.js ... See the app.js for details
- start the server with `node src/app.js`
- you can use `nodemon src/app.js` instead

## Serving the fix file from public dir

- use path from node.js
- you can man with `__dirname`
- use `app.use()` with path to the public dir

## Using

- using handlebars from node.js... specifically, he uses hbs from https://www.npmjs.com/package/hbs
- to set it up, after install, add `app.set('view engine', 'hbs')`
- create a view directory within the main public directory
- replace the index.html inside your public directory with an index.hbs. Make sure all the content is the same between html and hbs. remove the index.html file
- add a route with `app.get()` as seen within our server app.js file to allow user access to the hbs file. Note: this is useing a `res.render('index')` function to show the hbs view

## Changing Views

- change view directory to 'templates'
- add `const viewsPath = path.join(__dirname, '../templates')` within the app.js file
- add `app.set('views', viewsPath)` within the app.js file to fix the broken path links

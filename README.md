# MyReads Project

This is the project for Udacity's React Fundamentals course.
Shows how create components using React Component classes and JSX notation, do simple routing and handle components state.

## TL;DR

To get started deploying the project right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What's in the project

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use in the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # Application icon.
│   └── index.html # Single page app HTML.
└── src
│   ├── components # React components.
│   │   ├── Book.js # A book with it's cover and options.
│   │   ├── BookCover.js # The book's cover.
│   │   ├── FloatButton.js # Floating button.
│   │   ├── Library.js # Global library for searched books.
│   │   ├── Navbar.js # Application navbar.
│   │   ├── Searchbar.js # Searchbar for books.
│   │   ├── Shelf.js # Contains specific books.
│   │   └── ShelfBookMenu.js # Menu for move/add books to shelves.
│   ├── containers
│   │   └── App.js # App container. Fetches data and defines the routing.
│   ├── resources # Images, icons and fonts.
│   ├── styles # Stylesheets.
│   ├── utils # JS utilities.
│   │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
│   │   └── Interval.js # Chronometer for executes code between time intervals.
│   └── index.js # It is used for DOM rendering only.
└──.eslintrc.json # Eslint configuration for JS/React/Redux.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

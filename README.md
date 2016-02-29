# Introduction

This is a simple Web app practice in using React.

It fetches links from a Wikipedia page, and user could save links as bookmark into local storage.

Besides this, it also has these features

* Use Date-picker to pick another page to provide different links.
* Select text (140 chars) and save it along with bookmark.
* Export bookmarks as JSON file for back-up.

# Screenshot

![screenshot1](./etc/imgs/selected.png)

Selected text to save it as note.

# Development

## Setup

To build and run this project. Built files will be in directory **_build**

```bash
$ npm i
$ npm start

# there are cached JSON file as fake data for development.
# If you want to use it to reduce Wikipedia Server API usage
$ npm run start:fake
```

To run unit-test

```bash
$ npm run test
$ npm run test:watch  # monitor file changes
```

To deploy github-page

```bash
$ npm run deploy
```
## View Components

* **Links.jsx** - It is also the index page. Displays random links in rows(**Rows.jsx**) by specific date.
* **Bookmarks.jsx** - Displays user saved bookmarks(**BookmarkRow.jsx**) and a button(**BtnExport.jsx**) to exports data.
* **Detail.jsx** - When user chose a Wikipedia-page-title, this page displays corresponding content, categories and images.

## Data Structure

Redux Store structure

```
├── title
├── links
├── bookmarks
├── content
│   ├── categories
│   ├── images
│   └── innerHTML
└── detail
```

* title - *String* of wikipedia page title. Currently it should be date string, such as 'May\_5', 'November\_1'.
* links - *Array of String* of wikipedia pages title. Links-page use it to render rows.
* bookmarks - *Object* for Bookmarks which saved to local storage. Its key is the title of page, and its value is an array of string for saved **notes**. Bookmarks-page use it to render rows.
* content - *Object* for Detail-page rendering.
* detail - *String* of wikipedia page title. To tell Detail-page which one to be processed.

# Todo

* i18n
* More test for Redux-flow and Components
* More ES6 syntax and more functional programming style.
* UI hint for AJAX delay, or animation effect.
* Involve browserHistory for routing

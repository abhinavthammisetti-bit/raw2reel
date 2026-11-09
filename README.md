# raw2reel

A responsive landing page concept for a short-form video editing service. Customers can review editing plans, submit an order demo, and view a sample order-tracking timeline.

## Features

- Responsive landing page
- Service overview and pricing plans
- Order form with Google Drive and reference-reel links
- Demo order ID and estimated delivery display
- Sample order-tracking timeline
- Browser local storage to retain the demo order

## Project structure

```text
raw2reel/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── app.js
├── README.md
└── .gitignore
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in your browser.

You can also use the VS Code Live Server extension to preview the page locally.

## Important note

This is currently a front-end demonstration. Orders and tracking updates are stored in the visitor's browser using `localStorage`. The form does not yet send orders to a server, process payments, or provide real-time updates to an editor. A backend and admin workflow would be needed for those production features.

## Built with

- HTML
- CSS
- Vanilla JavaScript

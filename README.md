# University Search and Favorites

## Overview

University Search and Favorites is a web application that allows users to search for universities in India and save their favorite ones. It provides a seamless experience for users to explore different universities and manage their favorites.

## Features

- **University Search**: Users can search for universities by name.
- **Detailed Information**: View detailed information about each university, including name, state/province, and web pages.
- **Add to Favorites**: Users can add universities to their favorites list.
- **Favorites Management**: Users can view their favorite universities and manage them.

## Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MySQL
- **API**: [University Domains List API](https://github.com/Hipo/university-domains-list-api)

## Routes

- **GET /universities: Retrieve a list of universities.
- **POST /universities/favorites: Save a favorite university to the database.
- **GET /universities/favorites: Retrieve a list of favorite universities from the database.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd university-search-and-favorites`
3. Install dependencies: `npm install`
4. Start the backend server: `npm run server`
5. Start the frontend development server: `npm start`

## Usage

1. Open the application in your browser.
2. Use the search bar to search for universities by name.
3. Click on the "Add to Favorites" button to save a university to your favorites list.
4. Navigate to the Favorites page to view and manage your favorite universities.

## Acknowledgements

- University Domains List API: [GitHub Repository](https://github.com/Hipo/university-domains-list-api)

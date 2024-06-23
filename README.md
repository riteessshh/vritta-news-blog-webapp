## Vritta News Blog App - React & MERN Stack (Frontend)

This is a React application for a news blog, built using the MERN stack (MongoDB, Express, React, Node.js) and utilizes the News API to fetch and display news articles.

## This is Frontend Part whereas the Backend is on other repository (https://github.com/riteessshh/vritta-news-blog-server)

### Features

- Displays a list of latest news articles with title, description, source, and published date.
- Ability to click on an article to be redirected to the source website.
- Functionality to filter news articles by category (requires additional implementation).
- (coming soon) Functionality to search for news articles by keyword (requires additional implementation).

### Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB (if user authentication or storing preferences is needed)
- API: News API ([https://newsapi.org/](https://newsapi.org/))

### Getting Started

**Prerequisites:**

- Node.js and npm (or yarn) installed on your system.
- A MongoDB instance running locally (if using MongoDB for user management or storing preferences).
- A News API key ([https://newsapi.org/](https://newsapi.org/))

**Steps:**

1. Clone this repository:

   ```bash
   git clone https://github.com/riteessshh/vritta-news-blog-webapp.git
   ```

2. Install dependencies:

   ```bash
   cd news-blog-app
   npm install
   ```

   (or)

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   (or)

   ```bash
   yarn run dev
   ```

   This will start the server on port `5173` by default. Open http://localhost:5173 in your browser to view the application.

### Running in Production

To deploy the application to a production environment, additional configuration might be required depending on your chosen hosting provider. Refer to the documentation for your specific hosting platform for deployment instructions.

**Note:** Remember to remove or exclude the `.env` file with your API key from your production build.

### Additional Notes

- This is a basic setup for a news blog app. You can extend it further by adding functionalities like user authentication, commenting on articles, saving favorite articles, etc.
- Refer to the official documentation for React, Express, MongoDB, and the News API for further details and advanced usage.

### Contributing

Feel free to contribute to this project by creating pull requests. Make sure to follow the existing code style and formatting conventions.

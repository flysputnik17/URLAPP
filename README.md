# URL Searcher

## Project Overview

**URL Searcher** is a full-stack web application designed to fetch and display metadata (such as title, description, and image) from a list of URLs provided by the user. The application consists of a frontend built with React and a backend powered by Node.js and Express. The backend connects to an external API to retrieve the metadata and then serves it to the frontend for display.

## Key Features

- **User Input**: Users can enter multiple URLs in a form on the frontend.
- **Metadata Retrieval**: The backend processes the URLs, fetches metadata from each, and returns the information to the frontend.
- **Error Handling**: The application includes robust error handling for invalid URLs, API errors, and other potential issues.
- **Rate Limiting**: The backend implements rate limiting to prevent excessive requests to the external API, ensuring compliance with API usage policies.
- **Responsive Design**: The frontend is designed to be responsive, ensuring a seamless experience across various devices.

## Technology Stack

- **Frontend**:

  - React
  - CSS for styling
  - Vite as the build tool

- **Backend**:

  - Node.js with Express
  - MongoDB for database management (if applicable)
  - Winston and express-winston for logging
  - Rate limiting using `express-rate-limit`
  - Joi and Celebrate for input validation

- **Deployment**:
  - Frontend: Deployed on Vercel
  - Backend: Can be deployed on platforms like Heroku, AWS, or as serverless functions on Vercel.

## Project Structure

- **Frontend**:

  - Components for form input, displaying results, and footer.
  - Utilities for API calls.
  - CSS modules for styling.

- **Backend**:
  - API routes for handling URL metadata requests.
  - Middleware for logging, rate limiting, and validation.
  - Configuration for environment variables.

## How to Run Locally

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/url-searcher.git
    cd url-searcher
    ```

2.  **Install dependencies:**:

    ```bash
    npm install
    ```

3.  **Set up environment variables:**:

    ```bash
    NODE_ENV=production
     DB_CONNECTION_STRING=your_mongodb_connection_string
     PORT=3001
     APIkey=your_api_key
    ```

4.  **Run the backend server:**

    ```bash
    npm run dev
    ```

5.  **Run the frontend development server**:  
    -Navigate to the frontend directory and start the Vite server:
    ```bash
    cd frontend
       npm run dev
    ```

## Access the Application

- Open your browser and navigate to `http://localhost:3000`.

## Deployment

- **Frontend**: Deployed on Vercel. You can visit the live site [here](https://urlapp-eosin.vercel.app/).

- **Backend**: To run the backend locally, follow these steps:

  1. **Clone the repository**:

     ```bash
     git clone https://github.com/yourusername/url-searcher.git
     cd url-searcher
     ```

  2. **Install dependencies**:

     ```bash
     npm install
     ```

  3. **Set up environment variables**:

     - Create a `.env` file in the root directory with the following variables:
       ```bash
       NODE_ENV=production
       DB_CONNECTION_STRING=your_mongodb_connection_string
       PORT=3001
       APIkey=your_api_key
       ```

  4. **Run the backend server**:

     ```bash
     npm run dev
     ```

  5. **Access the application**:

     - The backend server should now be running on `http://localhost:3001`.

  6. **Test the API**:
     - You can test the API endpoints using tools like Postman or cURL by sending requests to `http://localhost:3001`.

Ensure that your MongoDB server is running and accessible via the `DB_CONNECTION_STRING` provided in your `.env` file. Additionally, make sure the API key (`APIkey`) is valid and has the necessary permissions for the third-party service.

# JWT Authentication Example

This is a simple Node.js application demonstrating how to use JSON Web Tokens (JWT) for authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/jwt-auth-example.git
Navigate to the project directory:


cd jwt-auth-example
Install the dependencies:


npm install
Usage
Start the server:


node app.js
The application will be running on http://localhost:3000.

API Endpoints
POST /login
Description: Logs in a user and returns a JWT token.

Request: No request body required (mock user data is used).

Response: JSON containing the JWT token.


{
  "token": "<your-jwt-token>"
}
POST /profile
Description: Accesses the protected profile route.

Headers: Requires an Authorization header with a valid JWT token.


Authorization: Bearer <your-jwt-token>
Response: If the token is valid, returns the authenticated user data; otherwise, returns an error.


{
  "message": "profile accessed",
  "authData": {
    "user": {
      "id": 1,
      "username": "abcd",
      "email": "abc@gmail.com"
    },
    "iat": 1624389771,
    "exp": 1624390071
  }
}
Project Structure

jwt-auth-example/
│
├── app.js          # Main application file
├── package.json    # Project dependencies and metadata
└── README.md       # Project documentation
License
This project is licensed under the MIT License. See the LICENSE file for details.

This `README.md` file includes all the necessary information for setting up and using your project, as well as a basic overview of the API endpoints and project structure.

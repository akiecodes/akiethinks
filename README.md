# AkieThinks

Akie Thinks is a Reddit-inspired blog application that allows users to register, log in, create, edit, and view posts. Built using MongoDB, Node.js, React, Express, and JWT tokens, this application provides a simple yet robust platform for users to share their thoughts and interact with others.

Features
User Registration & Authentication: Users can sign up, log in, and manage their sessions using JWT tokens.
Create & Edit Posts: Authenticated users can create and edit their posts.
View Posts: Users can view posts made by themselves and others.
Tech Stack
Frontend: React
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT Tokens
Installation
Prerequisites
Node.js (>= 14.x)
MongoDB
npm (Node Package Manager)
Setup
Clone the Repository

bash
Copy code
git clone https://github.com/akiecodes/akiethinks.git
cd akiethinks
Backend Setup

Navigate to the backend directory:

bash
Copy code
cd backend
Install the necessary packages:

bash
Copy code
npm install
Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
Start the backend server:

bash
Copy code
npm start
Frontend Setup

Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the necessary packages:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
Open the Application

The backend server should be running at http://localhost:5000.
The frontend application should be accessible at http://localhost:3000.
API Endpoints
User Authentication
Register: POST /api/auth/register
Login: POST /api/auth/login
Posts
Create Post: POST /api/posts
Edit Post: PUT /api/posts/:id
Get All Posts: GET /api/posts
Get Post by ID: GET /api/posts/:id
Usage
Register a New User

Use the registration form on the frontend to sign up.
Log In

Log in to the application to receive a JWT token for authentication.
Create/Edit Posts

Use the provided forms to create new posts or edit existing ones.
View Posts

Navigate to the posts section to view all posts and details of individual posts.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Inspiration from Reddit
Technologies: MongoDB, Node.js, React, Express, JWT


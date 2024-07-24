# AkieThinks

Akie Thinks is a Reddit-inspired blog application that allows users to register, log in, create, edit, and view posts. Built using MongoDB, Node.js, React, Express, and JWT tokens, this application provides a simple yet robust platform for users to share their thoughts and interact with others.

## Features
### User Registration & Authentication: 
Users can sign up, log in, and manage their sessions using JWT tokens.
Create & Edit Posts: Authenticated users can create and edit their posts.
View Posts: Users can view posts made by themselves and others.

## Tech Stack
### Frontend: React
### Backend: Node.js, Express
### Database: MongoDB
### Authentication: JWT Tokens

## API Endpoints
### User Authentication
### Register: POST /api/auth/register
### Login: POST /api/auth/login
### Posts
Create Post: POST /api/posts
Edit Post: PUT /api/posts/:id
Get All Posts: GET /api/posts
Get Post by ID: GET /api/posts/:id

## Usage
1. Register a New User
   Use the registration form on the frontend to sign up.
2. Log In
   Log in to the application to receive a JWT token for authentication.
3. Create/Edit Posts
4. Use the provided forms to create new posts or edit existing ones.
5. View Posts on home page

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Acknowledgments
Inspiration from Reddit
Technologies: MongoDB, Node.js, React, Express, JWT


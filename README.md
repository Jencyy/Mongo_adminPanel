# 🛠️ Admin Panel - LogIn/SignUp System

## 📖 Project Overview

This project is an admin panel that allows users to register, sign in, and manage their profiles. Once a user logs in, they will be directed to a personalized dashboard displaying a welcome message with their name. The admin panel also includes a profile page where users can view their details.

## ✨ Features

- 🔒 **User Registration**: Secure user registration with encrypted passwords.
- 🔑 **User Login**: Users can log in with their credentials, and session management is handled via cookies.
- 🏠 **Dashboard**: A personalized dashboard that greets users by their name after login.
- 👤 **Profile Page**: Users can view their details on their profile page.
- 🍪 **Session Management**: Session management is implemented using cookies.
- 🔐 **Secure Password Handling**: Passwords are encrypted using `bcrypt.js`.

## 💻 Technologies Used

- **Node.js**: Backend server
- **Express.js**: Web framework
- **EJS**: Templating engine
- **MongoDB/Mongoose**: Database for storing user data
- **Cookie-Parser**: To handle cookies for session management
- **Body-Parser**: To parse incoming request bodies
- **Bcrypt.js**: For password encryption

## 🛠️ Project Flow

1. **Registration Page**: Users can register by providing their email, password, and other profile details.
2. **Login Page**: Users will log in using their credentials. Cookies will be set to manage the session.
3. **Dashboard Page**: Users are redirected to a dashboard with a welcome message that includes their username once logged in.
4. **Profile Page**: Users can view their personal information on a profile page.

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jencyy/Mongo_adminPanel.git
2. Install dependencies:

```bash
npm install
```
3. Set up the environment variables:

**Create a .env file and add the following**:

```bash
PORT=3600
```
4. Start the server:
```
npm start
```
Open your browser and go to http://localhost:3600.

## 📸 Screenshot

![Screenshot 2024-09-20 190142](https://github.com/user-attachments/assets/7473e57d-b9ad-476d-a457-c856e0c9e59e)

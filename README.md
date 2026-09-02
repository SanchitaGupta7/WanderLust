# 🌍 WanderLust

**WanderLust** is a full-stack web application inspired by modern vacation-rental platforms. It allows users to explore property listings, create and manage their own listings, upload images, leave reviews and discover locations through an interactive map.

The project was built to practice building a complete web application with authentication, authorization, database management, image uploads, server-side rendering, and third-party services.

## ✨ Features

### 🏡 Listings

* Browse available property listings
* View detailed information about individual listings
* Create new property listings
* Edit existing listings
* Delete listings
* Upload listing images
* Store listing information in MongoDB

### 🔐 Authentication & Authorization

* User registration and login
* Session-based authentication
* Protected routes for authenticated users
* Users can manage only their own listings
* Authorization checks for listing owners
* Review author authorization

### ⭐ Reviews

* Add reviews to listings
* Give ratings from 1–5
* View reviews on listing pages
* Delete reviews
* Validate review data before submission

### 🗺️ Location & Maps

* Store listing location and country information
* Geocode locations using Mapbox
* Display listing locations using an interactive map

### ☁️ Image Uploads

* Upload images for property listings
* Process uploads using Multer
* Store images using Cloudinary

### 🛡️ Validation & Error Handling

* Server-side input validation using Joi
* Custom error handling
* Authentication middleware
* Authorization middleware
* Flash messages for user feedback

## 🛠️ Tech Stack

### Frontend

* **HTML**
* **CSS**
* **JavaScript**
* **EJS**
* **EJS-Mate**
* **Bootstrap**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**

### Authentication

* **Passport.js**
* **Passport Local**
* **Express Session**

### APIs & Services

* **Cloudinary** — Image storage and management
* **Mapbox** — Location/geocoding and maps

### Validation & Utilities

* **Joi** — Request/data validation
* **Multer** — File uploads
* **Method Override** — Supporting PUT/DELETE requests
* **Connect Flash** — User feedback messages
* **dotenv** — Environment variable management

## 🏗️ Application Architecture

WanderLust follows a server-side MVC-style structure:

```text
                    ┌──────────────┐
                    │    Client    │
                    │   Browser    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Express    │
                    │    Routes    │
                    └──────┬───────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        Controllers    Middleware      Models
             │             │             │
             │             │             ▼
             │             │         MongoDB
             │             │
             │       Authentication
             │       Authorization
             │       Validation
             │
             ▼
          EJS Views
             │
             ▼
           Browser
```

## 🔄 Core Functionality

### Listing Management

The application supports the complete lifecycle of property listings:

```text
Create → View → Edit → Delete
```

Listing data is stored using MongoDB and Mongoose, while Joi is used to validate listing input.

### Authentication Flow

```text
Register / Login
       ↓
Passport Authentication
       ↓
Session Created
       ↓
Protected Routes
       ↓
Authorized Actions
```

The application uses Passport Local authentication together with Express sessions and MongoDB-backed sessions.

## 🗂️ Project Structure

```text
WanderLust/
│
├── controllers/
│
├── init/
│
├── models/
│
├── public/
│
├── routes/
│
├── uploads/
│
├── utils/
│
├── views/
│
├── cloudConfig.js
├── index.js
├── middleware.js
├── schema.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* MongoDB
* npm

You will also need accounts/API credentials for the external services used by the application.

### 1. Clone the repository

```bash
git clone https://github.com/SanchitaGupta7/WanderLust.git
cd WanderLust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file and add the required credentials for:

```text
MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret
```

> Never commit your `.env` file or expose API keys and secrets publicly.

### 4. Start the application

```bash
node index.js
```

For development, you can use your preferred Node.js development workflow.

## 🌐 Live Demo

**[View WanderLust Live](https://wanderlust-h2x9.onrender.com/listings)**

> The application is deployed on Render. Because it uses a free-tier deployment, the first request may take a little longer while the server starts.

## 📸 Preview

<img width="959" height="497" alt="image" src="https://github.com/user-attachments/assets/f8c2f5da-6758-4aa6-b1d4-bc9cbf98ed2c" />

## 📚 What I Learned

* Designing a server-side MVC architecture
* Building RESTful routes with Express
* Working with MongoDB and Mongoose
* Implementing authentication using Passport.js
* Managing sessions and protected routes
* Implementing authorization and ownership checks
* Handling image uploads with Multer and Cloudinary
* Integrating Mapbox for location-based functionality
* Validating user input with Joi
* Creating reusable EJS layouts and views
* Handling errors and displaying user feedback
* Connecting multiple third-party services in one application

## 💡 Key Takeaways

One of the most useful parts of this project was learning how different parts of a full-stack application fit together.

A request doesn't simply go from a button to a database. It passes through routing, authentication, authorization, validation, controllers, models and finally the database or external service before the response is rendered back to the user.

That helped me understand the structure and responsibilities of a real web application much better.

## 👩‍💻 Author

**Sanchita Gupta**

---

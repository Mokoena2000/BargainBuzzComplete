# Ecommerce Site

## Overview
This is a fully functional eCommerce site built using HTML, CSS, JavaScript, and Node.js. The project is structured into a backend and a frontend, allowing users to browse products and manage their wishlist.

## Project Structure
```
ecommerce-site
├── backend
│   ├── server.js
│   ├── controllers
│   │   └── wishlistController.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── wishlistRoutes.js
│   └── config
│       └── db.js
├── frontend
│   ├── public
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── app.js
│   ├── src
│   │   ├── components
│   │   │   └── Wishlist.js
│   │   └── App.js
│   └── package.json
├── package.json
├── README.md
└── .env
```

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express
- **Database:** MongoDB (or any other database of your choice)

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB (or your preferred database) set up

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your database connection string and any other necessary environment variables.
4. Start the backend server:
   ```
   node server.js
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Usage
- Users can browse products and add them to their wishlist.
- The wishlist can be managed through the application, allowing users to add or remove items.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License.
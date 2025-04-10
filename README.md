# HireWorkLead

A full-stack job board application that allows users to register, log in, and manage their own job posts.

Built using **Next.js**, **Tailwind CSS**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- 🔐 JWT-based user authentication  
- 🧑‍💻 User registration & login  
- 📄 Post, view, and delete job listings  
- 🛡 Protected routes and token-based access  
- 🎨 Responsive UI styled with Tailwind CSS  
- 📦 Clean folder structure (MVC backend + App Router frontend)

---

## 🛠 Tech Stack

**Frontend**  
- Next.js 15 (App Router)  
- React / TypeScript  
- Tailwind CSS

**Backend**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT authentication

---

## 📷 Screenshots 

![Dashboard](Dashboard-MVP-Interface.png)  
*Dashboard interface showing posted jobs*

![Login](Login-MVP-Page.png)  
*Login form with Tailwind styling*

![Register](Register-Form-MVP.png)  
*Registration form for new users*

---

## 🧪 Run Locally

### Clone the project:

```bash
git clone https://github.com/ChrisMerinoDev/hireworklead-fullstack.git
cd hireworklead-fullstack
```

## Install Dependencies:

Navigate to each folder and install packages:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

## Set up environment variables:

In the server folder, create a .env file:
<!-- Inside the file write this: -->
```bash
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
PORT="5001"
```

## Run the App:

```bash
# Backend (from /server)
npm run dev

# Frontend (from /client)
npm run dev
```

## Visit:

🌐 http://localhost:3000 — Frontend UI

🔌 http://localhost:5001 — API server



## Project Status

- MVP complete - full auth + CRUD functionality
- Ready for job applications and portfolio use

Coming Soon:

1. Edit job listings
2. Live deployment
3. Search/filter job posts
# 🔎 Image & Video Search Tool

A modern **Image and Video Search Web Application** built with **React.js** that allows users to search and explore high-quality photos and videos from the web.

The application integrates two different APIs:

* **Unsplash API** → for searching high-quality photos
* **Pexels API** → for searching high-quality videos

Users can search for any keyword and browse relevant images and videos through a clean and responsive interface. The application also provides a **collection feature**, allowing users to save their favorite content for later.

---
## ✨ DEMO
https://vercel.com/keshav-singh-kushwahas-projects/mediasearch-tool/HCMBh5cb8qQtvXuqZeRzYv7Zb5TW
## ✨ Features

### 🖼️ Image Search

* Search millions of high-quality photos using the **Unsplash API**
* Display search results dynamically
* View image previews
* Browse different image results
* Save images to a personal collection

### 🎥 Video Search

* Search videos using the **Pexels API**
* Display video results dynamically
* Browse video content based on search keywords
* Save videos to a personal collection

### 📚 Collection

* Add images and videos to a personal collection
* View all saved content in one place
* Manage saved items
* Collection state is managed globally using Redux

### 🎨 User Interface

* Responsive design
* Clean and modern interface
* Tailwind CSS based styling
* Reusable React components
* Dynamic rendering of search results
* Smooth user interaction

---

## 🛠️ Tech Stack

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| React.js          | Frontend development        |
| JavaScript (ES6+) | Application logic           |
| Redux             | Global state management     |
| React Redux       | Connecting Redux with React |
| Tailwind CSS      | UI styling                  |
| Unsplash API      | Image search                |
| Pexels API        | Video search                |
| Vite              | Development and build tool  |
| Git & GitHub      | Version control             |

---

## 🔌 APIs Used

### Unsplash API

The **Unsplash API** is used to search and retrieve high-quality photos.

```text
Search → Unsplash API → Photo Results → React UI
```

### Pexels API

The **Pexels API** is used to search and retrieve video content.

```text
Search → Pexels API → Video Results → React UI
```

Using separate APIs allows the application to provide both image and video search functionality in a single platform.

---

## 🏗️ Application Architecture

The application follows a component-based React architecture.

```text
                    Image & Video Search App
                              │
                ┌─────────────┴─────────────┐
                │                           │
           Image Search                Video Search
                │                           │
         Unsplash API                  Pexels API
                │                           │
                └─────────────┬─────────────┘
                              │
                        React Components
                              │
                         User Interface
                              │
                           Redux
                              │
                         Collection
```

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── CollectionCard.jsx
│   ├── ResultCard.jsx
│   └── ...
│
├── pages/
│   ├── CollectionPage.jsx
│   └── ...
│
├── redux/
│   ├── store.js
│   └── ...
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔄 How the Application Works

### 1. User enters a search query

For example:

```text
nature
```

### 2. Application sends the request

For images:

```text
User Query
     ↓
Unsplash API
     ↓
Image Results
```

For videos:

```text
User Query
     ↓
Pexels API
     ↓
Video Results
```

### 3. Results are displayed

The API response is processed and rendered using reusable React components.

### 4. User saves content

When the user adds an image or video to the collection:

```text
User clicks Add
       ↓
Redux Action
       ↓
Redux Store
       ↓
Collection Updated
       ↓
Collection Page
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate to the project:

```bash
cd YOUR-REPOSITORY
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory.

Example:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_PEXELS_API_KEY=your_pexels_api_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🔐 Environment Variables

API keys should be stored in environment variables instead of being directly written into the source code.

```env
VITE_UNSPLASH_ACCESS_KEY=your_key
VITE_PEXELS_API_KEY=your_key
```

**Never commit your `.env` file or expose your API keys publicly.**

Make sure `.env` is included in `.gitignore`:

```text
.env
node_modules/
dist/
```

---

## 📚 Key Concepts Practiced

This project helped me gain practical experience with:

* React.js
* Functional components
* React Hooks
* `useState`
* `useEffect`
* `useSelector`
* `useDispatch`
* Redux state management
* API integration
* Asynchronous JavaScript
* Fetching data from REST APIs
* Dynamic rendering
* Props and component communication
* Array methods such as `map()`
* Conditional rendering
* Error handling
* Responsive UI development
* Tailwind CSS
* Git and GitHub

---

## 🚀 Future Improvements

Some features that can be added in future versions:

* 🔐 User authentication
* ☁️ Cloud-based collections
* ❤️ Like/favorite functionality
* 🔍 Advanced search filters
* 📄 Pagination or infinite scrolling
* 🌙 Dark mode
* 📱 Improved mobile experience
* ⬇️ Download functionality
* 🗂️ Categorized collections
* 💾 Persistent storage
* 🚀 Deployment with a production backend

---

## 🎯 Project Purpose

The main goal of this project was to build a practical React application that combines **multiple third-party APIs** into a single user experience.

It demonstrates how different external APIs can be integrated into a frontend application while managing application state and user interactions using **React and Redux**.

---

## 👨‍💻 Author

**Keshav**

B.Tech Computer Science Engineering Student

Interested in:

* Frontend Development
* React.js
* MERN Stack
* Full-Stack Development
* Web APIs

---

## 📄 License

This project is created for educational and portfolio purposes.

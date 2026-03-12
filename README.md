# Image Search Gallery with Lightbox

A modern **React image search application** that allows users to search for images, browse results in a responsive grid, and preview images in a full-screen **lightbox modal**. The project demonstrates core React patterns such as **state lifting, event propagation control, custom hooks, and reusable UI components**.

---

## 🚀 Features

* 🔍 **Image Search** – Search images dynamically using an API
* 🖼 **Responsive Image Grid** – Automatically adapts to different screen sizes
* 🔎 **Lightbox Image Viewer** – Click any image to open it in a full-screen modal
* 🧠 **Custom Hook for Data Fetching** – Encapsulated API logic using `useImageSearch`
* ⚡ **Infinite Scroll** – Automatically loads more images when scrolling near the bottom
* 🎨 **Tailwind CSS Styling** – Modern responsive UI
* 🧩 **Reusable Components** – Modular and maintainable component structure

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── ImageGrid.jsx
│   ├── ImageCard.jsx
│   └── Lightbox.jsx
│
├── hooks
│   └── useImageSearch.js
│
├── pages
│   └── Home.jsx
│
├── services
│   └── imageApi.js
│
└── App.jsx
```

---

## 🧠 Architecture Overview

The application follows **React's unidirectional data flow**.

```
User Interaction
        ↓
Component Event
        ↓
State Update (Parent Component)
        ↓
UI Re-renders
```

Example for the Lightbox feature:

```
User clicks image
        ↓
ImageCard triggers onClick
        ↓
ImageGrid sends image object to Home
        ↓
Home updates selectedImage state
        ↓
Lightbox component renders
```

---

## 🖼 Lightbox Modal Behavior

The Lightbox implements the standard modal interaction pattern:

| User Action         | Result         |
| ------------------- | -------------- |
| Click outside image | Close lightbox |
| Click on image      | Do nothing     |
| Click close button  | Close lightbox |

To achieve this behavior we use **event propagation control**:

```javascript
<div onClick={closeModal}>
  <div onClick={(e) => e.stopPropagation()}>
    Modal Content
  </div>
</div>
```

This prevents clicks inside the modal from bubbling to the overlay.

---

## ⚙️ Core Concepts Demonstrated

### 1. State Lifting

The selected image state is managed in the **Home component** and passed down to children.

```javascript
const [selectedImage, setSelectedImage] = useState(null);
```

---

### 2. Event Bubbling Control

Inside the Lightbox we stop event propagation to prevent accidental closing.

```javascript
onClick={(e) => e.stopPropagation()}
```

---

### 3. Custom Hook for Data Fetching

The `useImageSearch` hook encapsulates:

* API requests
* pagination logic
* infinite scroll handling

This keeps UI components **clean and focused on rendering**.

---

### 4. Infinite Scroll Logic

The application detects when the user scrolls near the bottom of the page.

```javascript
window.innerHeight + window.scrollY >=
document.documentElement.scrollHeight - 200
```

When this condition is true, the next page of images is fetched.

---

## 🛠 Tech Stack

* **React**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **REST API (Image Service)**
* **Custom React Hooks**

---

## 💡 Key React Patterns Used

| Pattern                   | Purpose                             |
| ------------------------- | ----------------------------------- |
| Component Composition     | Build reusable UI pieces            |
| State Lifting             | Share state across components       |
| Custom Hooks              | Separate business logic from UI     |
| Event Propagation Control | Prevent unwanted modal behavior     |
| Infinite Scroll           | Efficient loading of large datasets |

---

## 📸 UI Components

### ImageCard

Displays a single image with hover overlay.

### ImageGrid

Renders all images in a responsive layout.

### SearchBar

Handles search input and triggers API queries.

### Lightbox

Displays a full-screen preview of the selected image.

---

## 🔮 Possible Enhancements

Future improvements could include:

* ⌨️ **ESC key support to close modal**
* 🔒 **Scroll lock when lightbox is open**
* ⬅️➡️ **Keyboard navigation between images**
* 🎬 **Smooth zoom animation when opening images**
* ❤️ **Favorite or bookmark images**
* 📊 **Image metadata display (author, likes, etc.)**

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/image-search-gallery.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🎯 Learning Objectives

This project helps reinforce important frontend engineering concepts:

* Component-based architecture
* Event propagation and bubbling
* React state management
* Building reusable UI components
* Handling asynchronous API requests
* Designing responsive interfaces

---

## 👨‍💻 Author

**Ankit Yadav**

Frontend developer focusing on:

* React
* JavaScript architecture
* UI engineering
* scalable frontend systems

---

## 📜 License

This project is open source and available under the **MIT License**.

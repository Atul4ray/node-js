# 📚 Books CRUD REST API

A simple **Proof of Concept (POC)** RESTful API built using **Node.js** and **Express.js** to manage books. This project demonstrates basic **CRUD (Create, Read, Update, Delete)** operations using an **in-memory database**.

---

## 🚀 Features

* Get all books
* Get book by ID
* Create a new book
* Update existing book
* Delete a book
* Proper HTTP status codes & error handling
* Clean and extensible structure

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **JavaScript (ES6)**
* **REST API / JSON**

---

## 📂 Project Structure

```
project-root/
│── index.js        # Main server file
│── package.json    # Project metadata & dependencies
│── README.md       # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd project-root
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the server

```bash
node index.js
```

Server will start on:

```
http://localhost:3000
```

---

## 📘 API Endpoints

### ➤ Get All Books

```
GET /books
```

### ➤ Get Book by ID

```
GET /books/:id
```

### ➤ Create Book

```
POST /books
```

**Request Body**

```json
{
  "title": "Book Three",
  "author": "Author Three"
}
```

### ➤ Update Book

```
PUT /books/:id
```

**Request Body**

```json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```

### ➤ Delete Book

```
DELETE /books/:id
```

---

## ❗ Error Handling

The API returns meaningful error responses:

```json
{
  "error": "Book with id 10 does not exist!"
}
```

Common error scenarios:

* Invalid ID format
* Missing required fields
* Resource not found

---

## 🧪 Testing

You can test the APIs using:

* **Postman**
* **cURL**

Make sure to set:

```
Content-Type: application/json
```

---

## ⚠️ Limitations

* Uses in-memory data (data resets on server restart)
* No authentication or authorization
* Not production-ready

---

## 🔮 Future Enhancements

* MongoDB / PostgreSQL integration
* MVC architecture (Controller / Service / Routes)
* Input validation using Joi / Zod
* Authentication using JWT
* Swagger API documentation
* TypeScript support

---

## 👨‍💻 Author

**Atul**
Software Engineer

---

## 📄 License

This project is for **learning and POC purposes only**.

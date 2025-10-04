# 🍳 Dummy Recipes – Angular + DummyJSON Auth App

> A simple **Angular (Standalone)** + **Bootstrap 5** project that demonstrates **user authentication** and **dynamic content** using the [DummyJSON API](https://dummyjson.com/docs/users) & [Auth API](https://dummyjson.com/docs/auth).

---

![App Preview](./public/cooking.png)

---

## 🚀 Features

✅ Built with **Angular (Standalone Components)**  
✅ Styled using **Bootstrap 5.2**  
✅ Integrated with **DummyJSON REST APIs**  
✅ Includes **Login** & **Signup** pages  
✅ Uses **JWT Tokens** (stored in `localStorage`)  
✅ Dynamic Navbar: `Login/Signup` → `Profile/Logout`  
✅ Auto Redirect after Login & Logout  
✅ Prepared **Auth Guard** for protected routes  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Angular 18+** | Frontend Framework |
| **Bootstrap 5.2** | Styling & Responsive Layout |
| **TypeScript** | Logic & Type Safety |
| **DummyJSON API** | Authentication & User Data |
| **LocalStorage** | Token Persistence |

---

## 📁 Project Structure

```

src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   └── signup/
│   ├── components/
│   │   └── navbar/
│   ├── services/
│   │   └── auth.service.ts
│   ├── guards/
│   │   └── auth-guard.ts
│   ├── pages/
│   │   ├── home/
│   │   └── recipe-detail/
│   └── shared/
│       ├── navbar/
│       └── recipe-card/
└── assets/

````

---

## 🧠 How It Works

### 🔹 Authentication Flow

1. **Login User**
   ```ts
   fetch('https://dummyjson.com/user/login', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       username: 'emilys',
       password: 'emilyspass',
     })
   });
````

2. **Store Tokens in localStorage**

   ```ts
   localStorage.setItem('accessToken', data.accessToken);
   ```

3. **Get Current Authenticated User**

   ```ts
   fetch('https://dummyjson.com/user/me', {
     headers: { Authorization: `Bearer ${token}` }
   });
   ```

---

## 💻 Setup & Run

```bash
git clone https://github.com/ansari-in/angulat-cook-book
cd angulat-cook-book
npm install
ng serve
```

Visit 👉 [http://localhost:4200](http://localhost:4200)

---

## 🧩 Key Files

| File                     | Purpose                                 |
| ------------------------ | --------------------------------------- |
| `auth.service.ts`        | Handles Login, Signup, Token Management |
| `login.ts` / `signup.ts` | Bootstrap Forms + Auth Logic            |
| `navbar.ts`              | Dynamic Navigation Links                |
| `auth-guard.ts`          | Route Protection                        |
| `recipe-card.ts`         | Displays Recipes with Bootstrap Cards   |

---

## 🌐 Live Demo

🔹 [Demo 1 (Firebase)](https://cookbook-angular.web.app)
🔹 [Demo 2 (Custom Domain)](https://cookbook.intesab.live)

---

## 👨‍💻 Developed By

**Ansari Intesab**
© 2025 – All Rights Reserved

---

## 🏁 Notes (For Evaluation)

* Demonstrates **Web Technologies**:

  * Angular Standalone Components
  * Bootstrap 5 Responsive Design
  * REST API Integration
  * Token-based Authentication
  * Client-side Dynamic Rendering
* **Limitations**:

  * DummyJSON API is mock-based (non-persistent)
  * AuthGuard implementation is minimal (demo purpose)

---

⭐ **If you like this project, give it a star on GitHub!**
[👉 Visit Repository](https://github.com/ansari-in/angulat-cook-book)
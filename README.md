---
title: '10. Dynamic Angular Website with DummyJSON Users API'
description: 'Solve MCA-420 Lab Assignment Q10 - Build a small Angular SPA demonstrating login, signup, authentication, and token storage using DummyJSON API.'
---

# Q10. Design a Dynamic Website Demonstrating Web Technologies (Angular + Bootstrap + JSON)

**Question 10:**  
_Design a dynamic website using HTML, JavaScript, Bootstrap, Angular (standalone components)._  

Below is a compact Angular SPA demonstrating:

- Angular standalone components & routing
- Bootstrap 5 forms and layout
- DummyJSON `/users` API integration for login & signup
- Auth token stored in `localStorage`
- Navbar showing dynamic links (`Login/Signup` vs `Profile/Logout`)
- Auto redirect after login & logout
- Angular Guard setup for future protected routes

---

```bash
|-- README.md
|-- angular.json
|-- firebase.json
|-- package-lock.json
|-- package.json
|-- public
|   |-- cooking.ico
|   |-- favicon.ico
|   `-- index.html
|-- src
|   |-- app
|   |   |-- app
|   |   |   |-- auth
|   |   |   |   |-- login
|   |   |   |   |   |-- login.html
|   |   |   |   |   |-- login.scss
|   |   |   |   |   |-- login.spec.ts
|   |   |   |   |   `-- login.ts
|   |   |   |   `-- signup
|   |   |   |       |-- signup.html
|   |   |   |       |-- signup.scss
|   |   |   |       |-- signup.spec.ts
|   |   |   |       `-- signup.ts
|   |   |   |-- components
|   |   |   |   `-- navbar
|   |   |   |       |-- navbar.html
|   |   |   |       |-- navbar.scss
|   |   |   |       |-- navbar.spec.ts
|   |   |   |       `-- navbar.ts
|   |   |   |-- guards
|   |   |   |   `-- auth-guard.ts
|   |   |   |-- models
|   |   |   |   |-- user.model.spec.ts
|   |   |   |   `-- user.model.ts
|   |   |   `-- services
|   |   |       |-- auth.spec.ts
|   |   |       `-- auth.ts
|   |   |-- app.config.ts
|   |   |-- app.html
|   |   |-- app.routes.ts
|   |   |-- app.scss
|   |   |-- app.spec.ts
|   |   |-- app.ts
|   |   |-- models
|   |   |   `-- recipe.ts
|   |   |-- pages
|   |   |   |-- home
|   |   |   |   |-- home.html
|   |   |   |   |-- home.scss
|   |   |   |   `-- home.ts
|   |   |   `-- recipe-detail
|   |   |       |-- recipe-detail.html
|   |   |       |-- recipe-detail.scss
|   |   |       `-- recipe-detail.ts
|   |   |-- services
|   |   |   |-- recipes.service.ts
|   |   |   |-- recipes.spec.ts
|   |   |   `-- recipes.ts
|   |   `-- shared
|   |       |-- navbar
|   |       |   |-- navbar.html
|   |       |   |-- navbar.scss
|   |       |   `-- navbar.ts
|   |       `-- recipe-card
|   |           |-- recipe-card.html
|   |           |-- recipe-card.scss
|   |           `-- recipe-card.ts
|   |-- index.html
|   |-- main.ts
|   `-- styles.scss
|-- tsconfig.app.json
|-- tsconfig.json
`-- tsconfig.spec.json

```

> Full project source code available on [GitHub](https://github.com/ansari-in/angulat-cook-book)



---

## Key Files

### `auth.service.ts`

Handles:

* Login (DummyJSON `/auth/login`)
* Signup (DummyJSON `/users/add`)
* Token management (`localStorage`)

### `login.ts` & `signup.ts`

* Angular forms with Bootstrap
* Calls `auth.service` methods
* Redirects on success

### `navbar.ts`

* Shows `Login/Signup` if no token
* Shows `Profile/Logout` if token exists

---

## Demo / Output

* Login & Signup pages
* Navbar links change dynamically
* Token saved in `localStorage`
* Redirects after login/logout

<iframe
  src="https://cookbook-angular.web.app"
  width="100%"
  height="900"
  allowFullScreen
  style={{
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '20px 0px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  }}
></iframe>

---

## How to Run / Integrate

```bash
git clone https://github.com/ansari-in/angulat-cook-book
cd angulat-cook-book
npm install
ng serve
```

* Navigate to `➜Local:` `http://localhost:4200/`
* Test login, signup, navbar updates

---

## Notes (for grading / write-up)

* **Why this demonstrates web technologies:**

  * Angular standalone components
  * Bootstrap forms & responsive design
  * API integration & async HTTP calls
  * Client-side auth token management
  * Dynamic DOM updates based on login state

* **Limitations:**

  * DummyJSON is a fake API; real authentication not persistent
  * Auth guard prepared but not fully implemented yet

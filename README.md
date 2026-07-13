<div align="center">

# 🛍️ NOVA STONE & CO.

**Production-Ready Full-Stack Fashion E-Commerce Platform**

A modern full-stack e-commerce application built with React, Express, and MongoDB featuring secure authentication, a complete shopping experience, order management, and a role-based admin dashboard.

<br>

<p>
  <a href="https://ecommerce-platform-f4qc.vercel.app/">
    <img src="https://img.shields.io/badge/Live-Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>

  <a href="https://github.com/adarshdhauni/ecommerce-platform">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repository" />
  </a>

  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-18181B?style=for-the-badge" alt="MIT License" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p>
  <img src="client/public/nova-stone-og.png"
       alt="NOVA STONE & CO."
       width="100%">
</p>

[Features](#features) •
[Architecture](#️-architecture) •
[Tech Stack](#️-tech-stack) •
[Screenshots](#-screenshots) •
[Getting Started](#-getting-started)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Highlights](#-highlights)
- [Why I Built This](#-why-i-built-this)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#️-architecture)
- [Folder Structure](#-folder-structure)
- [Screenshots](#-screenshots)
- [Lighthouse Scores](#-lighthouse-scores)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [API Overview](#-api-overview)
- [Authentication Flow](#-authentication-flow)
- [Database Schema](#️-database-schema)
- [State Management](#-state-management)
- [Performance](#-performance)
- [Security](#-security)
- [Accessibility](#-accessibility)
- [Engineering Decisions](#-engineering-decisions)
- [Error Handling](#-error-handling)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Challenges](#-challenges)
- [Lessons Learned](#-lessons-learned)
- [Future Improvements](#️-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Connect With Me](#-connect-with-me)

---

## 📖 Overview

NOVA STONE & CO. is a full-stack fashion e-commerce application built to cover the complete retail loop — product browsing, cart management, multi-step checkout, order tracking, reviews, and wishlists — backed by a role-based admin panel for managing products, orders, and users.

|                  |                                                                             |
| ---------------- | --------------------------------------------------------------------------- |
| **Type**         | Full-stack e-commerce (fashion / apparel)                                   |
| **Architecture** | React SPA + Express REST API                                                |
| **Frontend**     | React 19, Vite 7, React Router 7                                            |
| **Backend**      | Express 5, Mongoose 8, MongoDB                                              |
| **Auth**         | JWT — Bearer token, 7-day expiry                                            |
| **Payments**     | Simulated — stores last 4 digits and expiry only; no live payment processor |

---

## 🌐 Live Demo

### **Frontend**

**https://ecommerce-platform-f4qc.vercel.app/**

Deployed on **Vercel**.

### **Backend API**

**https://ecommerce-platform-production-81f5.up.railway.app**

Deployed on **Railway**.

---

## ⭐ Highlights

<table>
  <tr>
    <td>✅ Full-Stack Application</td>
    <td>✅ JWT Authentication</td>
    <td>✅ Role-Based Admin Panel</td>
  </tr>
  <tr>
    <td>✅ Multi-Step Checkout</td>
    <td>✅ Order Lifecycle Management</td>
    <td>✅ RTK Query Data Layer</td>
  </tr>
  <tr>
    <td>✅ REST API (35+ endpoints)</td>
    <td>✅ MongoDB (8 collections)</td>
    <td>✅ Wishlist & Reviews</td>
  </tr>
  <tr>
    <td>✅ Fully Responsive (Mobile-first)</td>
    <td>✅ Security Middleware Stack</td>
    <td>✅ Production Deployment</td>
  </tr>
</table>

---

## 💡 Why I Built This

I built this project to create a production-ready e-commerce application that demonstrates the complete lifecycle of a modern full-stack web application—from database design and REST API architecture to frontend implementation and deployment.

Rather than focusing on isolated CRUD functionality, I wanted to build a system that reflects real-world software development. The project includes authentication, role-based administration, product management, a complete checkout flow, order lifecycle management, and performance optimizations, while emphasizing clean architecture, maintainable code, and a scalable foundation for future features.

Every major architectural decision was made with long-term maintainability, performance, and user experience in mind, making the project representative of how production applications are designed and built.

---

## ✨ Features

### 🛒 Storefront

- **Home** — hero banner, category navigation, featured collection, recently viewed products, and editorial content
- **Product Catalog** — search with autocomplete, filters by gender/category/price, sort options, pagination, and a quick-view modal
- **Product Detail** — image gallery, per-size stock selection, wishlist toggle, related products, and a reviews section
- **Cart** — client-persisted, supports coupon codes (`NOVA10`, `NOVA20`) and an order note up to 500 characters
- **Checkout** — 3-step flow: shipping address → payment → confirmation, with draft recovery on reload
- **Orders** — paginated order history, per-order detail with a status timeline, and cancellation (before shipping)
- **Wishlist & Recently Viewed** — both persisted to the user document on the server
- **Reviews** — one review per product per user; post-delivery reviews can be submitted directly from the order detail page
- **Static Pages** — About, Contact, FAQ, Shipping & Returns, Store Policy
- **Newsletter & Contact** — footer subscription form and a contact form

<details>
<summary><strong>Checkout flow details</strong></summary>
<br>

```mermaid
flowchart LR
    A[Cart] --> B{Logged in?}
    B -->|No| C[/auth]
    B -->|Yes| D[Step 1: Shipping]
    D --> E[Step 2: Payment]
    E --> F[POST /api/orders/place]
    F --> G[Step 3: Confirmation]
    G --> H[Clear cart + checkout state]
```

- Tax is calculated server-side at 10% per line item
- `NOVA10` — 10% off orders over $200 · `NOVA20` — 20% off orders over $500
- Only the last 4 digits of a card are sent to the API — no full card number is stored
- Estimated delivery date is set to 5 days from placement
- Confirmation page auto-redirects to `/products` after 8 seconds

</details>

### 🛠️ Admin Panel

| Section       | Capabilities                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Dashboard** | Revenue (delivered orders), order/user/product totals, 5 recent orders, low-stock alerts (≤5 units), top 5 sellers |
| **Products**  | Search + filter by gender & category, create, edit, delete                                                         |
| **Orders**    | Search by order ID or user, filter by status, view detail, advance or cancel status                                |
| **Users**     | Search + filter by role, view detail with paginated order history and total spend                                  |

Order status flow: `Placed → Processing → Shipped → Out for Delivery → Delivered` (or `Cancelled`). Status transitions are one-directional; `Delivered` and `Cancelled` are terminal states.

---

## 🛠️ Tech Stack

<table>
<tr>

<td valign="top" width="50%">

### Frontend

![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### State & Data

![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![RTK Query](https://img.shields.io/badge/RTK_Query-764ABC?style=flat-square&logo=redux&logoColor=white)
![React Redux](https://img.shields.io/badge/React_Redux-764ABC?style=flat-square&logo=redux&logoColor=white)

### Routing

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

### Styling

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![tailwindcss-animate](https://img.shields.io/badge/tailwindcss--animate-18181B?style=flat-square)
![tailwind-scrollbar](https://img.shields.io/badge/tailwind--scrollbar-18181B?style=flat-square)
![clsx](https://img.shields.io/badge/clsx-18181B?style=flat-square)
![tailwind-merge](https://img.shields.io/badge/tailwind--merge-18181B?style=flat-square)
![CVA](https://img.shields.io/badge/class--variance--authority-18181B?style=flat-square)

### UI

![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square)
![Lucide React](https://img.shields.io/badge/lucide--react-18181B?style=flat-square&logo=lucide&logoColor=white)

</td>

<td valign="top" width="50%">

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8-880000?style=flat-square&logo=mongoose&logoColor=white)

### Authentication & Security

![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-18181B?style=flat-square)
![Helmet](https://img.shields.io/badge/Helmet-18181B?style=flat-square)
![CORS](https://img.shields.io/badge/CORS-18181B?style=flat-square)
![express-rate-limit](https://img.shields.io/badge/express--rate--limit-18181B?style=flat-square)

### File Uploads & Email

![Multer](https://img.shields.io/badge/Multer-18181B?style=flat-square)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square)

### Error Handling

![react-error-boundary](https://img.shields.io/badge/react--error--boundary-18181B?style=flat-square)

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white)

</td>

</tr>
</table>

> [!NOTE]
> **Framer Motion** is used selectively for route transitions, modal interactions, and other high-value animations. The application also employs lazy loading, responsive image delivery, and server-side data operations to maintain a fast and responsive user experience.

---

## 🏗️ Architecture

The project is split into two independently deployable applications. The client communicates with the API exclusively through RTK Query; the server is fully stateless and authenticates every protected request via a Bearer JWT.

```mermaid
graph TD
    A["🖥️ Browser (React SPA)"] --> B["RTK Query"]
    B -->|"Bearer JWT"| C["Express REST API"]
    C --> D["isAuth middleware"]
    D --> E["Route Handler / Controller"]
    E --> F["Mongoose ODM"]
    F --> G[("MongoDB")]
    C --> H["isAdmin middleware"]
    H --> E
```

### Authorization Layers

| Layer             | Mechanism                                                                         |
| ----------------- | --------------------------------------------------------------------------------- |
| **Public**        | Products, search, reviews (read), contact, subscribe                              |
| **Authenticated** | Profile, wishlist, shipping, payment, orders, reviews (write), recently viewed    |
| **Admin**         | `protect` + `adminOnly` middleware — requires `isAdmin: true` and `role: "Admin"` |

Resource ownership for orders, addresses, payments, and reviews is enforced by scoping every database query to `req.user._id`.

---

## 📁 Folder Structure

<details>
<summary>Click to expand</summary>

```text
ecommerce-platform/
├── assets/
│   └── screenshots/
│       ├── desktop/
│       └── mobile/
│
├── client/
│   ├── public/
│   │   └── images/
│   │
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── common/
│       │   ├── feedback/
│       │   │   ├── empty-state/
│       │   │   ├── error/
│       │   │   └── loading/
│       │   ├── layout/
│       │   ├── modals/
│       │   │   └── change-password/
│       │   └── ui/
│       │       └── buttons/
│       │
│       ├── context/
│       ├── data/
│       ├── features/
│       │   ├── admin/
│       │   │   └── components/
│       │   │       ├── dashboard/
│       │   │       ├── orders/
│       │   │       │   └── order-details/
│       │   │       ├── products/
│       │   │       │   └── product-form/
│       │   │       ├── shared/
│       │   │       └── users/
│       │   ├── auth/
│       │   │   └── components/
│       │   │       ├── signin/
│       │   │       └── signup/
│       │   ├── cart/
│       │   │   └── components/
│       │   ├── checkout/
│       │   │   └── components/
│       │   │       ├── payment/
│       │   │       ├── shared/
│       │   │       └── shipping/
│       │   ├── home/
│       │   │   └── components/
│       │   ├── orders/
│       │   │   └── components/
│       │   └── products/
│       │       └── components/
│       │           ├── catalog/
│       │           └── product-details/
│       │
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       │   ├── admin/
│       │   ├── auth/
│       │   └── user/
│       ├── redux/
│       │   ├── api/
│       │   ├── cart/
│       │   └── store/
│       └── routes/
│
└── server/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── seed/
    └── utils/
```

</details>

---

## 📸 Screenshots

### Desktop

<table>
  <tr>
    <td align="center" width="50%">
      <img src="assets/screenshots/desktop/desktop-home.png" alt="Home" width="100%">
      <br><sub><b>Home</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="assets/screenshots/desktop/desktop-products.png" alt="Products" width="100%">
      <br><sub><b>Products</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-product-details.png" alt="Product Details" width="100%">
      <br><sub><b>Product Details</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-cart.png" alt="Cart" width="100%">
      <br><sub><b>Cart</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-checkout.png" alt="Checkout" width="100%">
      <br><sub><b>Checkout</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-orders.png" alt="Orders" width="100%">
      <br><sub><b>Orders</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-order-details.png" alt="Order Details" width="100%">
      <br><sub><b>Order Details</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-wishlist.png" alt="Wishlist" width="100%">
      <br><sub><b>Wishlist</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-profile.png" alt="Profile" width="100%">
      <br><sub><b>Profile</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-admin-dashboard.png" alt="Admin Dashboard" width="100%">
      <br><sub><b>Admin Dashboard</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-login.png" alt="Login" width="100%">
      <br><sub><b>Login</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/desktop/desktop-register.png" alt="Register" width="100%">
      <br><sub><b>Register</b></sub>
    </td>
  </tr>
</table>

---

### Mobile

<table>
  <tr>
    <td align="center" width="50%">
      <img src="assets/screenshots/mobile/mobile-home.png" alt="Home" width="100%">
      <br><sub><b>Home</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="assets/screenshots/mobile/mobile-products.png" alt="Products" width="100%">
      <br><sub><b>Products</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-products-filter.png" alt="Filter" width="100%">
      <br><sub><b>Filter</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-product-details.png" alt="Product Details" width="100%">
      <br><sub><b>Product Details</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-cart.png" alt="Cart" width="100%">
      <br><sub><b>Cart</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-checkout.png" alt="Checkout" width="100%">
      <br><sub><b>Checkout</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-orders.png" alt="Orders" width="100%">
      <br><sub><b>Orders</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-order-details.png" alt="Order Details" width="100%">
      <br><sub><b>Order Details</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-wishlist.png" alt="Wishlist" width="100%">
      <br><sub><b>Wishlist</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-profile.png" alt="Profile" width="100%">
      <br><sub><b>Profile</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-admin-dashboard.png" alt="Admin Dashboard" width="100%">
      <br><sub><b>Admin Dashboard</b></sub>
    </td>
    <td align="center">
      <img src="assets/screenshots/mobile/mobile-login.png" alt="Login" width="100%">
      <br><sub><b>Login</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center" colspan="2">
      <img src="assets/screenshots/mobile/mobile-register.png" alt="Register" width="50%">
      <br><sub><b>Register</b></sub>
    </td>
  </tr>
</table>

---

## 🏆 Lighthouse Scores

Measured on the deployed production build.

<table>
  <thead>
    <tr>
      <th>Metric</th>
      <th>🖥️ Desktop</th>
      <th>📱 Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>⚡ Performance</td>
      <td><strong>100</strong></td>
      <td><strong>96</strong></td>
    </tr>
    <tr>
      <td>♿ Accessibility</td>
      <td><strong>91</strong></td>
      <td><strong>91</strong></td>
    </tr>
    <tr>
      <td>✅ Best Practices</td>
      <td><strong>96</strong></td>
      <td><strong>96</strong></td>
    </tr>
    <tr>
      <td>🔍 SEO</td>
      <td><strong>92</strong></td>
      <td><strong>92</strong></td>
    </tr>
  </tbody>
</table>

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- MongoDB Atlas (or a local MongoDB instance)

### Clone the repository

```bash
git clone https://github.com/adarshdhauni/ecommerce-platform.git
cd ecommerce-platform
```

### Install dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

### Configure environment variables

Create a `.env` file in both the `server` and `client` directories.

#### Server (`server/.env`)

| Variable | Description |
| -------- | ----------- |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign JWTs |
| `CLIENT_URL` | Frontend URL for CORS and password reset links |
| `RESEND_API_KEY` | Resend API key |
| `PORT` | Server port (optional) |
| `NODE_ENV` | Environment (`development` or `production`) |

#### Client (`client/.env`)

| Variable | Description |
| -------- | ----------- |
| `VITE_API_URL` | Backend API base URL |

### Start the development servers

#### Server

```bash
cd server
npm start
```

#### Client

```bash
cd client
npm run dev
```

The application will be available at:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:3000
```

### Build the frontend for production

```bash
cd client
npm run build
```

### Preview the production build

```bash
cd client
npm run preview
```

This serves the optimized production frontend locally before deployment.

---

## 🔌 API Overview

Base path: `/api` — all routes prefixed.

### Products (Public)

| Method | Path                           | Description                               |
| ------ | ------------------------------ | ----------------------------------------- |
| GET    | `/products`                    | List with filters, sort, and pagination   |
| GET    | `/products/search-suggestions` | Search autocomplete (top 5)               |
| GET    | `/featured-products`           | Featured products for the homepage        |
| GET    | `/products/:id`                | Product detail                            |
| GET    | `/products/:id/related`        | Related products (same category + gender) |

### Orders (Authenticated)

| Method | Path                 |
| ------ | -------------------- |
| POST   | `/orders/place`      |
| GET    | `/orders/my-orders`  |
| GET    | `/orders/:id`        |
| PATCH  | `/orders/cancel/:id` |

<details>
<summary><strong>Users, Reviews, Wishlist, Shipping & Payment</strong></summary>
<br>

#### Users

| Method | Path                               | Auth | Rate Limit |
| ------ | ---------------------------------- | ---- | ---------- |
| POST   | `/user/register`                   | —    | 5 / 10 min |
| POST   | `/user/login`                      | —    | 5 / 10 min |
| POST   | `/user/forgot-password`            | —    | 5 / 10 min |
| POST   | `/user/reset-password/:token`      | —    | 5 / 10 min |
| GET    | `/user/profile`                    | ✅   | —          |
| PUT    | `/user/profile`                    | ✅   | —          |
| PUT    | `/user/update-password`            | ✅   | —          |
| POST   | `/user/recently-viewed/:productId` | ✅   | —          |
| GET    | `/user/recently-viewed`            | ✅   | —          |

#### Reviews

| Method | Path                                     | Auth             |
| ------ | ---------------------------------------- | ---------------- |
| GET    | `/products/:productId/reviews`           | —                |
| GET    | `/products/reviews/my`                   | ✅               |
| POST   | `/products/:productId/reviews`           | ✅ · 20 / 15 min |
| DELETE | `/products/:productId/reviews/:reviewId` | ✅               |

#### Wishlist

| Method | Path                   | Auth        |
| ------ | ---------------------- | ----------- |
| GET    | `/wishlist`            | ✅          |
| POST   | `/wishlist/:productId` | ✅ (toggle) |

#### Shipping

| Method | Path                     | Auth | Rate Limit |
| ------ | ------------------------ | ---- | ---------- |
| POST   | `/shipping/add`          | ✅   | 5 / 10 min |
| GET    | `/shipping/my-addresses` | ✅   | —          |
| DELETE | `/shipping/:id`          | ✅   | —          |

#### Payment

| Method | Path             | Auth | Rate Limit |
| ------ | ---------------- | ---- | ---------- |
| POST   | `/payment/add`   | ✅   | 5 / 10 min |
| GET    | `/payment/saved` | ✅   | —          |
| DELETE | `/payment/:id`   | ✅   | —          |

</details>

<details>
<summary><strong>Admin endpoints</strong></summary>
<br>

All admin routes require `isAdmin: true` and `role: "Admin"`.

| Method | Path                          |
| ------ | ----------------------------- |
| GET    | `/admin/stats`                |
| GET    | `/admin/orders/recent`        |
| GET    | `/admin/orders`               |
| GET    | `/admin/orders/:id`           |
| PATCH  | `/admin/orders/status-update` |
| GET    | `/admin/products`             |
| POST   | `/admin/products/add`         |
| PUT    | `/admin/products/edit/:id`    |
| DELETE | `/admin/products/delete/:id`  |
| GET    | `/admin/users`                |
| GET    | `/admin/users/:id`            |
| GET    | `/admin/dashboard/analytics`  |

</details>

---

## 🔑 Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant API
    participant DB

    User->>Client: Register / Login
    Client->>API: POST /api/user/register or /login
    API->>DB: Validate credentials, hash password (bcrypt)
    API-->>Client: JWT + user object
    Client->>Client: localStorage.setItem("token")
    Client->>API: Subsequent requests — Authorization: Bearer <token>
    API->>API: isAuth middleware verifies JWT
    API-->>Client: Protected resource
```

**Registration** validates email format, Indian 10-digit phone numbers (prefix `6`–`9`), and password strength (8–64 characters, upper/lowercase, number, special character). Passwords are hashed with bcrypt at 10 rounds. A JWT is returned immediately on success.

**Login** enforces account lockout after 5 failed attempts (15-minute lock via `loginAttempts` / `lockUntil`).

**Password Reset** — a 32-byte hex token is generated, SHA-256 hashed in the database, and expires in 10 minutes. The reset link is delivered via Resend.

**Session Handling** — the JWT is stored in `localStorage` and attached to every request via RTK Query's `prepareHeaders`. A `401` response clears storage and redirects to `/auth`. `AdminRoute` actively calls `GET /api/user/profile` to verify `isAdmin` + `role` before rendering protected admin views.

---

## 🗄️ Database Schema

8 MongoDB collections: `User`, `Product`, `Order`, `Review`, `Shipping`, `Payment`, `Contact`, `Subscription`.

<details>
<summary><strong>View all model fields</strong></summary>
<br>

**User**

```
name, phone (unique), email (unique), password (select: false)
wishlist[], recentlyViewed[]
loginAttempts, lockUntil
passwordResetToken, passwordResetExpires
role (Admin | User), isAdmin (bool)
```

**Product**

```
name, price, description, productInfo[]
ratingsAverage, ratingsCount
category, gender, images[]
sizes[{ size, stock, sold }]
sold, isFeatured
```

**Order**

```
orderId (unique, nanoid), userId, shippingAddressId, paymentId
items[{ productId, quantity, size, name, basePrice, taxRate, taxPrice, total }]
note, coupon{ code, discountAmount }
subtotalAmount, totalAmount, taxAmount, finalAmount
status, per-status timestamps, deliveryDate, isPaid, paidAt
```

> A pre-save hook recalculates `subtotal`, `tax`, and `finalAmount` on every save.

**Review**

```
content, rating (1–5), product (ref), user (ref)
unique compound index: (product, user)
```

**Shipping**

```
userId, fullName, phone
address1, address2, landmark, postalCode, city, state
```

**Payment**

```
userId, name, last4, month, year
compound index: (userId, last4)
```

**Contact / Subscription**

```
Contact: firstName, lastName, email, message, createdAt
Subscription: email (unique)
```

</details>

---

## 🧠 State Management

| Store                  | Purpose                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| RTK Query (`apiSlice`) | All server data — products, auth, orders, admin, reviews, wishlist                                        |
| Redux `cart` slice     | Cart items, persisted to `localStorage`                                                                   |
| `FilterContext`        | Filter UI state (modal open/close, price slider); URL params are the source of truth on the Products page |
| `localStorage`         | Token, cart items, checkout drafts, coupon, order note, active step                                       |
| `sessionStorage`       | Auth-expiry flash messages                                                                                |

RTK Query features in use: tag-based cache invalidation, `refetchOnFocus`, `refetchOnReconnect`, and optimistic wishlist updates on the product page.

---

## ⚡ Performance

| Optimization           | Implementation                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Code splitting         | `React.lazy()` for all routes and heavy modals                                       |
| Suspense               | Global loader fallback + per-modal fallbacks                                         |
| Memoization            | `memo()` on Navbar, ProductCard, Filter, and other frequently re-rendered components |
| Debounced search       | 300ms debounce on the Products page                                                  |
| Server-side pagination | Products, orders, reviews, and all admin lists                                       |
| Image optimization     | `srcSet`, `loading="lazy"`, `decoding="async"`, explicit `width`/`height` attributes |
| Scroll listener        | `requestAnimationFrame` + `{ passive: true }` for the sticky navbar                  |
| Lean DB queries        | `.lean()` on analytics and search-suggestion queries                                 |

---

## 🔒 Security

### Backend

| Measure                 | Detail                                                                      |
| ----------------------- | --------------------------------------------------------------------------- |
| **Helmet**              | Secure HTTP response headers                                                |
| **CORS**                | Whitelist of `localhost:5173` and `CLIENT_URL`; credentials enabled         |
| **Rate Limiting**       | Auth (5/10 min), contact, subscribe, shipping, payment, reviews (20/15 min) |
| **NoSQL Injection**     | Mongo sanitization on all incoming request data                             |
| **HPP**                 | HTTP parameter pollution protection; `category` and `gender` whitelisted    |
| **XSS Protection**      | xss-clean middleware                                                        |
| **Body Size Limit**     | 10kb cap on JSON and URL-encoded payloads                                   |
| **Account Lockout**     | 5 failed logins → 15-minute lock                                            |
| **Password Policy**     | Enforced on registration, reset, and password change                        |
| **JWT Expiry**          | 7-day tokens with explicit `TokenExpiredError` handling                     |
| **Hashed Reset Tokens** | SHA-256 hash stored in DB; 10-minute expiry                                 |
| **Ownership Checks**    | Orders, addresses, payments, and reviews scoped to `req.user._id`           |

### Frontend

- Token cleared from storage on any `401` response
- Route-level protection via `ProtectedRoute` and `AdminRoute`
- Client-side validation before every API call
- Only the last 4 digits of a payment card are sent to the server

---

## ♿ Accessibility

| Feature               | Implementation                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------- |
| Semantic HTML         | `<main>`, `<nav>`, `<footer>`, properly labeled form inputs                                  |
| Accessible primitives | Radix UI — keyboard navigation, focus trapping, and ARIA roles built in                      |
| Focus management      | `focus-visible:ring-*` on all interactive elements; auto-focus on checkout validation errors |
| ARIA labels           | Applied to cart, profile icon, pagination controls, and admin action buttons                 |
| Contrast              | High-contrast black/white design throughout                                                  |
| Language              | `<html lang="en">` declared                                                                  |

---

## 🧠 Engineering Decisions

### Deliberate state management

State is divided by responsibility rather than managed in a single global store. RTK Query handles server state, Redux stores client-side cart data, Context manages transient UI state, and URL search parameters act as the source of truth for product filters. This separation keeps data flow predictable and minimizes unnecessary synchronization.

### Server-side data operations

Product filtering, searching, sorting, and pagination are performed on the server instead of the client. This reduces payload sizes, scales more effectively as the catalog grows, and ensures consistent results across devices.

### Feature-based frontend architecture

The frontend is organized by feature rather than component type. Related pages, components, hooks, and logic are grouped together, making the codebase easier to navigate, maintain, and extend as the application grows.

### Modular backend architecture

The backend separates routes, controllers, middleware, models, utilities, and configuration into distinct layers. This separation of concerns improves maintainability, simplifies testing, and keeps business logic isolated from routing.

### Snapshot-based order design

Orders store product details such as name, price, tax, and size at the time of purchase instead of referencing only the current product data. This preserves historical accuracy even if products or prices change after an order has been placed.

### Progressive loading strategy

Heavy routes and modal components are loaded lazily using `React.lazy()` and `Suspense`, while responsive images are delivered using `srcSet`, native lazy loading, and asynchronous decoding to reduce initial bundle size and improve perceived performance.

### Layered error handling

The frontend uses `react-error-boundary` together with dedicated loading, empty, and error state components to provide graceful degradation. The backend centralizes API error handling through shared middleware, ensuring consistent responses across all endpoints.

### Independent deployment architecture

The frontend and backend are deployed as separate applications on Vercel and Railway, communicating through a REST API. This separation allows each application to be deployed, scaled, and maintained independently.

---

## 🚨 Error Handling

- Centralized `errorHandler` middleware on the backend, with dedicated handling for `TokenExpiredError`
- `react-error-boundary` wraps the frontend to isolate component-level failures
- Dedicated `EmptyState` and `ErrorState` components for empty responses and failed requests
- Any `401` from the API clears the stored token and redirects to `/auth` with a session-expired message

---

## 📜 Available Scripts

### Client (`/client`)

| Script | Description |
| ------- | ----------- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the frontend for production |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Lints the frontend codebase using ESLint |

### Server (`/server`)

| Script | Description |
| ------- | ----------- |
| `npm start` | Starts the Express server |
| `npm run dev` | Starts the server in development mode with automatic reload *(if using Nodemon)* |

---

## 🚀 Deployment

|              |                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------- |
| **Frontend** | [Vercel](https://ecommerce-platform-f4qc.vercel.app/) — `npm run build` from `/client`            |
| **Backend**  | [Railway](https://ecommerce-platform-production-81f5.up.railway.app) — `npm start` from `/server` |

To deploy your own instance, provision a Node.js host for the backend and a static host for the frontend, configure the environment variables listed [above](#-environment-variables), and set `CLIENT_URL` on the backend to match the deployed frontend origin for CORS and password reset links.

---

## 🧪 Testing

Manual testing was performed end-to-end across authentication (register, login, lockout, reset), product browsing, filtering, wishlist, cart, checkout, the full order lifecycle, admin operations, and responsive layouts across screen sizes. Automated testing (API integration and frontend component/E2E) is planned as a future improvement.

---

## 🧗 Challenges

- **Learning while building** — every layer of the stack was learned in the context of building it: REST API design, MongoDB schema decisions, JWT security, Redux patterns, and deployment configuration were all applied for the first time through this project
- **Auth from scratch** — implementing JWT issuance, bcrypt hashing, login lockout, and a hashed-token password reset required reasoning through security trade-offs at each step, not just following a recipe
- **End-to-end checkout consistency** — keeping cart state, server-side stock decrement, coupon validation, and snapshot pricing in sync across a multi-step flow required careful agreement between client and server logic
- **Maintaining solo scope** — building a complete storefront, admin panel, and REST API as a solo developer meant constantly context-switching between frontend UX and backend data/security concerns

---

## 📚 Lessons Learned

- Implementing the full retail loop rather than just CRUD exposed real-world edge cases — mid-checkout stockouts, terminal order states, ownership enforcement — that a narrower project would never have surfaced
- Security is significantly easier to build in than bolt on; rate limiting, sanitization, and ownership scoping added naturally as each route was built would have been far more disruptive to retrofit
- Being deliberate about _where_ state lives (server cache in RTK Query, user-driven cart in Redux, ephemeral UI in context) produces a much cleaner data flow than defaulting everything to a single store
- Shipping a working application and producing a _complete_ one are different goals — deployment configuration, tests, and environment templates are easy to deprioritize solo, and recognizing that gap early is itself a useful lesson

---

## 🗺️ Future Improvements

### High Priority

- [ ] Real payment integration — Stripe or Razorpay with PCI-compliant handling
- [ ] Image upload — multer + cloud storage (S3 / Cloudinary) for the admin panel
- [ ] CI/CD pipeline and `.env.example` for reproducible deployments
- [ ] Automated tests — API integration + frontend component / E2E

### Security & Auth

- [ ] Refresh tokens with httpOnly cookie storage
- [ ] Server-side token validation on `ProtectedRoute` entry
- [ ] Role management API — promote/demote users from the admin UI

### Features

- [ ] Server-side cart sync across devices and sessions
- [ ] Transactional emails for order confirmation and shipping updates
- [ ] MongoDB text index or Elasticsearch for scalable product search
- [ ] OAuth — Google / social login
- [ ] Post-delivery refund workflow
- [ ] Admin views for inbound contact messages and the subscriber list

### Code Quality

- [ ] Fix `getProducts` crash when the `search` query param is absent
- [ ] Skip card/CVV validation when using a saved payment method
- [ ] Skip `useGetRecentlyViewedQuery` for unauthenticated users on the product page
- [ ] Remove duplicate `express-mongo-sanitize` package
- [ ] TypeScript migration for end-to-end type safety
- [ ] Centralize coupon constants (currently duplicated in Cart and `orderController`)

### Accessibility & UX

- [ ] Skip navigation link, `prefers-reduced-motion`, and toast live regions
- [ ] `react-helmet` with Open Graph and structured product data for SEO
- [ ] PWA support with offline cart

---

## 🤝 Contributing

Although this is primarily a personal project, feedback, issues, and suggestions are always welcome.

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```

4. Push your branch

   ```bash
   git push origin feature/your-feature
   ```

5. Open a Pull Request

> [!TIP]
> For larger changes, please open an issue first to discuss the proposed implementation.

---

## 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Adarsh Dhauni**

Open to remote, hybrid, and full-time software engineering opportunities, with a preference for remote roles.

📧 **adarshdhauni186@gmail.com**

---

## 🌐 Connect With Me

<p align="left">
  <a href="https://github.com/adarshdhauni">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
    <a href="https://portfolio-xi-silk-b3un2mc452.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/adarsh-dhauni-7146903a6/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://leetcode.com/u/Adarsh_49/">
    <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" />
  </a>
  <a href="mailto:adarshdhauni186@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<div align="center">

Built with ❤️ using React, Vite, Node.js, Express.js, MongoDB, and Tailwind CSS.

**Designed, developed, deployed, and maintained by
<a href="https://github.com/adarshdhauni">Adarsh Dhauni</a>.**

</div>

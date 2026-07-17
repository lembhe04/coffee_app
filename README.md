


# ☕ Buy Me a Coffee

A modern, production-ready **Buy Me a Coffee** web application built with **Next.js 16**, **Tailwind CSS**, **Supabase**, and **Razorpay**.

Users can support the creator by purchasing a virtual coffee. Payments are securely processed through Razorpay, verified on the backend, and stored in Supabase.

---

## ✨ Features

- ☕ Buy a coffee with predefined amounts
  - ₹10
  - ₹50
  - ₹100
- 👤 Enter supporter name
- 💳 Secure Razorpay Checkout integration
- 🔒 Backend payment signature verification (HMAC SHA256)
- 🗄️ Store successful payments in Supabase
- 🎉 Beautiful payment success page
- ❤️ Display recent supporters
- 📱 Fully responsive design
- ⚡ Fast Next.js App Router architecture
- 🎨 Modern Tailwind CSS UI
- 🔄 Loading states
- 🔔 Toast notifications
- ❌ Proper error handling
- 🚀 Vercel deployment ready

---

# 🛠 Tech Stack

### Frontend

- Next.js 16 (App Router)
- React
- Tailwind CSS

### Backend

- Next.js Route Handlers

### Database

- Supabase

### Payment Gateway

- Razorpay

### Deployment

- Vercel

---

# 📂 Project Structure

```
app/
│
├── api/
│   ├── create-order/
│   │   └── route.js
│   └── verify-payment/
│       └── route.js
│
├── success/
│   └── page.js
│
├── layout.js
├── page.js
└── globals.css

components/
├── Navbar.jsx
├── Hero.jsx
├── CoffeeCard.jsx
├── CoffeeSelector.jsx
├── Supporters.jsx
├── Footer.jsx
└── LoadingSpinner.jsx

lib/
├── razorpay.js
└── supabase.js

utils/
└── verifySignature.js

public/
├── coffee.png
└── hero.png
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/buy-me-a-coffee.git
```

Move into the project

```bash
cd buy-me-a-coffee
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🔑 Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

RAZORPAY_KEY_ID=

RAZORPAY_SECRET=
```

Never commit this file.

---

# 🗄️ Database Schema

Create a table named **payments**

| Column | Type |
|----------|--------|
| id | uuid |
| name | text |
| amount | integer |
| order_id | text |
| payment_id | text |
| signature | text |
| status | text |
| created_at | timestamp |

---

# 💳 Payment Flow

1. User enters their name.
2. Selects a coffee amount.
3. Clicks **Buy Me a Coffee**.
4. Backend creates a Razorpay order.
5. Razorpay Checkout opens.
6. User completes payment.
7. Backend verifies payment signature.
8. Successful payment is stored in Supabase.
9. User is redirected to the success page.
10. Payment appears in the Recent Supporters section.

---

# 🔐 Security

- Razorpay Secret is never exposed to the client.
- Payment verification is performed only on the backend.
- HMAC SHA256 signature verification.
- Client-side payment status is never trusted.
- Environment variables are used for sensitive credentials.

---

# 🎨 UI Sections

- Hero
- Name Input
- Coffee Selection
- Buy Button
- Recent Supporters
- Footer

---

# 📱 Responsive Design

- Mobile First
- Tablet Friendly
- Desktop Optimized

---

# 🚀 Deployment

Deploy easily on **Vercel**

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy.

---

# 📸 Future Improvements

- User authentication
- Reward points system
- Free coffee redemption
- Monthly leaderboard
- Donation messages
- Email notifications
- Admin dashboard
- Payment analytics
- Dark mode
- QR code payments

---

# 👩‍💻 Author

**Prachi Lembhe**




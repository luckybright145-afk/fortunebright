# FortuneBright - Investment Platform

A complete full-stack investment platform built with Next.js, Express, PostgreSQL, and integrated payment processing.

## 🚀 Live Website

Coming soon after deployment!

## ✨ Features

✅ **User Authentication** - Secure signup/login with JWT
✅ **Account Management** - User profiles and account settings
✅ **Investment Plans** - Multiple tiers (Starter, Silver, Gold, Diamond)
✅ **Dashboard** - Real-time investment tracking
✅ **Referral System** - Earn commissions from referrals
✅ **Transaction History** - Complete audit trail
✅ **Payment Integration** - Paystack support

## 🏗️ Tech Stack

- **Frontend**: Next.js 13+, React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Payments**: Paystack API
- **Deployment**: Docker & Docker Compose

## 📁 Project Structure

```
fortunebright/
├── frontend/          # Next.js frontend application
├── backend/           # Express.js backend API
├── docker-compose.yml # Docker configuration
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose (optional)

### Using Docker (Recommended)
```bash
docker-compose up -d
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Manual Setup

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Deployment

Ready to deploy to:
- ✅ Render.com
- ✅ Vercel (Frontend)
- ✅ Railway (Backend)
- ✅ Heroku
- ✅ AWS

## 📝 API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/investments/plans` - Get investment plans
- `POST /api/investments/invest` - Create investment
- `GET /api/users/profile` - Get user profile
- `GET /api/users/balance` - Get account balance

## 📞 Support

For questions or issues, check the documentation or create an issue on GitHub.

## 📄 License

MIT

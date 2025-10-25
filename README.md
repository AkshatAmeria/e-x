# e^x Financial Management Application

A comprehensive **Financial Management Web Application** that empowers users to track their spending, manage budgets, and gain actionable insights through interactive data visualizations.

🔗 **Live Demo**: [https://e-raise-to-x-financial-management.vercel.app/](https://e-raise-to-x-financial-management.vercel.app/)

---

## 📋 Overview

**e^x Financial Management** is a modern financial tracking application designed to help users maintain control over their finances. The application supports flexible transaction management with recurring patterns, intelligent budget monitoring, and automated alerts to keep users informed about their spending habits.

---

## ✨ Key Features

### 💰 Transaction Management
- **Create Flexible Transactions**: Add one-time, recurring, monthly, yearly, or custom frequency transactions
- **Spending Categorization**: Add category to the spending
- **Advanced Filtering**: Filter transactions by date range, category, amount, and recurrence type
- **Transaction History**: View comprehensive transaction logs with detailed insights

### 📊 Budget Tracking & Alerts
- **Custom Budget Limits**: Set daily, weekly, or monthly budget thresholds
- **Automated Monitoring**: Inngest-powered cron jobs continuously monitor spending patterns
- **Real-time Alerts**: Receive instant email notifications when budget limits are exceeded
- **Scenario-based Detection**: Intelligent algorithms analyze spending behavior and trigger appropriate alerts

### 📈 Data Visualization & Insights
- **Interactive Charts**: Visualize spending patterns using bar graphs and pie charts
---

## 🛠️ Technologies Used

### Frontend
- **Next.js** - React framework for server-side rendering and optimal performance
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Aceternity UI** - Modern UI components for enhanced user experience
- **ShadCN UI** - Beautiful and accessible component library
- **Recharts** - Powerful data visualization library for financial insights

### Backend & Infrastructure
- **Prisma** - Type-safe ORM for database management and migrations
- **Inngest** - Event-driven workflow engine for cron jobs and background tasks
- **React Email** - Template-based email system for budget alerts
- **Vercel** - Deployment platform for seamless hosting and scaling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database (or your preferred Prisma-compatible database)

### Installation

1. **Clone the Repository**
```bash
git clone <repository-url>
cd e-raise-to-x-financial-management
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
Create a `.env` file in the root directory and add your configuration:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_******************************
CLERK_SECRET_KEY=sk_test_*********************************************

NEXT_PUBLIC_CLERK_SIGN_IN_URL=sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=sign-up

# Connect to Supabase via connection pooling with Supavisor.
DATABASE_URL="postgresql://postgres.**************:***************@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations.
DIRECT_URL="postgresql://postgres.**************:***************@aws-0-us-west-1.pooler.supabase.com:5432/postgres"

ARCJET_KEY=ajkey_****************************************
RESEND_API_KEY=re_****************************************
GEMINI_API_KEY=AIzaSy************************************

```

4. **Set Up Database**
```bash
npx prisma generate
npx prisma migrate dev
```

5. **Start Development Server**
```bash
npm run dev
```

6. **Run Inngest Development Server**
In a separate terminal:
```bash
npx inngest-cli@latest dev
```

The application will be available at `http://localhost:3000`

---

## 🧪 Testing Alert Functionality

To test the budget alert system:

1. Navigate to the Inngest dashboard (http://localhost:8288 in development)
2. Locate the budget monitoring function
3. Trigger a test event manually or wait for the scheduled cron job
4. Based on the scenario and budget settings, an email notification will be sent to the configured user email

---

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # React components
│   └── lib/              # Utility functions
├── prisma/                # Database schema and migrations
├── inngest/              # Inngest functions and workflows
├── emails/               # Email templates
└── public/               # Static assets
```

---

## 🔄 How It Works

1. **Transaction Creation**: Users create transactions with specific attributes (amount, category, recurrence pattern)
2. **Scenario Detection**: The system analyzes transactions and applies user-defined rules
3. **Budget Monitoring**: Inngest cron jobs run periodically to check spending against budget limits
4. **Alert Triggering**: When limits are exceeded, automated emails are sent via React Email
5. **Data Visualization**: Transaction data is processed and displayed through interactive charts

---

## 📝 Version Information

**Current Version**: v1.0  
**Status**: Active Development

### Upcoming Features
- Multi-currency support
- Advanced analytics dashboard
- Export functionality (PDF/CSV)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📧 Support

For questions or support, please open an issue in the repository or connect at 120104.akshat@gmail.com .

---

Built with ❤️ using Next.js and modern web technologies by Akshat.



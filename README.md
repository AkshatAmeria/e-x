# Financial Management Web App

## Introduction
This is a **Financial Management Web Application** designed to help users track their spending and gain insights using **bar graphs** and **pie charts**. The application is currently in **Version 1**, which includes a **budget functionality**. If the set daily budget is exceeded, an alert is sent to the user via email.

## Features
- **Budget Tracking**: Users can set a daily budget, and if exceeded, an alert is triggered.
- **Insights & Analytics**: Financial data is visualized using **bar graphs** and **pie charts**.
- **Email Alerts**: Notifications are sent to users when their daily budget is crossed.

## Technologies Used
- **Next.js** - React framework for building the frontend and backend.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Aceternity UI & ShadCN** - UI components for a modern design.
- **Inngest** - For handling event-driven workflows like budget alerts.
- **Recharts** - Data visualization library for financial insights.
- **React Email** - For sending budget alerts via email.
- **Prisma** - ORM for database management.

## Installation & Setup
```sh


### 1. Clone the Repository
git clone <repository-url>
cd <repository-folder>
### 2. Initialize and Install Dependencies
npm init
npm install
### 3. Start the Development Server
npm run dev
### 4. Run Prisma Migrations
npx prisma migrate dev
### 5. Start Inngest
npx inngest-cli@latest dev
### 6. Testing Alerts
To check the alert functionality, invoke the alert function in Inngest. Based on the scenario, an email notification will be sent to the user.



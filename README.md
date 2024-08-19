# Horizon: Fintech Banking Application

Horizon is an advanced financial SaaS platform designed to help users manage their bank accounts, view transaction history in real-time, and perform in-app money transfers. This project was built using modern web technologies and incorporates a range of features to offer a comprehensive financial management experience.

## 🛠️ Technologies Used

- **Next.js**: Framework for server-side rendering (SSR) and client-side applications.
- **TypeScript**: A typed superset of JavaScript that helps with code quality and maintainability.
- **Appwrite**: Backend server for user authentication and database management.
- **Plaid**: Service for connecting to multiple bank accounts and retrieving transaction data.
- **Dwolla**: API for facilitating secure money transfers between accounts.
- **React Hook Form**: Library for managing form state in React applications.
- **Zod**: TypeScript-first schema validation library.
- **TailwindCSS**: Utility-first CSS framework for designing responsive and customizable interfaces.
- **Chart.js**: Library for creating interactive and dynamic charts.

## 🚀 Features

- **Secure Authentication**: Implemented server-side rendering (SSR) authentication with robust validation and authorization.
- **Bank Integration**: Connect and manage multiple bank accounts using Plaid.
- **Dashboard**: Displays an overview of account balances, recent transactions, and spending categories.
- **Transaction History**: View transaction history with pagination and filtering options.
- **Real-Time Updates**: Reflects changes instantly when new bank accounts are connected.
- **Funds Transfer**: Transfer money between accounts using Dwolla, with all necessary recipient details.
- **Responsive Design**: Ensures the application works seamlessly across different devices and screen sizes.

## 📋 Getting Started

### Prerequisites

Ensure you have the following installed:
- Git
- Node.js
- npm (Node Package Manager)



# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

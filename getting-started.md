# Getting started

## Prerequisites

- **Node.js**: v22+ recommended
- **PNPM**: v10.6.4
- **PostgreSQL**: A running instance (local or hosted)
- **Web3 Wallet**:
  - **Solana:** Phantom, Solflare

## <u>LOCAL DEVELOPMENT</u> Setup

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/merkle-pay/merkle-pay.git
    cd merkle-pay
    ```

2.  **Install Dependencies**
    _(Recommended to use make)_

    ```bash
     # Using make (recommended)
    make i
     # Or manually with pnpm
    pnpm install
    ```

3.  **Configure Environment Variables**

    ```bash
     # you need two .env files for local development

     # step 1: backend config
    cp apps/merkle-pay/.env.example apps/merkle-pay/.env

     # step 2: frontend dev flag
    cp apps/merkle-dashboard/.env.production.example apps/merkle-dashboard/.env.production
    ```

4.  **Database Setup & Migration**

    ```bash
     # Navigate to the merkle-pay app directory first
    cd apps/merkle-pay
     # Generate Prisma client
    make prisma-gen
     # Apply migration to database (password is 'yesyesyes')
    make prisma-deploy
    ```

5.  **Run Locally**
    ```bash
     # In root directory !!!
    make dev
    ```

## <u>PRODUCTION</u> Deployment

0.  **Install docker**

    ```bash
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    ```

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/merkle-pay/merkle-pay.git
    cd merkle-pay
    ```

2.  **Configure Environment Variables**

    ```bash
     # edit .env file and add your production env vars
    cp apps/merkle-pay/.env.example apps/merkle-pay/.env
    cp apps/merkle-dashboard/.env.production.example apps/merkle-dashboard/.env.production
    ```

3.  **Build & Run with Docker Compose**
    ```bash
     # Build images and start containers in detached mode
    make d-up
     # To stop:
    make d-stop
     # To view logs:
    make d-logs
    ```
4.  **Recreate everything after git pull**

    ```bash
     # when you pull the lastest version of merkle-pay project
     # you need to re-create everything

     # step1. remove everything, and get back to a completely clean slate
    make d-clean
     # step2. re-create everything, starting fresh
    make d-up
    ```

# Installation

## Prerequisites

- **Node.js**: v22+ recommended
- **PNPM**: v10.6.4
- **PostgreSQL**: A running instance (local or hosted)
- **Web3 Wallet**:
  - **Solana:** Phantom, Solflare

## Installation & Setup for <u>LOCAL DEVELOPMENT</u>

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/merkle-pay/merkle-pay.git
    cd merkle-pay
    ```

2.  **Install Dependencies**
    _(Recommended to use make)_

    ```bash
    # Using make
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
    touch apps/merkle-dashboard/.env.development
    echo "VITE_DEV=true" > apps/merkle-dashboard/.env.development
    ```

4.  **Database Setup & Migration**

    ```bash
    cd apps/merkle-pay
    # Generate Prisma client
    make prisma-gen
    # Apply migration to database (password is 'yesyesyes')
    make prisma-deploy
    ```

5.  **Run Locally**
    ```bash
    # In root directory
    make dev
    ```

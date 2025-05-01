# Introduction

**Accept stablecoin payments on Solana, Base, SUI, TRON, Polygon, Arbitrum, Optimism and more with ease—built for creators, indie hackers, and small businesses.**

**Merkle Pay** is a non-custodial web platform enabling users to quickly set up payment pages for receiving stablecoins like USDT and USDC directly to their own wallets on **multiple blockchains**.

Leveraging native blockchain payment standards (like Solana Pay and EIP-681), it offers fast transactions, extremely low network fees (on supported chains), and a smooth user experience.

**Merkle Pay** is fully open-source under the [MIT license](LICENSE).

## Supported Blockchains & Status

Merkle Pay aims to provide a seamless payment experience across high-throughput, low-fee networks:

- ✅ **Solana** (Live & Fully Supported)
  - Native SOL
  - USDC
  - USDT
- ⏳ **Base** (Next Focus - In Progress)
  - EVM integration using EIP-681 is actively being developed.
- ⏳ **Polygon PoS** (Planned)
- ⏳ **Arbitrum One** (Planned)
- ⏳ **Optimism** (Planned)
- ◻️ **Sui** (Future Consideration)
- ◻️ **TRON** (Future Consideration)

## Supported Wallets & Interaction Methods

Wallet compatibility ensures a smooth payment experience for your customers.

**Solana:**

- ✅ **Phantom**: Supports all interaction methods:
  - QR Code Scanning (via Solana Pay Protocol)
  - Desktop Browser Extension Invocation
  - Mobile Deeplinking / Universal Links
- ✅ **Solflare**: Supports all interaction methods:
  - QR Code Scanning (via Solana Pay Protocol)
  - Desktop Browser Extension Invocation
  - Mobile Deeplinking / Universal Links
- **Other Solana Wallets**: Wallets implementing the Solana Pay Protocol _**should**_ be compatible with QR code scanning. Deeplinking and extension support may vary.

**EVM (Base, Polygon, Arbitrum, Optimism - _Coming Soon_):**

- Target wallets include **MetaMask**, **Rabby**, **Phantom (EVM)**, **Coinbase Wallet**, and others supporting the **EIP-681** payment request standard via QR code scanning or link handling.

## Features

- **Multi-Chain Ready**: Fully functional on Solana; EVM support (Base first, then others) in active development.
- **Instant Setup**: Enter your wallet address(es) and business name—get a payment page ready in minutes.
- **Non-Custodial**: Payments go directly from the payer's wallet to your specified wallet address. Merkle Pay never holds your funds.
- **Comprehensive Solana Payments**:
  - Scan QR Code (Solana Pay Protocol) via Phantom and Solflare
  - Phantom wallet chrome extension connect and send transaction
  - Phantom app deeplink connect and send transaction
- **EIP-681 Standard for EVM**: Generates standard `ethereum:` payment URIs/QR codes for EVM chains (Base, Polygon, etc.) compatible with major wallets.
- **Robust Off-Chain Tracking**: Links merchant `orderId`s to confirmed blockchain transactions (`txHash`) via backend monitoring and stores the relationship securely in your PostgreSQL database.
- **Unique Payment Disambiguation**: Uses amount randomization (the "cents trick") for EVM payments and leverages Solana Pay's reference mechanism to reliably distinguish between potentially simultaneous payments, ensuring accurate mapping in the database.
- **Stablecoin Focus**: Designed primarily for USDT, USDC, and native chain assets (like SOL) on supported chains.
- **Open-Source & Self-Hostable**: Deploy using Docker or manually deploy to platforms like Vercel.
- **Basic UI**: Utilizes Arco Design for a clean, functional interface. (Focus is currently on functionality, UI contributions welcome!)

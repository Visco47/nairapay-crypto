# NairaSwap - Crypto Payment Platform

## Overview

NairaSwap is a crypto-powered payment platform that allows users to trade stable coins for naira and purchase services like airtime, data, Netflix, and cable TV subscriptions.

## Features

- Stable coin to naira conversion
- Purchase airtime
- Buy data plans
- Subscribe to Netflix
- Pay for cable TV subscriptions

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy .env.example to .env and configure
4. Run development server: `npm run dev`

## Architecture

- Frontend: React + Vite
- Backend: Express.js
- Database: SQLite
- Blockchain Integration: Ethers.js

## Environment Variables

- `VITE_API_URL`: Backend API endpoint
- `VITE_STABLE_COIN_CONTRACT`: Stable coin smart contract address
- `VITE_BLOCKCHAIN_NETWORK`: Blockchain network identifier

## Deployment

Configured to run on `0.0.0.0:8080` for k8s HTTPRoute access.

## Security

- Secure host configuration
- SQLite for transaction tracking
- CORS enabled
- Environment-based configuration
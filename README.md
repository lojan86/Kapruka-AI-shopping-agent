# Kapruka AI Shopping Agent

An intelligent AI-powered shopping assistant built with Next.js and OpenRouter, designed to provide personalized product recommendations and a seamless shopping experience.

## Overview

Kapruka AI Shopping Agent is a modern web application that combines conversational AI with e-commerce functionality. Users can chat with an intelligent assistant to discover products, receive recommendations, add items to their cart, and proceed to checkout—all within an intuitive interface.

## Features

- **AI-Powered Chat**: Conversational shopping assistant powered by OpenRouter
- **Intelligent Product Recommendations**: Smart product suggestions based on user queries
- **Product Catalog**: Browse and search through a curated product database
- **Shopping Cart**: Manage items with real-time cart updates
- **Delivery Estimation**: Get estimated delivery times for products
- **Checkout System**: Complete purchase process with customer details
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Multi-Language Support**: Support for English (en) and Sinhala (si)

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **UI Styling**: Tailwind CSS + Radix UI
- **AI Integration**: OpenRouter API
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/              # Chat API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                # React components
│   ├── CartDrawer.tsx         # Shopping cart drawer
│   ├── ChatMessage.tsx        # Individual chat message
│   ├── ChatWindow.tsx         # Main chat interface
│   ├── DeliveryEstimator.tsx  # Delivery time estimator
│   ├── ProductCard.tsx        # Product card display
│   ├── ProductCarousel.tsx    # Product carousel
│   └── TypingIndicator.tsx    # Typing animation
├── lib/
│   ├── types.ts               # TypeScript type definitions
│   ├── agent/                 # AI agent logic
│   │   └── products.ts        # Product management
│   ├── mcp/                   # MCP client setup
│   ├── rag/                   # RAG (Retrieval-Augmented Generation)
│   │   ├── embeddings.ts
│   │   ├── knowledge_base.json
│   │   └── retriever.ts
│   └── store/                 # State management
│       └── useCartStore.ts    # Cart Zustand store
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- OpenRouter API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lojan86/Kapruka-AI-shopping-agent.git
   cd Kapruka-AI-shopping-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run typecheck` - Run TypeScript type checking

## Contact & Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Built with ❤️ for better shopping experiences**

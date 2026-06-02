# 🌱 mySystemDesign — LLD & Roadmap Edition

> The ultimate, beautifully designed tracker to master Low-Level Design (LLD) and system architecture. Built with modern Next.js and Tailwind CSS.

<div align="center">

### 🔗 [Live Demo → mysystemdesign.vercel.app](https://mysystemdesign.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Storage](https://img.shields.io/badge/Storage-Local_Persistence-3ddc84?style=for-the-badge)

</div>

---

## 🗺️ What's Inside

This project is a heavily optimized, highly responsive **Next.js** application designed to help you track your progress through the complex world of System Design.

| Feature | What you get |
|---|---|
| 🗺️ **Learning Roadmap** | A structured, phase-by-phase learning path covering everything from basic fundamentals to advanced architecture. |
| ⚙️ **LLD Concepts** | An interactive table of Low-Level Design and Object-Oriented programming problems categorized by difficulty. |
| 📊 **Live Progress Bar** | Real-time tracking of your progress across all practice problems. |
| 💾 **Local Persistence** | Your state (`Not Started`, `Active`, `Done`) is saved instantly to your browser's `localStorage`. No database required! |
| 🎨 **Premium UI** | Custom dark mode aesthetics, smooth Tailwind micro-animations, and perfect typography (`Inter` & `Outfit`). |

---

## 🚀 Quick Start (Local Development)

Since this is built on Next.js, running it locally is incredibly fast and simple.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npx next dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Low-Level Design (LLD) Topics Tracked

The LLD Concepts tab tracks your mastery of these core structural problems, complete with curated links and guides.

### 🌱 Beginner LLD
| Problem | Key Concepts |
|---|---|
| **Tic-Tac-Toe Game** | Board NxN, players, win detection, draw, extensible design |
| **Logging System** | Singleton logger, log levels, file appender |
| **Calculator** | Strategy pattern, expression evaluation |
| **LRU Cache** | HashMap + DLL, O(1) get/put, capacity eviction |
| **Snake & Ladder** | Board, dice, players, snakes/ladders map, turn management |

### 🚀 Intermediate LLD
| Problem | Key Concepts |
|---|---|
| **Parking Lot** | Singleton, Strategy (pricing), vehicle types, tickets |
| **Elevator System** | SCAN algorithm, State machine, multi-elevator coordination |
| **ATM Machine** | State pattern, authentication, cash dispensing |
| **Vending Machine** | State machine, inventory, change calculation |
| **Splitwise** | Group expenses, debt simplification with greedy algorithm |
| **BookMyShow** | Theatre hierarchy, concurrent seat locking, optimistic locking |

### 🧠 Advanced LLD
| Problem | Key Concepts |
|---|---|
| **Chess Game** | Polymorphic pieces, move validation, game state machine |
| **Thread-Safe LRU Cache** | ReentrantReadWriteLock, ConcurrentHashMap, sharded locks |
| **Pub-Sub Event Bus** | Observer pattern, topic registry, async dispatch, DLQ |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using native `@theme` CSS variables)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: React `useState` & `useEffect` synchronized with browser `localStorage`.
- **Fonts**: Next.js optimized Google Fonts (`Inter` for sans, `Outfit` for display).

---

## 🚢 Deployment

This project is perfectly configured to be deployed on **Vercel**. 

*Make sure that when deploying, you set your Vercel project's **Root Directory** to `lldsheet` so Vercel knows where to find the Next.js configuration!*

# 🌱 mySystemDesign: Beginner to Advanced Architecture Tracker

> A modern, comprehensive, and interactive curriculum for mastering Software Architecture, High-Level Design (HLD), Low-Level Design (LLD), and Design Patterns. Built from the ground up with Next.js 15, Tailwind CSS, and TypeScript.

<div align="center">

### 🔗 [Live Application → mysystemdesign.vercel.app](https://mysystemdesign.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Storage](https://img.shields.io/badge/Storage-Local_Persistence-3ddc84?style=for-the-badge)

</div>

---

## 📖 Overview

System design interviews are notoriously difficult to prepare for due to the sheer volume of unstructured information scattered across the internet. **mySystemDesign** solves this by offering a heavily opinionated, highly structured curriculum that tracks your progress completely locally in your browser.

Instead of getting lost in endless tutorials, follow our structured phases, check off topics as you learn them, and review real-world interview questions.

---

## 🚀 Key Features

* **Dynamic Progress Tracking**: Automatically tracks your progress across all modules using dynamic statistic pills (Done, Active, Pending) and a persistent global progress bar.
* **Persistent State**: Zero-dependency local persistence. Your progress (`sdt-p`) is saved securely in your browser's `localStorage`.
* **Custom Resource Links**: Add your own custom resource links directly to any LLD, HLD, Patterns, or Practice topic using the interactive `+ Add` modal. Your custom links are saved permanently to `localStorage` (`sdt-l`).
* **SEO Optimized**: Comprehensive OpenGraph tags, Twitter cards, and semantic HTML to ensure excellent search rankings.
* **UX/UI**: Features a sleek dark mode, real-time search filtering, dynamic header statistic tracking, and micro-interactions.
* **Data-Driven Architecture**: Cleanly extracts architectural concepts into scalable TypeScript data files for easy expansion.

---

## 🛠️ The Curriculum Architecture

This project organizes your learning journey into seven distinct, highly-focused modules.

### 1. 🗺️ The Learning Roadmap
A step-by-step path ensuring you don't jump into advanced distributed systems before understanding core networking fundamentals.
* **Phase 1: Foundations** (Networking, OS concepts, Databases)
* **Phase 2: Core Architecture** (Load balancing, Caching, Sharding)
* **Phase 3: Advanced Systems** (Event sourcing, CRDTs, Consensus algorithms)

### 2. ⚙️ Low-Level Design (LLD) & OOP
Focuses on writing clean, maintainable, and scalable code using Object-Oriented principles.
* **Core Systems:** Design a Parking Lot, Elevator System, Vending Machine, and ATM.
* **Games:** Tic-Tac-Toe, Snake & Ladder, Chess.
* **Complex Applications:** Splitwise (debt simplification algorithms), BookMyShow (concurrency and locking).

### 3. 🏗️ High-Level Design (HLD)
Focuses on building large-scale, distributed fault-tolerant systems.
* **Scalability Fundamentals:** Vertical vs. Horizontal scaling, CAP Theorem, PACELC.
* **Data Management:** Database replication, consistent hashing, database sharding.
* **Communication:** REST vs gRPC vs GraphQL, message queues (Kafka, RabbitMQ), and Pub/Sub.

### 4. 🧩 Software Design Patterns
A curated list of the classic Gang of Four (GoF) patterns with modern applications.
* **Creational:** Singleton, Factory, Builder, Prototype.
* **Structural:** Adapter, Decorator, Facade, Proxy.
* **Behavioral:** Strategy, Observer, Command, State.

### 5. 🏋️ Applied Practice Problems
Test your knowledge by designing clones of massively scalable real-world products.
* **Social Media:** Twitter (news feed generation), Instagram (photo storage).
* **Communication:** WhatsApp (real-time chat, end-to-end encryption).
* **Utilities:** URL Shortener (TinyURL), Pastebin, Rate Limiter.
* **Streaming:** Netflix, YouTube (CDN distribution, video transcoding).

### 6. 📚 Curated Resource Library
We’ve sifted through the noise to bring you the highest quality learning materials.
* **Books:** Designing Data-Intensive Applications (DDIA), Clean Architecture.
* **System Design Primers:** The famous GitHub repositories and standard community resources.
* **Video Content:** Hand-picked YouTube channels dedicated to whiteboarding and architecture deep-dives.

### 7. ❓ Real Interview Questions
A collection of high-frequency questions asked at top-tier tech companies.
* Includes dynamic difficulty ratings.
* Features a toggleable "Hint/Approach" system to help you get unstuck without giving away the entire solution immediately.

---

## 💻 Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Running Locally

1. **Clone & Install Dependencies:**
   ```bash
   cd lldsheet
   npm install
   ```

2. **Boot the Development Server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. Your progress will be saved automatically as you interact with the UI.

---
*Created with Next.js, Tailwind CSS, and local persistence.*

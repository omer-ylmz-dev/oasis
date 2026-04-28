# OASIS | Modern Construction & Real Estate Showcase

**OASIS** is a fictional construction and real estate company. This project is its high-performance and scalable corporate portfolio application. Developed with modern web standards like Next.js 16 and React 19, it aims to elevate the company's digital presence. To reach an international audience, the application provides full support for **4 languages**: Turkish, Azerbaijani, English, and Russian.

---

## 🚀 Architecture & Technical Decisions

This project is not just a UI exercise. It is built on an engineering strategy:

### 1. Data-Driven & Static-First Approach

The project follows the Data-Driven UI principle for content management. All projects, services, and news are managed from a central data layer.

> **Why?** To keep database costs low, maximize SEO scores, and achieve very fast page load times (TTFB).

### 2. Hybrid Rendering Strategy

The application combines different rendering methods depending on the type of content:

- **SSR (Server-Side Rendering):** Used for project listings, filtering functions, and dynamic slug pages — for SEO and up-to-date content.
- **Static Rendering:** Used for fixed pages like About, Contact, and Home — for zero runtime overhead.

### 3. Feature-Based Folder Structure

The codebase is organized with a Feature-based architecture to prevent complexity and make maintenance easier. Each feature (`projects`, `news`, `contact`, etc.) keeps its own components, hooks, and services inside its own folder.

### 4. CMS-Ready Architecture

The data layer is completely separated from the UI. The current structure is designed to support a future Headless CMS integration (Strapi, Contentful, etc.) without requiring major changes to the codebase.

### 5. Type-Safe Development with TypeScript

The entire codebase is built with TypeScript to ensure reliability and maintainability. By providing static type safety across the application, TypeScript helps catch potential errors early in the development process and makes the code easier to understand. This approach, combined with a structured architecture, ensures that the project remains robust, organized, and easy to scale as new features are added.


---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Language** | TypeScript — Static type safety across the entire codebase |
| **Framework** | Next.js 16 (App Router) |
| **Library** | React 19 |
| **Styling** | SCSS (Sass) — Modular and scalable CSS management |
| **State Management** | Zustand — Lightweight and effective state management |
| **Animations** | Framer Motion — Smooth and interactive user experience |
| **Carousel** | Embla Carousel — Optimized touch-friendly sliders |
| **Localization** | next-intl — 4-language support infrastructure (TR, AZ, EN, RU) |
| **Optimization** | Babel React Compiler — Performance-focused automatic memoization |

---

## 🌐 Localization

The application has a full multilingual structure built on the `next-intl` library:

| Language | Code |
|---|---|
| Turkish | `tr` |
| Azerbaijani | `az` |
| English | `en` |
| Russian | `ru` |

All translation files are managed as JSON files inside the `src/messages/` folder. The language routing logic is configured centrally under `src/i18n/`.

---

## 🎨 UI Architecture

- **Responsive Design:** Built with a mobile-first approach, fully compatible with all screen sizes.
- **Reusable Components:** Every component is designed as generic and reusable across different pages and contexts.
- **Modular SCSS:** Each component is isolated with its own `.module.scss` file — no global style leakage.

---

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router (Pages & API Routes)
├── config/           # Site-wide configuration files (SEO, navigation, etc.)
├── constants/        # Static data (routes, socials)
├── data/             # Local static data files (projects, news)
├── features/         # Feature-based modules (projects, news, contact, etc.)
│                     #   Each module contains its own components/, services/, types/
├── shared/           # Shared UI components, hooks, types & utils
├── i18n/             # Localization routing & request config
├── lib/              # Utility helpers & API response handlers
├── messages/         # Translation files (az, en, ru, tr)
├── store/            # Zustand state definitions
└── styles/           # Global styles & Sass variables
```

---

## ⚙️ Getting Started

To run the project in your local environment:

**Install dependencies:**
```bash
npm install
```

**Start the development server:**
```bash
npm run dev
```

**Build and optimize:**
```bash
npm run build
npm run start
```

---

## 💡 Developer Note

This application is a fictional brand project with no real commercial activity. However, the architecture used is designed to be scalable enough to handle real-world scenarios with thousands of projects and high-traffic corporate needs.

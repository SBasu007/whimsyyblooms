# Whimsyy Blooms 🌸

A beautiful and elegant flower shop website built with Next.js 16, featuring stunning lavender-themed design and smooth animations.

## Features

- 🎨 Beautiful lavender-based color palette
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 for optimal performance
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🧩 Modular component architecture

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Fonts:** Playfair Display & Raleway

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
whimsyyblooms/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Collections.tsx
│   │   ├── FlowerCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ui/
│   ├── hooks/
│   │   └── use-toast.ts
│   └── lib/
│       └── utils.ts
├── public/
├── components.json
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Components

- **Navbar:** Fixed navigation bar with mobile menu support
- **Hero:** Eye-catching hero section with gradient animations
- **Collections:** Showcase of flower categories with hover effects
- **About:** Information section with image grid and features
- **Footer:** Contact information and social links
- **FlowerCard:** Reusable card component for displaying flowers

## Customization

The project uses CSS variables for theming. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: 280 82% 78%;
  --primary-dark: 280 60% 55%;
  --primary-darker: 280 50% 40%;
  /* ... more variables */
}
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is open source and available under the MIT License.


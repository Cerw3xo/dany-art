# Dany Art Store

A modern e-commerce website built for a clothing / art brand using Next.js and TypeScript.

This project was created as a real-world frontend web project with dynamic product pages, CMS-managed content, cart functionality, contact flow, and email-based order handling. The goal was to build a responsive and production-style application using a modern React stack.

## Live Demo

[View live site](https://dany-art.vercel.app/)

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- SCSS
- Strapi CMS
- Zustand
- Resend
- Framer Motion
- Swiper
- Yet Another React Lightbox
- Vercel

## Features

- Responsive storefront for desktop and mobile
- Dynamic product pages
- Product data fetched from Strapi CMS
- Cart state management with Zustand
- Checkout flow
- Contact form with email handling
- Order email notifications for customer and store owner
- Additional content pages such as terms, returns, personal and portfolio
- Modern UI interactions and animations

## Project Overview

The project was built for a real brand and focuses on presenting products in a clean and modern way while keeping content management flexible through a headless CMS.

Products are managed in Strapi and fetched into the frontend application. The site includes product listing and detail pages, cart functionality, checkout-related flow, and server-side API routes for sending emails through Resend.

## My Role

I built the frontend application and worked with a modern component-based architecture using Next.js and TypeScript.

Main areas I focused on:

- building responsive UI components
- creating dynamic product pages
- integrating CMS content into the frontend
- managing cart state
- structuring the project in a scalable way
- deploying the application online

## Folder Structure

```bash
src/
  app/           # App Router pages and API routes
  components/    # Reusable UI components
  data/          # Static / local data
  hooks/         # Custom React hooks
  lib/           # Helpers and CMS utilities
  store/         # Zustand state management
  styles/        # Global and shared styles
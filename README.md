# Apex Human — Website

Landing page for Apex Human Cohort 01 waitlist. Apex Human is a hands-on program that teaches executives, founders, and creators to direct AI as a strategic tool — building products, systems, and workflows without writing code.

## Overview

The site is a focused single-page experience built around one conversion goal: capturing waitlist signups for the first cohort. Email submissions go directly into a Supabase leads database.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- Supabase (lead capture)
- TypeScript

## Setup

```bash
npm install
cp .env.example .env.local
# Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local
npm run dev
```

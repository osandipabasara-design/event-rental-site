# Event Rental Landing Page

A simple one-page React + TypeScript landing page for event rental services in Sri Lanka.

## What this site includes

- Single-page landing layout
- Hero section with WhatsApp CTA
- Categories section for chairs, tables, canopies and catering equipment
- Simple pricing highlight
- Gallery section ready for real event photos
- Contact section with WhatsApp, phone and location

## Local development

1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Open the local URL shown in the terminal.

## Customize the page

- Replace `src/assets/hero.png` with your own hero image.
- Update the WhatsApp phone number in `src/App.tsx` on the `whatsappNumber` constant.
- Replace gallery photo placeholders by adding image imports and updating `galleryPhotos`.
- Change phone number and location text in the Contact section.

## Git setup

This folder is currently not a git repo. To initialize and commit locally:

```bash
cd /Users/osandirandeniya/Desktop/event-rental-site
git init
git add .
git commit -m "Initial event rental landing page"
```

To publish to GitHub, create a repository on GitHub and then add it as a remote:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

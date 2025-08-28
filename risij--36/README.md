# Risij.uk Blog - Static HTML & CSS Project ("Template 2025" Dark Theme)

This project is a modern, responsive, and minimalist static blog for Risij.uk, built using only HTML5 and CSS3. It is designed to be extremely lightweight, fast-loading, SEO-friendly, and simple to maintain.

## Purpose

The blog acts as a content hub for the main website, [Risij.uk](https://risij.uk), which aggregates UK supermarket offers. The blog's purpose is to publish articles, tips, and guides on saving money on groceries, thereby driving organic search traffic and building brand authority.

## Key Features

- **Pure HTML & CSS:** Contains no JavaScript, frameworks, or external dependencies (other than Google Fonts), ensuring optimal performance and simplicity.
- **Responsive Design:** A mobile-first layout built with CSS Grid and Flexbox that provides an excellent reading experience on all devices.
- **SEO Optimized:** Every page includes unique meta titles and descriptions. The site uses semantic HTML (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`) and maintains a logical heading structure for search engine crawlers.
- **"Template 2025" Dark Theme:** A clean, content-focused design with a modern dark theme, a vibrant green accent color, and professional typography ('Inter' font).
- **Modular & Consistent:** All pages share a universal header and footer for easy navigation. The article pages follow a consistent two-column template.

## File Structure

The project is organized with a flat file structure for simplicity.

```
/
├── index.html                  # Homepage showcasing all articles
├── offers.html                 # A directory page linking to all main site offers
├── about.html                  # Page explaining the mission of Risij.uk
├── contact.html                # Contact information page
│
├── aldi-offers-next-week.html  # Article page for Aldi
├── asda-offers-this-week.html  # Article page for ASDA
├── co-op-offers-this-week.html # Article page for Co-op
├── costco-uk-offers.html       # Article page for Costco
├── farmfoods-offers-this-week.html # Article page for Farmfoods
├── iceland-offers-this-week.html # Article page for Iceland
├── lidl-offers-this-week.html  # Article page for Lidl
├── morrisons-offers-this-week.html # Article page for Morrisons
├── sainsburys-offer-this-week.html # Article page for Sainsbury's
├── spar-offers-next-week.html  # Article page for SPAR
├── tesco-offers-this-week.html # Article page for Tesco
├── waitrose-offers-this-week.html # Article page for Waitrose
│
├── styles.css                  # Single stylesheet for the entire site
└── README.md                   # This documentation file
```

## How to Use

1.  **Clone or Download:** Get the project files.
2.  **Open in Browser:** Open any `.html` file directly in a web browser to view the live site.
3.  **Customize:**
    *   Modify content by editing the HTML files directly.
    *   Adjust the visual appearance by editing the variables and styles in `styles.css`.
    *   To add a new article, duplicate an existing article's `.html` file, update its content, and add a link to it on the `index.html` page.

## Design Philosophy

- **Layout:** The primary page structure (main content and sidebar) is managed by CSS Grid for robust alignment. Internal components like the header use Flexbox for flexible item positioning.
- **Typography:** The 'Inter' font is loaded from Google Fonts to provide a clean, highly readable, and modern aesthetic.
- **Color Scheme:** A professional dark theme using a charcoal background, light grey text for readability, and a vibrant green accent for links, buttons, and highlights to ensure key actions are clear and accessible.
# Risij.uk Blog - 2025 Clean & Minimalist Edition

## Project Overview

This repository contains the source code for the official blog of [Risij.uk](https://risij.uk). This is the 2025 "Clean & Minimalist Edition," a complete redesign focused on simplicity, readability, and a user-friendly experience. Built with pure HTML5 and CSS3, the blog provides UK shoppers with clear, scannable guides on how to save money on their grocery bills.

The project emphasizes clean code, semantic HTML, and a minimalist design that puts the content first. By avoiding JavaScript and external frameworks, the site ensures maximum performance, security, and maintainability.

## Features

-   **Fully Static:** Requires no server-side processing. Can be hosted on any static hosting provider (e.g., GitHub Pages, Netlify, Vercel).
-   **Clean & Minimalist Theme:** A modern and simple UI that uses generous whitespace, a clean sans-serif font, and a limited color palette to create a calm, easy-to-navigate experience.
-   **Responsive Design:** A mobile-first approach ensures a seamless and accessible experience on all devices, from desktops to smartphones.
-   **SEO Optimized:** Best practices are followed, including clean HTML structure, proper heading usage, and unique meta descriptions for each page to enhance search engine visibility.
-   **Zero Dependencies:** Built exclusively with HTML and CSS for speed and simplicity.
-   **Modern Typography:** Uses the "Open Sans" sans-serif font for its excellent readability on screens of all sizes.

## File Structure

The project is organized into a clear and intuitive file structure:

```
/
├── index.html              # The main homepage of the blog
├── offers.html             # The "All Offers" page for all supermarket categories
├── about.html              # The "About Us" page explaining the blog's mission
├── contact.html            # The contact page
│
├── aldi-offers-next-week.html  # Example article page (simple guide)
├── lidl-offers-this-week.html  # Example article page (simple guide)
├── tesco-offers-this-week.html # Example article page (simple guide)
│
├── styles.css              # Single stylesheet for all global styles
└── README.md               # This documentation file
```

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Open `index.html`:**
    Simply open the `index.html` file in your web browser to view the site locally.

## Customization

-   **Styling:** All core design tokens (colors, fonts, etc.) are defined as CSS variables in the `:root` selector at the top of `styles.css` for easy and consistent customization.
-   **Content:** To add or edit content, modify the appropriate `.html` files directly. The semantic structure makes content updates straightforward.
-   **New Articles:** To create a new article, duplicate an existing article file, rename it according to its topic, and update the content within. Ensure you link to the new article from the homepage (`index.html`) and any other relevant pages.

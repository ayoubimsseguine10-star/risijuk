# Risij.uk Static Blog - 2025 Cozy & Rustic Edition

## Project Overview

This repository contains the source code for the official blog of [Risij.uk](https://risij.uk). This is the 2025 "Cozy & Rustic Edition," a complete redesign featuring a warm, friendly, and fully responsive theme. Built with pure HTML5 and CSS3, the blog provides UK shoppers with simple, gentle guides on saving money at major supermarkets.

The project emphasizes clean code, semantic HTML, and modern CSS for a welcoming layout that prioritizes readability and a pleasant user experience. By avoiding JavaScript and external frameworks, the site ensures maximum performance, security, and maintainability.

## Features

-   **Fully Static:** Requires no server-side processing. Can be hosted on any static hosting provider (e.g., GitHub Pages, Netlify, Vercel).
-   **Cozy & Rustic Theme:** A professional yet inviting UI that uses warm colors, soft shadows, and classic typography to create a comfortable reading environment.
-   **Responsive Design:** A mobile-first approach ensures a seamless and accessible experience on all devices, from desktops to smartphones.
-   **SEO Optimized:** Best practices are followed, including clean HTML structure, proper heading usage, and unique meta descriptions for each page to enhance search engine visibility.
-   **Zero Dependencies:** Built exclusively with HTML and CSS for speed and simplicity.
-   **Classic Typography:** Uses the "Merriweather" serif font for headings and "Open Sans" for body text, creating a highly readable and timeless aesthetic.

## File Structure

The project is organized into a clear and intuitive file structure:

```
/
├── index.html              # The main homepage of the blog
├── offers.html             # A directory of all supermarket offer categories
├── about.html              # The "About Us" page detailing our mission
├── contact.html            # The "Contact Us" page
│
├── aldi-offers-next-week.html  # Example article page (friendly guide)
├── lidl-offers-this-week.html  # Example article page (friendly guide)
├── tesco-offers-this-week.html # Example article page (friendly guide)
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

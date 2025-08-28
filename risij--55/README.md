# Risij.uk Static Blog - 2025 Dark Edition

## Project Overview

This repository contains the source code for the official blog of [Risij.uk](https://risij.uk). This version is a complete 2025 redesign, featuring a sleek, modern, and fully responsive "dark mode" theme. Built with pure HTML5 and CSS3, the blog provides UK shoppers with tips, guides, and insights on how to save money at major supermarkets.

The project emphasizes clean code, semantic HTML, and advanced CSS for layout and styling (Flexbox and CSS Grid), with a focus on performance and readability. No JavaScript frameworks or external libraries are used, ensuring a lightning-fast and maintainable site.

## Features

-   **Fully Static:** No server-side processing required. Can be hosted on any static hosting provider (e.g., GitHub Pages, Netlify, Vercel).
-   **Modern Dark Theme:** A professional and stylish dark mode UI that is easy on the eyes and focuses on content.
-   **Responsive Design:** Mobile-first approach ensures a seamless experience across all devices.
-   **SEO Optimized:** Clean HTML structure, proper use of headings, and unique meta tags for each page to improve search engine visibility.
-   **Zero Dependencies:** Built with only HTML and CSS. No package management needed.
-   **Custom Typography:** Uses the "Poppins" font for a clean, modern aesthetic.

## File Structure

The project is organized into a clear and intuitive file structure:

```
/
├── index.html              # The main homepage of the blog
├── offers.html             # A page listing all supermarket offer categories
├── about.html              # The "About Us" page
├── contact.html            # The "Contact Us" page
│
├── aldi-offers-next-week.html  # Example article page
├── lidl-offers-this-week.html  # Example article page
├── tesco-offers-this-week.html # Example article page
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

-   **Styling:** All colors, fonts, and layout properties are defined as CSS variables in the `:root` selector at the top of `styles.css` for easy customization.
-   **Content:** To add or edit content, modify the corresponding `.html` files directly.
-   **New Articles:** To create a new article, duplicate an existing article file (e.g., `aldi-offers-next-week.html`), rename it, and update its content. Remember to link to the new article from `index.html` and other relevant pages.

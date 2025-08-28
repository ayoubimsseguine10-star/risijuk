# Risij.uk Static Blog

## Project Overview

This repository contains the source code for the official blog of [Risij.uk](https://risij.uk). It is a simple, fast, and fully responsive static website built with pure HTML5 and CSS3. The blog is designed to provide UK shoppers with tips, guides, and insights on how to save money at major supermarkets.

The project follows modern web standards, emphasizing clean code, semantic HTML, and advanced CSS for layout and styling, including Flexbox and CSS Grid. No JavaScript frameworks or external libraries are used, ensuring maximum performance and simplicity.

## Features

-   **Fully Static:** No server-side processing or databases required. Can be hosted on any simple static hosting provider (like GitHub Pages, Netlify, Vercel).
-   **Responsive Design:** Mobile-first approach ensures a seamless experience on all devices, from smartphones to desktops.
-   **SEO Optimized:** Clean HTML structure, proper use of headings, and unique meta tags for each page to improve search engine visibility.
-   **Clean & Modern UI:** A professional and minimalist design that focuses on content readability.
-   **Zero Dependencies:** Built with only HTML and CSS. No package management needed.

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

-   **Styling:** All colors, fonts, and layout properties can be modified in the `styles.css` file. Variables are defined at the top of the file in the `:root` selector for easy changes to the color scheme.
-   **Content:** To add or edit content, modify the corresponding `.html` files directly.
-   **New Articles:** To create a new article, you can duplicate an existing article file (e.g., `aldi-offers-next-week.html`), rename it, and update its content. Remember to link to the new article from the `index.html` homepage and relevant sidebars.

# Static Supermarket Offers Blog - Digital Dashboard 2025

This is a simple, static blog website built with pure HTML and CSS. It is designed to be a companion blog for a main website that lists supermarket offers, based on the example of `risij.uk`.

This version features a clean, tech-inspired "Digital Dashboard" theme for 2025. The design is modern and data-driven, prioritizing clarity and efficiency with a blue and dark grey color palette, sharp typography, and a grid-based layout that mimics a software interface. The project is fully responsive, SEO-friendly, and contains no JavaScript or external frameworks, ensuring it is lightweight and fast-loading.

## Features

- **Digital Dashboard Theme:** A clean, modern design with a light background, dark text, and a vibrant blue accent for a professional, tech-inspired feel.
- **Modern Typography:** Uses Montserrat for headings and Open Sans for body text for a sharp, contemporary look that is highly readable on screens.
- **Responsive Layout:** Uses CSS Grid and Flexbox for optimal viewing on all devices, from desktops to mobile phones.
- **SEO Optimized:** Semantic HTML, proper meta tags, and a clear heading structure.
- **Zero Dependencies:** Built with only HTML5 and CSS3. No JavaScript, frameworks, or libraries.
- **Easy to Customize:** Uses CSS variables for simple theme adjustments (colors, fonts).

## File Structure

The project is organized into the following files:

```
/
├── index.html              # The main homepage (Dashboard)
├── offers.html             # Sub-page for an overview of all savings modules
├── about.html              # Sub-page explaining the system specifications
├── contact.html            # Sub-page for user data input
├── aldi-offers-next-week.html  # ... and 11 other article pages (modules)
├── styles.css              # All CSS styles for the website
└── README.md               # This documentation file
```

## How to Use

1.  **Clone or Download:** Get the files onto your local machine.
2.  **Open `index.html`:** Open the `index.html` file in your web browser to view the homepage.
3.  **Customize:**
    *   **Content:** Edit the HTML files (`.html`) to change the text, links, and article content.
    *   **Styling:** Open `styles.css`. At the top of the file, you can easily change the site's color scheme and font by modifying the CSS variables within the `:root` selector.
    *   **New Articles:** To add a new article (module), simply duplicate one of the existing article HTML files (e.g., `aldi-offers-next-week.html`), rename it, and update its content. Then, link to it from the `index.html` homepage and other relevant pages.

## Deployment

Since this is a static website, you can host it on any static web hosting provider, such as:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Cloudflare Pages

Simply upload all the files to your hosting provider of choice.
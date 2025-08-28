# Risij.uk Blog - Static HTML & CSS Project

This project is a simple, modern, and responsive static blog website for Risij.uk, built using only HTML5 and CSS3. It is designed to be lightweight, fast, SEO-friendly, and easy to maintain.

## Purpose

The blog serves as a content marketing platform for the main website, [Risij.uk](https://risij.uk), which is a UK supermarket offers aggregator. The blog provides articles, tips, and guides related to saving money on groceries, helping to attract organic traffic and build a community around the brand.

## Features

- **Pure HTML & CSS:** No JavaScript, frameworks, or external dependencies, ensuring maximum performance and simplicity.
- **Responsive Design:** A mobile-first layout that adapts to all screen sizes, from small phones to large desktops, using CSS Grid and Flexbox.
- **SEO Optimized:** Each page has unique meta titles and descriptions. The structure uses semantic HTML (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`) and follows a logical heading hierarchy.
- **Clean & Modern UI:** A minimalist design with a professional color scheme, readable typography, and ample white space.
- **Consistent Structure:** All pages share a common header and footer for consistent navigation. Article and sub-pages use a two-column layout with a main content area and a sidebar.

## File Structure

```
/
├── index.html                  # Homepage with article previews
├── offers.html                 # Sub-page with links to main site offers
├── about.html                  # Sub-page with information about Risij.uk
├── contact.html                # Sub-page with contact information
├── aldi-offers-next-week.html  # Example article page
├── lidl-offers-this-week.html  # Example article page
├── tesco-offers-this-week.html # Example article page
├── styles.css                  # Single stylesheet for the entire site
└── README.md                   # This documentation file
```

## How to Use

1.  **Clone or Download:** Get the files onto your local machine.
2.  **Open in Browser:** Simply open any of the `.html` files in a web browser to view the site.
3.  **Customize:**
    *   Edit the content directly in the HTML files.
    *   Change the colors, fonts, and layout by modifying `styles.css`.
    *   To add a new article, create a new `.html` file by copying an existing article page and updating its content. Remember to link to it from `index.html` and other relevant pages.

## Design Choices

- **Layout:** CSS Grid is used for the main page structure (`main-area` and `sidebar`), while Flexbox is used for components like the header navigation.
- **Typography:** A system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`) is used for fast rendering and a native feel across devices.
- **Color Scheme:** A simple and professional palette with a primary blue accent color for links and calls-to-action.

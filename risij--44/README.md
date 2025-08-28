# Static Supermarket Offers Blog

This is a simple, static blog website built with pure HTML and CSS. It is designed to be a companion blog for a main website that lists supermarket offers, based on the example of `risij.uk`.

The project is fully responsive, SEO-friendly, and contains no JavaScript or external frameworks, ensuring it is lightweight and fast-loading.

## Features

- **Modern & Clean Design:** A professional look and feel suitable for a blog.
- **Responsive Layout:** Uses CSS Grid and Flexbox for optimal viewing on all devices, from desktops to mobile phones.
- **SEO Optimized:** Semantic HTML, proper meta tags, and a clear heading structure.
- **Zero Dependencies:** Built with only HTML5 and CSS3. No JavaScript, frameworks, or libraries.
- **Easy to Customize:** Uses CSS variables for simple theme adjustments (colors, fonts).

## File Structure

The project is organized into the following files:

```
/
├── index.html              # The main homepage
├── offers.html             # Sub-page for an overview of offers
├── about.html              # Sub-page with information about the blog
├── contact.html            # Sub-page with a contact form
├── aldi-offers-next-week.html  # Example article page
├── lidl-offers-this-week.html  # Example article page
├── tesco-offers-this-week.html # Example article page
├── asda-offers-this-week.html  # Example article page
├── styles.css              # All CSS styles for the website
└── README.md               # This documentation file
```

## How to Use

1.  **Clone or Download:** Get the files onto your local machine.
2.  **Open `index.html`:** Open the `index.html` file in your web browser to view the homepage.
3.  **Customize:**
    *   **Content:** Edit the HTML files (`.html`) to change the text, links, and article content.
    *   **Styling:** Open `styles.css`. At the top of the file, you can easily change the site's color scheme and font by modifying the CSS variables within the `:root` selector.
    *   **New Articles:** To add a new article, simply duplicate one of the existing article HTML files (e.g., `aldi-offers-next-week.html`), rename it, and update its content. Then, link to it from the `index.html` homepage and other relevant pages.

## Deployment

Since this is a static website, you can host it on any static web hosting provider, such as:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Cloudflare Pages

Simply upload all the files to your hosting provider of choice.

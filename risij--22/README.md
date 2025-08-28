# Risij.uk Static Blog

This project is a simple, multi-page static blog created for Risij.uk using only HTML and CSS. It is designed to be lightweight, fast, fully responsive, and SEO-friendly.

## Project Purpose

The blog serves as a content marketing platform for the main Risij.uk website, which is a service for finding and comparing weekly supermarket offers in the UK. The blog articles provide tips, guides, and strategies for saving money, while naturally incorporating links back to the main site to drive traffic.

## Features

- **Pure HTML & CSS:** No JavaScript, frameworks, or external dependencies.
- **Responsive Design:** Mobile-first layout using CSS Grid and Flexbox for compatibility across all devices.
- **SEO Optimized:** Utilizes semantic HTML, unique meta titles and descriptions for each page, and a clean URL structure.
- **Multi-Page Structure:** Includes a homepage, sub-pages (Offers, About, Contact), and individual pages for each blog article.
- **Consistent UI/UX:** A modern, clean design with consistent navigation, styling, and layout across all pages.
- **No Build Step:** As a static site, there is no need for a build process. Files can be served directly.

## File Structure

The project is organized into the following files:

```
/
├── index.html                  # Main homepage
├── offers.html                 # Offers overview sub-page
├── about.html                  # About sub-page
├── contact.html                # Contact sub-page
├── styles.css                  # Single CSS file for all styling
├── aldi-offers-next-week.html  # Example article page
├── asda-offers-this-week.html  # Example article page
├── ... (and all other article pages)
└── README.md                   # This documentation file
```

### HTML Files

- `index.html`: The main landing page, featuring an introduction and a grid of the latest articles.
- `offers.html`, `about.html`, `contact.html`: Static sub-pages with relevant information.
- `[article-name].html`: Each article has its own dedicated HTML file, containing the full content, a "Related Articles" sidebar, and a call-to-action.

### CSS File

- `styles.css`: Contains all the styling rules for the entire website. It includes global styles, variables, layout rules, component styles, and media queries for responsiveness.

## How to View

To view the website, you can simply open any of the `.html` files in a web browser. For the best experience (to ensure links work correctly), it's recommended to serve the files from a local web server.

### Using a simple Python server (if you have Python installed):

1. Navigate to the project's root directory in your terminal.
2. Run the command: `python -m http.server` (for Python 3) or `python -m SimpleHTTPServer` (for Python 2).
3. Open your web browser and go to `http://localhost:8000`.

### Using VS Code Live Server extension:

1. Install the "Live Server" extension in Visual Studio Code.
2. Open the project folder in VS Code.
3. Right-click on `index.html` and select "Open with Live Server".

This will launch the site in your default browser and automatically reload it when you make changes.

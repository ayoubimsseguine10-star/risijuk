# Risij.uk Static Blog - Market Intelligence Portal

This project is a multi-page static blog for Risij.uk, built using only HTML and CSS. It is designed to be lightweight, fast, fully responsive, and SEO-friendly, with a professional and authoritative tone.

## Project Purpose

The blog serves as an intelligence and analysis portal for the main Risij.uk website, a data aggregation platform for UK supermarket offers. The blog's reports provide objective analysis of retailer pricing strategies and savings tactics, linking back to the main site to drive traffic and establish authority.

## Design Philosophy (2025 "Corporate Intelligence" Template)

The current design is inspired by modern corporate reports and financial briefings. It prioritizes:

- **Professionalism and Readability:** A clean, high-contrast color scheme and a professional font pairing (Playfair Display for headings, Roboto for body text).
- **Structure and Clarity:** A focus on clear layout, grids, and sectioning to present information in an easily digestible, formal manner.
- **Performance:** No JavaScript, frameworks, or external dependencies ensures the fastest possible load times and maximum accessibility.

## Features

- **Pure HTML & CSS:** 100% static with no client-side scripting.
- **Responsive Design:** Mobile-first layout using modern CSS Grid and Flexbox.
- **SEO Optimized:** Semantic HTML, unique metadata for each page, and a clean URL structure.
- **Multi-Page Structure:** Includes a homepage, sub-pages (Offers, About, Contact), and individual pages for each intelligence report.
- **No Build Step:** As a static site, there is no need for a build process. Files can be served directly.

## File Structure

```
/
├── index.html                  # Main homepage / Intelligence dashboard
├── offers.html                 # Promotional mechanics dossier
├── about.html                  # Corporate mandate
├── contact.html                # Communication directory
├── styles.css                  # Single CSS file for all styling
├── aldi-offers-next-week.html  # Example intelligence report
├── ... (and all other report pages)
└── README.md                   # This documentation file
```

### HTML Files

- `index.html`: The main landing page, presenting the latest intelligence briefings.
- `offers.html`, `about.html`, `contact.html`: Static sub-pages with relevant corporate and project information.
- `[article-name].html`: Each analysis has its own dedicated HTML file, framed as a report or briefing.

### CSS File

- `styles.css`: Contains all the styling rules for the entire website, including the "Corporate Intelligence" design system.

## How to View

To view the website, you can simply open any of the `.html` files in a web browser. For the best experience (to ensure links work correctly), it's recommended to serve the files from a local web server.

### Using a simple Python server (if you have Python installed):

1. Navigate to the project's root directory in your terminal.
2. Run the command: `python -m http.server` (for Python 3).
3. Open your web browser and go to `http://localhost:8000`.

### Using VS Code Live Server extension:

1. Install the "Live Server" extension in Visual Studio Code.
2. Open the project folder in VS Code.
3. Right-click on `index.html` and select "Open with Live Server".

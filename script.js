LISA WEBSITE — FIRST VERSION

1. Extract LISA-website.zip.
2. In VS Code choose File > Open Folder, then select the LISA folder.
3. Double-click index.html to preview locally in your browser.
4. Open script.js and paste your REAL live BLUFF Render address between the quotes:
   const BLUFF_URL = "https://bluff-game-tkdl.onrender.com";
5. Save and refresh index.html. The Play BLUFF button now opens the live game.
6. To publish: create a separate public GitHub repository for the LISA website,
   upload index.html, style.css, script.js and assets/lisa-logo.png,
   then Settings > Pages > Deploy from branch > main / root.
   GitHub Pages serves static files; keep the BLUFF Node server on Render.

IMPORTANT: This is a working static WEBSITE. The Software section is a placeholder
until you release software. Do not upload node_modules or your BLUFF server to this repository.

/This project is for showcase/resume use only.  
This project contains both code and design materials.

- **Code**: All rights reserved. Not licensed for reuse, modification, or commercial use.
- **Designs, screenshots, wireframes, and prototypes**: Licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
  You may share them with credit, but no modifications or commercial use allowed./  

Title: Kustom Kakes

Purpose: Kustom Kakes is a static bakery website where customers can order custom cakes for any occasion. 

Preconditions: User should have interenet connectionand and any simple static web server like from (https://simplewebserver.org) preferrably. 

How to Run:
1. Download or clone the repository to a local folder.
2. Start a static web server pointed at the project folder. Example using SimpleWebServer:
   - Open SimpleWebServer, click "New Server", choose the project folder, keep defaults,   click Create.
  - Click the generated link to open the project listing in your browser title will say "Index of" , then click Lab1.html to view the site.
  - Once generated link opens and Lab1.html is clicked navigate pages by clicking on header titles.

Test Steps and Structure:
1. Home: introduction, location, optional personalized welcome via cookie (user clicks "Please click here to provide your name" → prompt (Welcome! Please enter your name:) → page updates with “Welcome, [name]! We hope you will enjoy your Kustom Kakes experience!”).
   - Survey: accessible via a randomized picker on Home. A random user is selected for the survey:  → prompt (Congratulations! You've been selected for a survey.) → page updates/redirects to survey page → Survey "collects" first name, last name, email, phone, age group, and opinion responses on several statements using dropdowns (1–5). Responses are not saved.
2. Products: list of products (id, name, description, price, quantity), sortable by selected field; "Submit" and reset selected option.
3. Contact: embedded map and contact details.
4. About Us: business owners and employees bios.


Notes:All data collection (survey, product selections) is client-side only and not transmitted to a server.
The survey "collects" personal info (name, email, phone) but does not store it — it’s only for demo UI.
Cookies are used only for local personalization (like welcome name). No analytics or tracking is implemented.
Accessibility and input validation are basic; and intended as a demo/portfolio rather than production-ready e‑commerce site.

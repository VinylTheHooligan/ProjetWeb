# Learner Directory Project (Projet Web)

## Overview

This is a school project developed for **ENI École Informatique** (ENI École Informatique). The project aims to create a responsive web application that displays information about learners in a training program, with a focus on accessibility and user experience.

## Project Objectives

- Implement a **responsive web design** that works across different screen sizes
- Ensure **accessibility standards** are met throughout the application
- Use **vanilla JavaScript** (no jQuery or other frameworks)
- Create a user-friendly interface for managing learner information

## Features

### Iteration 1: Core Functionality

#### Task 1.1 - Home Page
- Display learner information in a list or card format
- Integrate the ENI logo
- Navigation menu with 4 links: "Home", "Preferences", "Map", "Information"
- Default display format set to "List"

#### Task 1.2 - Information Page
- Dedicated page with information about the project
- "Useful Links" section with resources for learning web development

#### Task 1.3 - Preferences Page
- Theme selection: Light or Dark mode (Light by default)
- Display format selection: List or Cards (List by default)
- Settings are saved to LocalStorage
- Settings are restored on page reload

#### Task 1.4 - JSON Data File
Learner data stored in `promo.json` with the following information:
- Unique identifier
- First name and last name
- Home city
- Anecdotes
- Avatar image (optional)
- Geographic coordinates (optional) - Latitude & Longitude

#### Task 1.5 - Dynamic Learner List
- Fetch learner data from `promo.json` using JavaScript Fetch API
- Display learners in list format on the home page

#### Task 1.6 - Display Format Toggle
- Read preferences from LocalStorage
- Toggle between list and card display formats
- Remember user's last preference

#### Task 1.7 - Theme Persistence
- Read theme preferences from LocalStorage
- Apply light or dark theme across all pages dynamically

### Iteration 2: Map Integration

#### Task 2.1 - Map Page
- Display an interactive map showing learner locations
- Show markers for all learners with geographic coordinates
- Implements **Leaflet** library (open-source mapping library)

### Iteration 3: Advanced Features

#### Task 3.1 - Learner Detail Modal
- Display learner details in a modal popup
- Show avatar (or default image if not available)
- Display name, first name, city, and anecdotes

#### Task 3.2 - Enhanced JSON Structure
- Extended JSON file with additional metadata:
  - Training program name
  - Training start date
  - Training end date
  - Training description
  - Total number of learners
  - List of learners
- Updated UI to reflect new data structure

## Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive styling with media queries
- **JavaScript (Vanilla)** - No frameworks or jQuery
- **Leaflet** - Open-source mapping library
- **LocalStorage** - Client-side data persistence
- **Fetch API** - Asynchronous data loading

## Accessibility & Testing

- Web accessibility standards implementation
- Recommended browser extensions for testing:
  - **Web Developer** (Chrome/Firefox)
  - **Lighthouse** (Chrome - built into DevTools)
- Accessibility checks using F12 Developer Tools

## Project Structure

```
ProjetWeb/
├── index.html
├── promo.json
├── README.md
├── assets/
│   ├── data/
│   ├── images/
│   │   ├── avatar/
│   │   ├── icons/
│   │   └── logo/
│   ├── scripts/
│   │   ├── main.js
│   │   ├── promoData.js
│   │   ├── themeSelector.js
│   │   └── accueil/
│   │       ├── gridInit.js
│   │       ├── modal.js
│   │       ├── studentInit.js
│   │       └── tableInit.js
│   └── styles/
│       ├── main.css
│       ├── students.css
│       └── fonts/
└── pages/
    ├── informations.html
    └── preferences.html
```

## Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser
3. Ensure `promo.json` is in the project root directory
4. Customize learner data in `promo.json` as needed

## Browser Compatibility

- Modern browsers supporting ES6 JavaScript
- Responsive design for mobile, tablet, and desktop
- Progressive enhancement approach

## Author

Student project for ENI École Informatique (William Salembien)

## License

This project is for educational purposes only.
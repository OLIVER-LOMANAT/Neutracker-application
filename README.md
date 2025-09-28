
# Nutrition Tracker App

A simple React-based nutrition tracker that allows users to log meals and track their calories, protein, carbs, and fat intake.

### Frontend (Vercel): 

   https://nutrition-meter-application.vercel.app/


### Backend API (Render): 

   https://nutrition-api-nyjf.onrender.com/nutritions

## Features

- Add meals with nutritional info (calories, protein, carbs, fat)
- View list of all added meals
- Basic routing using React Router
- JSON Server used as a mock API
- Deployed backend on Render

## Tech Stack

- Frontend: React (with Hooks), React Router
- Backend/API: JSON Server
- Deployment: Render (for the API)

## Project Structure

**src/**

 _components/_
 
  - Card.css
 
  - MealItem.js
  
  - MealList.js

_pages/_

- About.js

- Home.js
    
- Layout.js
    
- MealForm.js

- App.css
   
  App.js
    
  index.js
    
  index.css
    
- package-lock.json
    
- package.json
 
- README.md







## Getting Started

1. Clone the repository
    ```bash
    git clone https://github.com/daganeabdul/nutrition-api.git
   
    cd nutrition-api

2. Install dependencies
    ```bash
    npm install

4. Run locally with JSON Server
    ```bash
     npx json-server db.json --port 3000
   
  If you want to run it locally:
   
        `npm start`

  Or, update your package.json like this:
     `"scripts": {
      "start": "json-server db.json --port 3000"
       }`

   Then run:
  
    `npm start`

4. App Entry Point

   Visit http://localhost:3000 after starting the dev server.



## API Endpoints
- GET /nutritions  - // Get all meals
- POST /nutritions - // Add a new meal

### Example of a meal object:


{

  "itemName": "Chicken Breast",
  
  "calories": "165",
  
  "protein": "31",
  
  "carbs": "0",
  
  "fat": "3.6"
  
}

## Screenshots


![screenshot](about.png)

![screenshot](home.png)

![screenshot](meallist.png)

![screenshot](form.png)


## Contribution

Contributions are welcome!

 **Fork the repo, make your changes, and submit a PR.**

## MIT License

Copyright (c) 2025 daganeabdul

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 Author’s
 
  **Abdulrahman Dagane**
  
  **Nate Kungu**
  
  **Oliver  Ekeno**










# Neutracker-application

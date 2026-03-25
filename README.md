# Playwright Automation Assignment 

## Overview

This repository contains automation test scenarios implemented using Playwright with JavaScript, following the Page Object Model (POM) design pattern.

##  Scenarios Covered

### 1. User Login

* Verifies successful login with valid credentials
* Validates navigation to product page

### 2. Order Placement

* Adds product to cart
* Verifies cart contents
* Completes checkout flow
* Confirms order success message

### 3. API Testing

* Uses OpenWeather API
* Verifies response status (200)
* Asserts temperature data for Islamabad

##  Framework Design

* Page Object Model (POM)
* Separate test files for UI and API
* Reusable page classes
* Clean folder structure

##  Setup Instructions

```bash
npm install
npx playwright install
```

##  Run Tests

```bash
npx playwright test
```

##  Environment Variables

Create a `.env` file:

```
OPENWEATHER_API_KEY=your_api_key_here
```

##  Approach

The solution follows a modular design using POM to ensure scalability, readability, and maintainability.

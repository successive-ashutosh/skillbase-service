# Skill Base Microservices

Welcome to the Skill Base Microservices repository! This project aims to provide a comprehensive backend solution for managing and assessing skills, categories, Taxonomies and Rating Matrices.

## Table of Contents

- [Skill Base Microservices](#skill-base-microservices)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)

## Introduction

The Skill Base Microservices project offers a robust set of APIs for managing various aspects of skills and Categories. These microservices are designed to be scalable, modular, and easy to integrate with other systems.

## Features

- **Categories:** Manage skill categories and their details.
- **Skills:** Create, update, and assess employee skills.
- **Taxonomies:** Organize skills into taxonomies for better categorization.
- **Skill Rating Matrices:** Define and manage proficiency rating scales.
- **API Documentation:** Interactive API documentation using Swagger.
- **Data Storage:** MongoDB integration for efficient and reliable data storage.
- **Middleware:** CORS and request logging middleware included for security and monitoring.
- **Logging:** Comprehensive logging using Winston.
- **Sample Data:** Seeders for populating initial data.

## Getting Started

To get started with the Skill Base Microservices, follow these steps:

### Installation
Follow these steps to set up and run the Skill Base Microservices on your local machine.

1. Clone the Repository

    Replace your-username with your actual GitHub username.

    ``` bash
    git clone https://github.com/<your-username>/skill-base.git
    ``````

2. Navigate to the Project Directory

    ```bash
    cd skill-base-microservices
    ```

3. Install Dependencies

    Install the required dependencies using npm:

    ``` bash
    npm install
    ```


4. Configuration

    Adjust the configuration files in the config directory to match your environment settings, database configuration, and other preferences.

5. Database Setup 

    Ensure that you have MongoDB installed and running on your system. Update the database configuration in ``config/db.js`` if needed.

6. Start the Development Server
    Start the development server using the following command:

    ```bash
    npm run dev
    ```

    The microservices will be accessible at http://localhost:3000.

7. Explore API Documentation

   Open your web browser and navigate to http://localhost:3000/api-docs to explore the interactive API documentation generated using Swagger. Here, you can see all available endpoints, request payloads, and responses.

8. Start Building!

    With the development server up and running, you can now start building your front end to interact with the Skill Base Microservices. Or you may wish to contribute to more functionalities.


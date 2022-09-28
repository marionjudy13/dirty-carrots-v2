---
title: 'My Next.js/Tailwind/Sanity Setup Process'
date: '2022-09-28'
id: nextjs-tailwind-sanity-setup
---

# My Setup Process
I'm in the process of creating a boilerplate I can reuse, update, and grow with. For the sake of saving time in the future (and maybe to help someone else out), here's how I get setup:

## Install Next.js:
1. Create the project and switch terminal to it's folder:
    - npx create-next-app your-project-name
    - cd your-project-name

## Install Tailwind:
2. In your project folder:
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p
3. Configure your template paths (in your tailwind.config.js file)

    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```


4. Add the Tailwind directives to your CSS
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
5. Start build process: npm run dev

## Add Sanity:
6. In main project folder run:
    - npm i next-sanity
    - sanity init
7. Answer the series of setup questions (however YOU need it):
    - Select project to use: Create new project
    - Your project name: Your Project Name
    - Use the default dataset configuration? Yes
    - Project output path: your-project-name/studio(I always update this to 'studio', otherwise it will default to your-project-name/your-project-name and I find that confusing in the terminal)
    - Select project template: Clean project with no predefined schemas (again, your preference!  There's options!)
8. Cd into your your-project-name/studio folder
9. sanity start - to run Sanity Studio

## Get Your Data Setup
10.



Sanity Gotchas:
- You will need to kill and restart the server to see the effect of certain changes. These include changes to sanity.json, addition or removal of plugins, and anything that involves .env files.

Sanity Helpful Links:
- https://www.sanity.io/docs/getting-started-with-sanity-cli
- https://www.sanity.io/guides/sanity-nextjs-tailwindcss
---
title: 'My Next.js/Tailwind/Sanity Setup Process'
date: '2022-09-28'
id: nextjs-tailwind-sanity-setup
---

# My Setup Process

I'm in the process of creating a boilerplate I can reuse, update, and grow with. For the sake of saving time in the future (and maybe to help someone else out), here's how I get setup:

---

## Install Next.js:

1. Create the project and switch terminal to it's folder:
    ```
    npx create-next-app your-project-name
    cd your-project-name
    ```
---

## Install Tailwind:

2. In your project folder:
    ```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
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
5. Start build process: 
    ```
    npm run dev
    ```
---

## Add Sanity:

6. In main project folder run:
    ```
    npm i next-sanity
    sanity init
    ```
7. Answer the series of setup questions (however YOU need it):
    - Select project to use: Create new project
    - Your project name: Your Project Name
    - Use the default dataset configuration? Yes
    - Project output path: your-project-name/studio(I always update this to 'studio', otherwise it will default to your-project-name/your-project-name and I find that confusing in the terminal)
    - Select project template: Clean project with no predefined schemas (again, your preference!  There's options!)
8. Cd into your your-project-name/studio folder
9. sanity start - to run Sanity Studio at http://localhost:3333/

---

## Get Your Data Setup
10. Create your first document type.
    a. Create new file in studio/schemas folder (ex: plants.js)
    b. Open your new file and add your schema data! Ex:
    ```
    export default {
        name: 'plants',
        type: 'document',
            title: 'Plants',
        fields: [
            {
            name: 'commonName',
            type: 'string',
            title: 'Common Name'
            }
        ]
    }
    ```
11. Import your new document type info into your schema.js file
    ```
    import createSchema from 'part:@sanity/base/schema-creator'
    import schemaTypes from 'all:part:@sanity/base/schema-type'
    import plants from './plants'

    export default createSchema({
        name: 'default',
        types: schemaTypes.concat([plants]),
    })
    ```
    - Once you save, your schema type should refresh in your local studio!

12. Make an .env file
    - Create .env file in root directory
    - Add the following to the file and save:
    ```
    SANITY_ID={projectID}
    ```
    - Replace the project ID with yours (you can find it in your sanity.jason file)

---
## Connect your Data to Next.js

13. In your-project-name folder, run 
    ```
    npm i next-sanity
    ```
14. Import the `createClient` function from `next-sanity` in the `pages/index.js` file:
    ```
    import Head from 'next/head'
    import { createClient } from 'next-sanity'

    export default function Home({ plants }) {
    return (
        <div class="bg-green">
        <main>
            <h2>Plants</h2>
            {plants.length > 0 && (
            <ul>
                {plants.map((plant) => (
                <li key={plant._id}>{plant?.commonName}</li>
                ))}
            </ul>
            )}
        </main>
        </div>
    )
    }

    const client = createClient({
    projectId: process.env.SANITY_ID,
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
    })

    export async function getStaticProps() {
    const plants = await client.fetch(`*[_type == "plants"]`)

    return {
        props: {
        plants,
        },
    }
    }
    ```

---

## Then build, build, build!!
This will probably be a bit of a living document that I will update as I go!

__Sanity Gotchas:__
- You will need to kill and restart the server to see the effect of certain changes. These include changes to sanity.json, addition or removal of plugins, and anything that involves .env files.

__Sanity Helpful Links:__
- https://www.sanity.io/docs/getting-started-with-sanity-cli
- https://www.sanity.io/guides/sanity-nextjs-tailwindcss

__Next.JS Stuff__
- https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables

__Tailwind__
- https://tailwindcss.com/docs/installation
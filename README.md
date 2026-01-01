# Tom Bertomeu - Developer Portfolio

Welcome to my personal portfolio project. I built this website to showcase my professional background, technical skills, and the various projects I have worked on. It serves as a central hub for potential clients or employers to get to know me and see what I can do.

This project is built with a focus on performance, accessibility, and clean design. I wanted to create an experience that feels modern and fluid, using the latest standards in web development.

## Technical Overview

I chose a modern stack to build this portfolio, ensuring it is fast, scalable, and easy to maintain.

*   **Next.js 15**: I am using the latest version of Next.js with the App Router for robust server-side rendering and efficient routing.
*   **TypeScript**: The entire codebase is typed to ensure reliability and fewer runtime errors.
*   **Tailwind CSS 4**: For styling, I use Tailwind CSS. It allows me to rapidly build custom designs without leaving the HTML.
*   **Radix UI**: I use headless components from Radix UI for accessible interactive foundations like dialogs and labels.
*   **Motion & Interactivity**: I implemented custom scroll animations and use `tw-animate-css` to bring the interface to life without compromising performance.
*   **Formspree**: I integrated Formspree to handle contact form submissions reliably without needing a custom backend server for emails.
*   **Internationalization**: The site is fully multilingual. I built a custom language context to handle content switching seamlessly (currently supporting English and French).

## Key Features

The portfolio helps me share my story through several key sections:

*   **About Me**: A brief introduction to who I am, accompanied by my profile picture and a direct link to download my CV in the selected language.
*   **Experience**: A timeline or list highlighting my professional journey and career milestones.
*   **Projects Showcase**: I believe seeing is believing. This section displays selected projects with descriptions and links. There is also a dedicated archive page for a more comprehensive list.
*   **Contact Form**: A functional form powered by Formspree allowing visitors to reach out to me directly from the website.
*   **Responsive Design**: The layout adapts smoothly to any device, from large desktop screens to mobile phones.
*   **Dark Mode**: The design respects system preferences or user choice for light/dark themes.

## Getting Started

If you want to run this project locally on your machine, follow these steps.

### Prerequisites

You will need Node.js installed on your computer. I recommend using a reasonably recent version (Node 18 or later).

### Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

You need to set up the environment variables for the contact form to work:

1.  Create a `.env.local` file in the root directory.
2.  Add your Formspree form ID:

    ```env
    NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
    ```

### Running the Development Server

Once the dependencies are installed, you can start the local server:

```bash
npm run dev
```

Open your browser and visit `http://localhost:3000`. You should see the portfolio running.

## Project Structure

Here is a quick look at how I organized the code:

*   **/app**: Contains the main application routes and pages (Next.js App Router).
*   **/components**: Reusable UI components like the project cards, section wrappers, and headers.
*   **/contexts**: React contexts, such as the LanguageProvider for managing state across the app.
*   **/data**: Static data files where I store project details and texts, making it easy to update content without digging into components.
*   **/locales**: JSON files containing translations for the supported languages.
*   **/public**: Static assets like images and fonts.

## Customization

I designed this code to be easily adaptable. If you are looking at this code to build your own portfolio:

*   **Changing Content**: Most of the text and project data can be modified in the `/data` folder or the `/locales` JSON files.
*   **Styling**: You can tweak the colors and fonts in the standard Tailwind configuration or the main CSS file.
 <img src="./readme-banner.jpg" alt="Project Banner Image">

# TechCycle - Final Project for Technigo's React/Redux Upskill Course

Developers: [Pernilla Sterner](https://github.com/pernillasterner), [Sebastian Tigerschiöld](https://github.com/Seti108)

## Planning

We divided the project into 4 sprints and started with 2 days of planning:

- Brainstorm the concept for the app to include Agenda 2030 goal

- Planning the overall structure

- Creating a design mockup

- Research Supabase documentation

- Deciding the flow of the app

- Filestructure

- Diving into componentes

- Planning routes

- Planing global and local state

## Execution

We started off pairprogramming where we set naming conventions for classes, splitting up the first sections (header, footer, hero, productlist and filter) and going through z-index, naming of divs, layout structure. Setting basic styling.

After that was done, we created a backlog of tasks that we could split between us.

## Challenges

Getting the filter working as expected took quite a while as we needed several filters to be active at the same time and some parts required the help of external libraries to work smoothly, like the range slider. Bringing it all into the global store was a great challenge.

The modal we created for selling phones also had it's challenges where the flow was built as a multi-step form where everything was saved in the Redux state and then sent to our backend. Getting the multi-step format to work required some thinking regarding conditional rendering as well as error handling and input validation.

## View the project live

[https://technigo-project-techcycle-app.netlify.app/](https://technigo-project-techcycle-app.netlify.app/)

## If you want to fork the project, follow the steps below

1.  Clone the repository to your local machine.
2.  Install the required dependencies using `npm install`.
3.  Start the development server using `npm run dev`.

## Tech

- Front end: React, Redux/Redux Toolkit
- BaaS: Supabase
- Build tool: Vite
- CSS Preprocessors: Sass, PostCSS(Autoprefixer)
- Range Slider Component: rc-slider

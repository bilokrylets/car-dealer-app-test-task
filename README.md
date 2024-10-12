# Сar Dealer App

This project is a **Next.js application** that allows users to filter vehicles by **make** and **model year**, and view the corresponding models. The app is styled using **Tailwind CSS** and showcases key features like dynamic routing, data fetching, and static generation with Next.js.

### [View app on Vercel](https://car-dealer-app-test-task.vercel.app/)

## Features

- #### Filter Page:

  Allows users to select a vehicle make and model year with a navigation button to the result page.

- #### Result Page:

  Displays available models based on the selected make and year using API data.

- #### Static Generation:

  Uses generateStaticParams to pre-render pages based on dynamic routes.

- #### Loading States:

  Implements React Suspense for loading indicators during data fetches.

- #### Tailwind CSS Styling:
  Ensures responsive, accessible, and modern design for all components.

## Application Architecture

### Overview

The application follows a standard **Next.js** architecture with a focus on modularity and reusability. It consists of two main pages: the **Filter Page** and the **Result Page**.

### Pages

- **Filter Page (`/`)**

  - User selects a vehicle make and model year.
  - Fetches data from the NHTSA API to populate dropdowns.
  - Contains a navigation button to go to the Result Page.

- **Result Page (`/result/[makeId]/[year]`)**
  - Displays vehicle models based on selected make and year.
  - Utilizes `generateStaticParams` for static generation of routes.

### Data Flow

1. **Client-side Data Fetching**
   - The Filter Page fetches vehicle makes and model years from the API on load.
2. **Server-side Data Fetching**

   - The Result Page fetches vehicle models based on the selected parameters when navigated to.

3. **Static Generation**

   - The application pre-generates static paths for the Result Page to improve performance.

4. **Error Handling**
   - Each fetch implements error handling to manage data fetch failures gracefully.

## Installation

Clone the repository:

```bash
git clone https://github.com/bilokrylets/car-dealer-app-test-task.git

```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js** – React framework for server-side rendering and static site generation.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **React Suspense** – For handling loading states.
- **ESLint** – For maintaining code quality and consistency.
- **NHTSA Vehicle API** – For fetching vehicle makes and models.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for more information.

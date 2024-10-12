# React Quiz

This project is a **Next.js application** that allows users to filter vehicles by **make** and **model year**, and view the corresponding models. The app is styled using **Tailwind CSS** and showcases key features like dynamic routing, data fetching, and static generation with Next.js.

### [View app on Vercel](https://car-dealer-app-test-task.vercel.app/)

## Features

#### Filter Page:

Allows users to select a vehicle make and model year with a navigation button to the result page.

#### Result Page:

Displays available models based on the selected make and year using API data.

#### Static Generation:

Uses generateStaticParams to pre-render pages based on dynamic routes.

#### Loading States:

Implements React Suspense for loading indicators during data fetches.

#### Tailwind CSS Styling:

Ensures responsive, accessible, and modern design for all components.

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
- - **NHTSA Vehicle API** – For fetching vehicle makes and models.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for more information.

import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Nav from "./components/Nav";

import styles from "./tailwind.css";
import navStyles from "./styles/nav.css";
import { navLinks } from "./utils";

export const meta = () => ([
  { charset: "utf-8" },
  { title: "Restaurant" },
  { viewport: "width=device-width,initial-scale=1", }
]);

export const links = () => ([
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: navStyles }
]);

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Raleway&display=swap" rel="stylesheet"></link>
        <Links />
      </head>
      <body className="text-white font-body">
        <header className="flex justify-between px-6 lg:px-10 py-6 sticky top-0 left-0 right-0 z-10 bg-a11y-1 text-a11y-2">
          <div className="order-2 lg:order-1">
            <Link to="/">
              <h1 className="font-bold text-2xl lg:text-3xl font-heading">Restaurant KE</h1>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <Nav />
          </div>
        </header>

        <Outlet />

        <footer className="bg-a11y-1 text-a11y-2 w-full p-3 flex justify-between lg:px-10 py-6">
          <div>
            <span className="font-bold lg:text-lg font-heading">Restaurant KE</span>
            <span className="ml-2 ">123 Street, Nairobi</span>
          </div>
          <ul className="hidden lg:flex gap-3">
            {navLinks.map(item => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  prefetch="intent"
                  // className={({ isActive }) => isActive ? 'text-white underline' : ''}
                  className={({ isActive }) => isActive ? 'py-1 border-b border-white text-white link link-underline ' : 'py-1 link link-underline link-underline-black'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

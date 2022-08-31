import React from "react";
import { Link, Route } from "wouter";
import "./styles.css";

function Nav({ routes = [{ name: "", filter: "" }], setFilter, filter }) {
  return (
    <nav className="navbar-container">
      <Route>
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <a
                className={`navbar-container__item ${
                  route.filter === filter
                    ? "navbar-container__item--active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(route.filter);
                }}
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </Route>
    </nav>
  );
}

export default Nav;

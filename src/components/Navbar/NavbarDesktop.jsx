import * as React from "react";

import arrowDown from "../../images/icon-arrow-down.svg";
import arrowUp from "../../images/icon-arrow-up.svg";

import iconTodo from "../../images/icon-todo.svg";
import iconCalendar from "../../images/icon-calendar.svg";
import iconReminder from "../../images/icon-reminders.svg";
import iconPlanning from "../../images/icon-planning.svg";

import "./NavarDesktop.scss";

const NavbarDesktop = () => {
  const [submenu1, setSubmenu1] = React.useState(false);
  const [submenu2, setSubmenu2] = React.useState(false);
  return (
    <div className="site-nav-desktop">
      <div className="site-nav-inner container-fluid">
        <div className="site-nav-content">
          <div className="branding">
            <h1>
              <a href="#">snap</a>
            </h1>
          </div>
          <ul className="site-nav-menu">
            <li>
              <button
                onClick={() => {
                  setSubmenu2(false);
                  setSubmenu1(!submenu1);
                }}
              >
                Features
                <span>
                  <img
                    src={submenu1 ? arrowUp : arrowDown}
                    role="presentation"
                  />
                </span>
              </button>

              {submenu1 && (
                <ul className="submenu">
                  <li>
                    <button>
                      <span>
                        <img src={iconTodo} role="presentation" />
                      </span>
                      Todo List
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>
                        <img src={iconCalendar} role="presentation" />
                      </span>
                      Calendar
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>
                        <img src={iconReminder} role="presentation" />
                      </span>
                      Reminders
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>
                        <img src={iconPlanning} role="presentation" />
                      </span>
                      Planning
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => {
                  setSubmenu1(false);
                  setSubmenu2(!submenu2);
                }}
              >
                Company
                <span>
                  <img
                    src={submenu2 ? arrowUp : arrowDown}
                    role="presentation"
                  />
                </span>
              </button>

              {submenu2 && (
                <ul className="submenu">
                  <li>
                    <button>History</button>
                  </li>
                  <li>
                    <button>Our Team</button>
                  </li>
                  <li>
                    <button>Blog</button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>About</button>
            </li>
          </ul>
        </div>

        <div className="site-nav-actions">
          <ul className="actions-list">
            <li>
              <button>Login</button>
            </li>
            <li>
              <button className="register">Register</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;

import * as React from "react";
import useMedia from "use-media";
import NavbarDesktop from "./NavbarDesktop";

// Icons
import iconOpen from "../../images/icon-menu.svg";
import iconClose from "../../images/icon-close-menu.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrowUp from "../../images/icon-arrow-up.svg";

import iconTodo from "../../images/icon-todo.svg";
import iconCalendar from "../../images/icon-calendar.svg";
import iconReminder from "../../images/icon-reminders.svg";
import iconPlanning from "../../images/icon-planning.svg";

// Styles
import "./Navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const [submenu1, setSubmenu1] = React.useState(false);
  const [submenu2, setSubmenu2] = React.useState(false);
  const isDesktop = useMedia({ minWidth: 992 });

  return (
    <>
      {isDesktop ? (
        <NavbarDesktop />
      ) : (
        <>
          <nav className="site-nav">
            <div className="nav-inner container">
              <div className="branding">
                <h1>
                  <a href="#">snap</a>
                </h1>
              </div>

              <button className="nav-toggle" onClick={() => setMenu(true)}>
                <span className="menu-open">
                  <img src={iconOpen} role="presentation" />
                </span>
              </button>
            </div>
          </nav>

          {/*  mobile nav */}
          {menu && (
            <div
              className="mobile-nav-overlay"
              onClick={(e) =>
                e.target.matches(".mobile-nav-overlay") ? setMenu(false) : null
              }
            >
              <div className="mobile-nav">
                <div className="nav-content">
                  <div className="close-button">
                    <button
                      className="icon-close"
                      onClick={() => setMenu(false)}
                    >
                      <img src={iconClose} role="presentation" />
                    </button>
                  </div>

                  <ul className="menu-list">
                    <li>
                      <button
                        className={submenu1 && "is-active"}
                        onClick={() => setSubmenu1((prev) => !prev)}
                      >
                        Features
                        <span>
                          <img
                            src={submenu1 ? arrowUp : arrowDown}
                            role="presentation"
                          />
                        </span>
                      </button>

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
                    </li>
                    <li>
                      <button
                        className={submenu2 && "is-active"}
                        onClick={() => setSubmenu2((prev) => !prev)}
                      >
                        Company
                        <span>
                          <img
                            src={submenu2 ? arrowUp : arrowDown}
                            role="presentation"
                          />
                        </span>
                      </button>

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
                    </li>
                    <li>
                      <button>Careers</button>
                    </li>
                    <li>
                      <button>About</button>
                    </li>
                  </ul>

                  <div className="menu-actions">
                    <button className="login">Login</button>
                    <button className="register">Register</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__line"></div>
      <div className="header__main">
        <div className="header__logo txt-med">
          <a href="#">NIMBUS AIR</a>
        </div>
        <nav className="main-nav">
          <ul className="main__nav-list">
            <li className="main__nav-item">
              <a href="/collections/all">Shop</a>
            </li>
            <li className="main__nav-item">
              <a href="#">Models</a>
            </li>
            <li className="main__nav-item">
              <a href="/pages/about">About us</a>
            </li>
            <li className="main__nav-item">
              <a href="#">Blogs</a>
            </li>
            <li className="main__nav-item">
              <a href="/pages/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__icons">
          <a className="header__icons-item" href="#" aria-label="Search">
            <span className="svg-wrapper">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 "
              >
                <path
                  d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 22.5L20 20.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </a>
          <a className="header__icons-item" href="#" aria-label="User">
            <span className="svg-wrapper">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 "
              >
                <path
                  d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20.5901 22.5C20.5901 18.63 16.7402 15.5 12.0002 15.5C7.26015 15.5 3.41016 18.63 3.41016 22.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </a>
          <a className="header__icons-item" href="#" aria-label="Cart">
            <span className="svg-wrapper">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 "
              >
                <path
                  d="M7.5 8.16952V7.19952C7.5 4.94952 9.31 2.73952 11.56 2.52952C14.24 2.26952 16.5 4.37952 16.5 7.00952V8.38952"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.0008 22.5H15.0008C19.0208 22.5 19.7408 20.89 19.9508 18.93L20.7008 12.93C20.9708 10.49 20.2708 8.5 16.0008 8.5H8.0008C3.7308 8.5 3.0308 10.49 3.3008 12.93L4.0508 18.93C4.2608 20.89 4.9808 22.5 9.0008 22.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.4945 12.5H15.5035"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.49451 12.5H8.50349"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

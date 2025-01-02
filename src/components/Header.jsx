// import React from 'react'
// import { MdLocalMovies } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { headerLinks } from '../../data';
// import { useState } from 'react';


// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <nav className="container d-flex justify-content-between py-4 ">
//         <div className="d-flex align-items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="bg-transparent border-0"
//             aria-label="Open menu"
//           >
//             <span style={{ color: "#008080" }} className="fs-3">
//               <GiHamburgerMenu />
//             </span>
//           </button>
//           <a
//             className="text-decoration-none text-light fw-bold fs-5"
//             href="#WatchMovies"
//           >
//             WatchNow
//           </a>
//           {/* <span className="fs-4">
//             <MdLocalMovies />
//           </span> */}
//         </div>
//         <div className="d-none d-lg-flex d-flex gap-5">
//           {isMenuOpen && (
//             <div className="mobile-menu d-lg-none">
//               {headerLinks.map((link) => (
//                 <a key={link.id} href={link.href}>
//                   {link.linkName}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="d-flex gap-2 align-items-center">
//           <button className="d-none d-lg-flex btn btn-transparent rounded-4 text-light border">
//             Watchlist
//           </button>
//           <div className="form">
//             <form>
//               <input
//                 className="form-input bg-transparent border rounded-4 forminput"
//                 type="text"
//                 placeholder="Search"
//               />
//               <span className="search">
//                 <FaSearch />
//               </span>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header

// import React, { useState } from "react";
// import { MdLocalMovies } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { headerLinks } from "../../data";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <nav className="container d-flex justify-content-between py-4">

//         <div className="d-flex align-items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="bg-transparent border-0"
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           >
//             <span style={{ color: "#008080" }} className="fs-3">
//               <GiHamburgerMenu />
//             </span>
//           </button>
//           <a
//             className="text-decoration-none text-light fw-bold fs-5 ms-1"
//             href="#WatchMovies"
//           >
//             WatchNow
//           </a>
//         </div>

//         <div className="d-none d-lg-flex gap-5">
//           {headerLinks.map((link) => (
//             <a
//               key={link.id}
//               href={link.href}
//               className="text-decoration-none text-light"
//             >
//               {link.linkName}
//             </a>
//           ))}
//         </div>

//         <div className="d-flex gap-2 align-items-center">
//           <button className="d-none d-lg-flex btn btn-transparent rounded-4 text-light border">
//             Watchlist
//           </button>
//           <form className="form d-flex align-items-center">
//             <input
//               className="form-input bg-transparent border rounded-4 px-3 py-1 text-light forminput"
//               type="text"
//               placeholder="Search"
//               aria-label="Search movies"
//             />
//             <button className="bg-transparent border-0 ms-2 search" type="submit">
//               <FaSearch style={{ color: "#008080" }} />
//             </button>
//           </form>
//         </div>

//         {isMenuOpen && (
//           <div
//             className="mobile-menu d-lg-none position-absolute top-100 start-0 bg-dark text-light w-100 py-3 px-4 shadow"
//             style={{ zIndex: 10 }}
//           >
//             {headerLinks.map((link) => (
//               <a
//                 key={link.id}
//                 href={link.href}
//                 className="text-decoration-none text-light d-block py-2"
//               >
//                 {link.linkName}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { headerLinks } from "../../data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // User's login state
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
      e.preventDefault();

      if (!searchTerm.trim()) return;

      // Navigate to the search results page with the search query
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    };
  return (
    <header className="header">
      <nav className="container d-flex justify-content-between py-4">
        {/* Hamburger Menu and Logo */}
        <div className="d-flex align-items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="bg-transparent border-0"
            aria-label="Open menu"
          >
            <span style={{ color: "#008080" }} className="fs-3">
              <GiHamburgerMenu />
            </span>
          </button>
          <a
            className="text-decoration-none text-light fw-bold fs-5 ms-1"
            href="#WatchMovies"
          >
            WatchNow
          </a>
        </div>

        {/* Watchlist and Search */}
        <div className="d-flex gap-2 align-items-center">
          <div className="d-none d-lg-flex">
            {isAuthenticated && (
              <button className="btn btn-transparent rounded-4 text-light border">
                Watchlist
              </button>
            )}
            {!isAuthenticated && (
              <Link to="/signin">
                <button className="herobtn btn border rounded-4">
                  Sign in
                </button>
              </Link>
            )}
          </div>
          <form
            className="form d-flex align-items-center"
            onSubmit={handleSearch}
          >
            <input
              className="form-input bg-transparent border rounded-4 px-3 py-1 text-light"
              type="text"
              placeholder="Search"
              aria-label="Search movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-transparent border-0 ms-2 search"
              type="submit"
            >
              <FaSearch style={{ color: "#008080" }} />
            </button>
          </form>
        </div>

        {/* Mobile Menu (Sidebar) */}
        <div
          className={`mobile-menu ${
            isMenuOpen ? "open" : ""
          } position-fixed top-0 start-0 h-100 bg-dark text-light px-4 py-5`}
          style={{
            width: "75%",
            maxWidth: "300px",
            transition: "transform 0.3s ease-in-out",
            transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <button
            className="bg-transparent border-0 text-light fs-3 mb-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {headerLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-decoration-none text-light d-block mb-3 fs-5"
            >
              {link.linkName}
            </Link>
          ))}
        </div>

        {/* Overlay for Mobile Menu */}
        {isMenuOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 10,
            }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;

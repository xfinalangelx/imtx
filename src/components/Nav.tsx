import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const links = [
    { text: "Trade", to: "/" },
    { text: "Earn", to: "/earn" },
    { text: "Redeem", to: "/redeem" },
    { text: "Dashboard", to: "/dashboard" },
    { text: "Documentation", to: "/documentation" },
  ];

  const activeClass = 'text-white bg-gray-900 border-b-2 border-[#CDFF00]'
  const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-700'

  return (
    <nav className="bg-[#17182c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-row">
              <svg
                class="scale-75 h-8 w-8"
                width="44"
                height="41"
                viewBox="0 0 44 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="16.3569" width="8" height="8" fill="white"></rect>
                <path
                  d="M4.00024 6.19763L9.71453 0.5L44.0002 34.6858L38.286 40.3834L4.00024 6.19763Z"
                  fill="#CDFF00"
                ></path>
                <path
                  d="M4.00024 34.8024L38.286 0.616564L44.0002 6.3142L9.71453 40.5L4.00024 34.8024Z"
                  fill="#CDFF00"
                ></path>
              </svg>

              <a class="text-2xl font-[500] text-white transition-colors duration-200 transform lg:text-2xl hover:text-[#CDFF00]">
                Immortal
              </a>
              <a class="text-2xl font-[500] text-[#CDFF00] transition-colors duration-200 transform lg:text-2xl hover:text-[#FFFFFF]">
                X
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, i) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`px-3 py-2 text-sm font-medium border-b2 border-[#CDFF00] ${
                      location.pathname === link.to
                        ? activeClass
                        : inactiveClass
                    } ${i > 0 && "ml-4"}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <svg
                width="82"
                height="24"
                viewBox="0 0 82 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.0594 21.5593L64.2458 20.8608V2.44069L62.0594 3.13921V21.5593ZM36.8392 10.3831C38.212 10.3831 39.4832 11.004 40.2968 12.0388L41.1866 9.94327C40.0171 8.80495 38.4663 8.26166 36.8392 8.26166C33.0765 8.26166 30.4832 11.2886 30.5087 14.6259C30.5341 18.2479 33.3307 21.1971 36.8392 21.1971C38.6188 21.1971 39.9663 20.6539 40.9832 19.9036V17.3424C39.9154 18.4289 38.3646 19.0757 37.0171 19.0757C34.9832 19.0757 32.6951 17.3941 32.6951 14.6259C32.6951 12.0647 34.6781 10.3831 36.8392 10.3831ZM51.3815 8.26166C47.6188 8.26166 45.4323 11.2886 45.4323 14.6259C45.4323 18.2479 48.2544 21.1971 51.7628 21.1971C53.5425 21.1971 54.8899 20.6539 55.9069 19.9036V17.3424C54.8391 18.4289 53.2882 19.0757 51.9408 19.0757C50.1357 19.0757 48.1527 17.9374 47.7459 15.5314H57.3306V14.6777C57.3306 11.1075 55.0171 8.26166 51.3815 8.26166ZM75 8.26166C71.4916 8.26166 68.6441 11.1592 68.6441 14.7294C68.6441 18.2996 71.4916 21.1971 75 21.1971C78.5085 21.1971 81.3559 18.2996 81.3559 14.7294C81.3559 11.1592 78.5085 8.26166 75 8.26166ZM51.4069 10.3831C53.1103 10.3831 54.9154 11.4697 55.0679 13.5652H47.7459C47.8984 11.4697 49.7035 10.3831 51.4069 10.3831ZM75 19.0757C74.1553 19.0757 73.3295 18.8208 72.6271 18.3432C71.9247 17.8657 71.3773 17.1869 71.054 16.3927C70.7307 15.5985 70.6461 14.7246 70.8109 13.8815C70.9757 13.0384 71.3825 12.2639 71.9799 11.6561C72.5772 11.0482 73.3382 10.6343 74.1668 10.4666C74.9953 10.2989 75.8541 10.385 76.6345 10.7139C77.415 11.0429 78.0821 11.6 78.5514 12.3147C79.0207 13.0295 79.2712 13.8698 79.2712 14.7294C79.2721 15.3004 79.1623 15.866 78.948 16.3938C78.7337 16.9215 78.4191 17.4011 78.0223 17.8048C77.6255 18.2086 77.1543 18.5287 76.6357 18.7468C76.117 18.9649 75.5612 19.0767 75 19.0757Z"
                  fill="white"
                ></path>
                <path
                  d="M9.55932 21.6298C13.5013 21.6298 16.6969 18.5022 16.6969 14.644C16.6969 10.7859 13.5013 7.65829 9.55932 7.65829C5.61731 7.65829 2.42169 10.7859 2.42169 14.644C2.42169 18.5022 5.61731 21.6298 9.55932 21.6298ZM9.55932 24C4.28003 24 0 19.811 0 14.644C0 9.47708 4.28003 5.28812 9.55932 5.28812C14.8386 5.28812 19.1186 9.47708 19.1186 14.644C19.1186 19.811 14.8386 24 9.55932 24Z"
                  fill="white"
                ></path>
                <path
                  d="M14.6441 16.6969C18.5022 16.6969 21.6298 13.5013 21.6298 9.55932C21.6298 5.61731 18.5022 2.42169 14.6441 2.42169C10.7859 2.42169 7.65832 5.61731 7.65832 9.55932C7.65832 13.5013 10.7859 16.6969 14.6441 16.6969ZM14.6441 19.1186C9.47711 19.1186 5.28815 14.8386 5.28815 9.55932C5.28815 4.28003 9.47711 0 14.6441 0C19.811 0 24 4.28003 24 9.55932C24 14.8386 19.811 19.1186 14.6441 19.1186Z"
                  fill="white"
                ></path>
              </svg>

              {/* Wallet Button */}
              <div className="ml-8 mt-2 relative flex items-center justify-end">
                <div>
                  <button
                    type="button"
                    class="text-white bg-gray-700 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  >
                    <div className="h-6 w-6">
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="chakra-icon css-pv6ryy"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M18 3C19.103 3 20 3.897 20 5V7C21.103 7 22 7.897 22 9V19C22 20.103 21.103 21 20 21H5C3.794 21 2 20.201 2 18V6C2 4.346 3.346 3 5 3H18ZM18 5H5C4.448 5 4 5.449 4 6C4 6.551 4.448 7 5 7H18V5ZM14 17H16V15H18V13H16V11H14V13H12V15H14V17Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-2">Connect Wallet</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav

import React, { useState } from "react";

const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const enterSubmenuHandler = () => {
    setShowSubmenu(!showSubmenu);
  };
  const leaveSubmenuHandler = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="w-full flex justify-between px-40 items-center h-14">
      <span>
        <h1 className="font-semibold text-2xl">Company</h1>
      </span>

      <div className="h-full">
        <ul className="flex text-sm h-full">
          <div
            className="relative"
            onMouseEnter={enterSubmenuHandler}
            onMouseLeave={leaveSubmenuHandler}
          >
            <li className="hover:bg-gray-100 grid place-items-center cursor-pointer mx-2 h-full px-4 text-center">
              ABOUT
            </li>
            {showSubmenu ? (
              <div className="absolute left-2 z-10">
                <ul className="w-60 bg-white flex flex-col">
                  <li className="px-3 py-3 cursor-pointer hover:bg-gray-800 hover:text-white">
                    HISTORY
                  </li>
                  <li className="px-3 py-3 cursor-pointer hover:bg-gray-800 hover:text-white">
                    VISION MISSION
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <li className="hover:bg-gray-100 grid place-items-center cursor-pointer mx-2 h-full px-4">
            OUR WORK
          </li>
          <li className="hover:bg-gray-100 grid place-items-center cursor-pointer mx-2 h-full px-4">
            OUR TEAM
          </li>
          <li className="hover:bg-gray-100 grid place-items-center cursor-pointer mx-2 h-full px-4">
            OUR CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

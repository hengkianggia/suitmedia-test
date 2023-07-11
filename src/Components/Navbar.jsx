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
    <div className="flex items-center justify-between w-full px-40 h-14">
      <span>
        <h1 className="text-2xl font-bold">Company</h1>
      </span>

      <div className="h-full">
        <ul className="flex h-full text-sm">
          <div
            className="relative"
            onMouseEnter={enterSubmenuHandler}
            onMouseLeave={leaveSubmenuHandler}
          >
            <li className="grid h-full px-4 mx-2 text-center cursor-pointer hover:bg-gray-100 place-items-center">
              ABOUT
            </li>
            {showSubmenu ? (
              <div className="absolute z-10 left-2">
                <ul className="flex flex-col bg-white w-60">
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
          <li className="grid h-full px-4 mx-2 cursor-pointer hover:bg-gray-100 place-items-center">
            OUR WORK
          </li>
          <li className="grid h-full px-4 mx-2 cursor-pointer hover:bg-gray-100 place-items-center">
            OUR TEAM
          </li>
          <li className="grid h-full px-4 mx-2 cursor-pointer hover:bg-gray-100 place-items-center">
            OUR CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

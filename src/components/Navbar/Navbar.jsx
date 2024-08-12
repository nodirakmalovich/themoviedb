import React from "react";

function Navbar() {
  const navbarMenuData = [
    {
      id: 1,
      text: "Movies",
      link: "/movie",
    },
    {
      id: 2,
      text: "Tv shows",
      link: "/movie",
    },
    {
      id: 3,
      text: "People",
      link: "/movie",
    },
    {
      id: 4,
      text: "More",
      link: "/movie",
    },
  ];

  return (
    <div className="bg-[#032541] h-[64px] flex items-center">
      <div className="flex justify-between w-full my-container px-10">
        <div className="flex items-center justify-between gap-4">
          <img
            className="h-5"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
          <ul className="flex gap-4 items-center ">
            {navbarMenuData.map((item, index) => {
              return (
                <li key={index} className="font-semibold text-white p-2">
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">Profile</div>
      </div>
    </div>
  );
}

export default Navbar;

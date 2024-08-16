  import React from "react";
  import bell from '../../assets/bell.svg'
  import plus from '../../assets/plus.svg'
  import search from '../../assets/searchIcon.svg'
  import './Navbar.scss'


  function Navbar() {


    const navbarMenuData = [
      {
        id: 1,
        text: "Movies",
        link: "/movie",
        childrens: [
          {
            id: 1,
            title: 'Popular'
          },
          {
            id: 2,
            title: 'Now Playing'
          },
          {
            id: 3,
            title: 'Upcoming'
          },
          {
            id: 4,
            title: 'Top Rated'
          },
        ]
      },
      {
        id: 2,
        text: "TV Shows",
        link: "/movie",
        childrens: [
          {
            id: 1,
            title: 'Popular'
          },
          {
            id: 2,
            title: 'Airing Today'
          },
          {
            id: 3,
            title: 'On TV'
          },
          {
            id: 4,
            title: 'Top Rated'
          },
        ]
      },
      {
        id: 3,
        text: "People",
        link: "/movie",
        childrens: [
          {id: 1,
          title: 'Popular People'}
        ]
      },
      {
        id: 4,
        text: "More",
        link: "/movie",
        childrens: [
          {
            id: 1,
            title: 'Discussion'
          },
          {
            id: 2,
            title: 'Leaderboard'
          },
          {
            id: 3,
            title: 'Support'
          },
          {
            id: 4,
            title: 'API'
          },
        ]
      },
    ];



    return (
      <div className="bg-[#032541] h-[64px] flex items-center">
        <div className="flex justify-between w-full my-container px-10 items-center">
          <div className="flex items-center justify-between gap-4">
            <img
              className="h-5"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
            />
            <ul className="flex gap-4 items-center navbar_menu">
              {navbarMenuData.map((item, index) => {
                return (
                  <li key={index} className="font-semibold text-white p-2 relative navbar_menu_item cursor-pointer">
                    {item.text}

                    <ul className="navbar_menu_item_menu absolute">
                      {
                        item.childrens.map((child, index) => {
                          return (
                            <li key={index} className="navbar_menu_item_menu_list font-semibold text-black p-2 relative">{child.title}</li>
                          )
                        })
                      }
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navabar_right">
            <div className="navbar_right_row flex items-center gap-[30px]">
              <img className="cursor-pointer w-[22.4px] h-[22.4px]" src={plus} alt="" />
              <button className="flex justify-center items-center w-[28px] h-[26px] text-[14px] border-[1px] border-white  p-1 text-white font-semibold  hover:text-[#032541] hover:bg-white rounded-[3px] px-[5px] py-[3px]">EN</button>
              <img className="cursor-pointer w-[22.4px] h-[22.4px]" src={bell} alt="bell" />
              <div className="cursor-pointer user w-[32px] h-8 rounded-[50%] bg-red-600 flex justify-center items-center">
                <a className="text-white fw-semibold text-[14.4px]" href="#">N</a>
              </div>
              <img className="cursor-pointer w-[29.px] h-[29.1px]" src={search} alt="search" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Navbar;

import React, { useState, useEffect } from "react";
import bell from '../../assets/bell.svg';
import plus from '../../assets/plus.svg';
import search from '../../assets/searchIcon.svg';
import './Navbar.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/languageSlice";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {


  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const route = useNavigate();
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);
  const { t } = useTranslation()

  const navbarMenuData = [
    {
      id: 1,
      text: i18n.t("Movies"),
      link: "/movie",
      childrens: [
        {
          id: 1,
          title: i18n.t("Popular"),
          pages: '/movie'
        },
        {
          id: 2,
          title: i18n.t("Now Playing"),
          pages: '/movie/now-playing'
        },
        {
          id: 3,
          title: i18n.t("Upcoming"),
          pages: '/movie/upcoming'
        },
        {
          id: 4,
          title: i18n.t("Top Rated"),
          pages: '/movie/top-rated'
        },
      ]
    },
    {
      id: 2,
      text: i18n.t("TV Shows"),
      link: "/movie",
      childrens: [
        {
          id: 1,
          title: i18n.t("Popular"),
          pages: '/tv'
        },
        {
          id: 2,
          title: i18n.t("Airing Today"),
          pages: '/tv/airing-today'
        },
        {
          id: 3,
          title: i18n.t("On TV"),
          pages: '/tv/on-the-air'
        },
        {
          id: 4,
          title: i18n.t("Top Rated"),
          pages: '/tv/top-rated'
        },
      ]
    },
    {
      id: 3,
      text: i18n.t("People"),
      link: "/movie",
      childrens: [
        {
          id: 1,
          title: i18n.t("Popular People"),
          pages: '/person'
        }
      ]
    },
    {
      id: 4,
      text: i18n.t("More"),
      link: "/movie",
      childrens: [
        {
          id: 1,
          title: i18n.t("Discussion")
        },
        {
          id: 2,
          title: i18n.t("Leaderboard")
        },
        {
          id: 3,
          title: i18n.t("Support")
        },
        {
          id: 4,
          title: i18n.t("API")
        },
      ]
    },
  ];

  const languages = [
    {
      lan: 'EN',
      value: 'en'
    },
    {
      lan: 'RU',
      value: 'ru'
    },
    {
      lan: 'UZ',
      value: 'uz'
    },
  ];

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  function goToHome() {
    route('/')
  }

  function handlePages(child) {
    route(child.pages)
    setIsMenuOpen(!isMenuOpen);
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#032541] h-[64px] flex items-center">

      <div className="flex justify-between w-full my-container px-10 items-center">
        <div className="flex items-center justify-between gap-4">
          <img
            className="h-5"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
            onClick={goToHome}
          />


          <ul className={`flex gap-4 items-center hidden_menu ${isMenuOpen ? 'translate-y-[-150%]' : 'translate-y-[0]'}`}>
            {navbarMenuData.map((item, index) => {
              return (
                <li key={index} className="font-semibold border-[1px] border-transparent hover:border-[1px] hover:border-gray-400 text-black p-2 relative navbar_menu_item cursor-pointer">
                  {item.text}
                  <ul className="navbar_menu_item_menu absolute z-40">
                    {item.childrens.map((child, index) => {
                      return (
                        <li
                          key={index}
                          className="navbar_menu_item_menu_list font-semibold text-black p-2 relative"
                          onClick={() => handlePages(child)}
                        >
                          {child.title}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}

            <li onClick={handleToggleMenu} className="border-[1px] border-transparent hover:border-[1px] hover:border-gray-400 font-semibold text-black p-2 relative navbar_menu_item cursor-pointer">{t("Close")}</li>
          </ul>

          <ul className="flex gap-4 items-center navbar_menu">
            {navbarMenuData.map((item, index) => {
              return (
                <li key={index} className="font-semibold text-white p-2 relative navbar_menu_item cursor-pointer">
                  {item.text}
                  <ul className="navbar_menu_item_menu absolute z-40">
                    {item.childrens.map((child, index) => {
                      return (
                        <li
                          key={index}
                          className="navbar_menu_item_menu_list font-semibold text-black p-2 relative"
                          onClick={() => handlePages(child)}
                        >
                          {child.title}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navabar_right">
          <div className="navbar_right_row flex items-center gap-[30px]">

            <button onClick={handleToggleMenu} className="navbar_toggle text-white hidden">{t("Menu")}</button>
            <img className="hide_menu cursor-pointer w-[22.4px] h-[22.4px]" src={plus} alt="plus" />

            <select
              onChange={handleChangeLanguage}
              value={currentLanguage}
              className="flex bg-transparent justify-center items-center w-[50px] h-[26px] text-[14px] border-[1px] border-white p-1 text-white font-semibold hover:text-[#032541] hover:bg-white rounded-[3px] px-[5px] py-[3px]"
            >
              {languages.map((lan, index) => {
                return (
                  <option value={lan.value} key={index}>{lan.lan}</option>
                )
              })}
            </select>

            <img className="hide_menu cursor-pointer w-[22.4px] h-[22.4px]" src={bell} alt="bell" />
            <div className="hide_menu cursor-pointer user w-[32px] h-8 rounded-[50%] bg-red-600 flex justify-center items-center">
              <a className="hide_menu text-white fw-semibold text-[14.4px]" href="#">N</a>
            </div>
            <img className="hide_menu cursor-pointer w-[29.px] h-[29.1px]" src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

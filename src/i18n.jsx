import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Welcome.": "Welcome. ",
            "Millions of movies, TV shows and people to discover. Explore now.": "Millions of movies, TV shows and people to discover. Explore now.",
            'Search for a movie, tv show, person......': "Search for a movie, tv show, person......",
            "Movies": "Movies",
            "Popular": "Popular",
            "Now Playing": "Now Playing",
            "Upcoming": "Upcoming",
            "Top Rated": "Top Rated",
            "TV Shows": "TV Shows",
            "Airing Today": "Airing Today",
            "On TV": "On TV",
            "People": "People",
            "Popular People": "Popular People",
            "More": "More",
            "Discussion": "Discussion",
            "Leaderboard": "Leaderboard",
            "Support": "Support",
            "Search": "Search",
            'Today': 'Today',
            'This Week': 'This Week',
            "Trending": "Trending",
            'In Theaters': 'In Theaters',
            "Latest Trailers": "Latest Trailers",
            "What's Popular": "What's Popular",
            "Popuar movies": "Popuar movies",
            "Now Playing Movies": 'Now Playing Movies',
            "Upcoming movies": "Upcoming movies",
            "Top Rated": "Top Rated",
            "Menu": "Menu",
            "Popular TV Shows": "Popular TV Shows",
            "TV Shows Airing Today": "TV Shows Airing Today",
            "Currently Airing TV Shows": "Currently Airing TV Shows",
            "Top Rated TV Shows": "Top Rated TV Shows",
            "Close": "Close",
        }
    },
    ru: {
        translation: {
            "Welcome.": "Добро пожаловать.",
            "Millions of movies, TV shows and people to discover. Explore now.": "Миллионы фильмов, сериалов и людей. Исследуйте сейчас.",
            'Search for a movie, tv show, person......': "Найдите фильм, телешоу, человека......",
            "Movies": "Фильмы",
            "Popular": "Популярный",
            "Now Playing": "Сейчас играет",
            "Upcoming": "Предстоящие",
            "Top Rated": "Самый высокий рейтинг",
            "TV Shows": "ТВ-шоу",
            "Airing Today": "В эфире сегодня",
            "On TV": "По ТВ",
            "People": "Люди",
            "Popular People": "Популярные люди",
            "More": "Более",
            "Discussion": "Обсуждение",
            "Leaderboard": "Таблица лидеров",
            "Support": "Поддержка",
            "Search": "Поиск",
            'Today': 'Сегодня',
            'This Week': 'На этой неделе',
            "Trending": "В тренде",
            'In Theaters': 'В кинотеатрах',
            "Latest Trailers": " Последние трейлеры",
            "What's Popular": "Что популярно",
            "Popuar movies": "Популярные фильмы",
            "Now Playing Movies": 'Сейчас смотрят фильмы',
            "Upcoming movies": "Предстоящие фильмы",
            "Top Rated": "С самым высоким рейтингом",
            "Menu": "Меню",
            "Popular TV Shows": "Популярные сериалы",
            "TV Shows Airing Today": "Сериалы в эфире сегодня",
            "Currently Airing TV Shows": "Текущие сериалы в эфире",
            "Top Rated TV Shows": "Лучшие сериалы",
            "Close": "Закрыть",


        }
    },
    uz: {
        translation: {
            "Welcome.": "Xush kelibsiz.",
            "Millions of movies, TV shows and people to discover. Explore now.": "Millionlab filmlar, telekoʻrsatuvlar va kishilar. Hoziroq kashf eting.",
            'Search for a movie, tv show, person......': "Film, teleko'rsatuv, kishi, va h.k qidiring......",
            "Movies": "Filmlar",
            "Popular": "Mashhur filmlar",
            "Now Playing": "Ko'rilayotgan",
            "Upcoming": "Tez orada",
            "Top Rated": "Top Filmlar",
            "TV Shows": "TV Shoular",
            "Airing Today": "Bugun efirda",
            "On TV": "TV da",
            "People": "Insonlar",
            "Popular People": "Mashhur insonlar",
            "More": "Boshqa",
            "Discussion": "Munozara",
            "Leaderboard": "Yetakchilar",
            "Support": "Yordam",
            "Search": "Qidiruv",
            'Today': 'Bugun',
            'This Week': 'Ushbu Hafta',
            "Trending": "Trentda",
            'In Theaters': 'Kini teatrda',
            "Latest Trailers": "So'nggi treylerlar",
            "What's Popular": "Ommabop",
            "Popuar movies": "Ommabop filmlar",
            "Now Playing Movies": 'Kinoteatrlarda',
            "Upcoming movies": "Tez Kunlarda",
            "Top Rated": "Top filmlar",
            "Menu": "Menu",
            "Popular TV Shows": "Ommabop TV Showlar",
            "TV Shows Airing Today": "Bugun efirga uzatiladigan teleko'rsatuvlar",
            "Currently Airing TV Shows": "Hozirda efirga uzatilayotgan teleko'rsatuvlar",
            "Top Rated TV Shows": "Top teleko'rsatuvlar",
            "Close": "Yopish",
        }
    }
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: savedLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
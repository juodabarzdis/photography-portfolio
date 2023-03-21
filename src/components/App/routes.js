const routes = {
  home: {
    path: "/",
    title: "Home",
    getComponent: () => import("../../pages/Home/Home"),
  },
  about: {
    path: "/about",
    title: "About",
    getComponent: () => import("../../pages/About/About"),
  },
  contact: {
    path: "/contact",
    title: "Contact",
    getComponent: () => import("../../pages/Contact/Contact"),
  },
  album: {
    path: "/album/:id",
    title: "Album",
    getComponent: () => import("../../pages/Album/Album"),
  },
  pageNotFound: {
    path: "*",
    title: "Page Not Found",
    getComponent: () => import("../../pages/ErrorPage/ErrorPage"),
  },
};

export default routes;

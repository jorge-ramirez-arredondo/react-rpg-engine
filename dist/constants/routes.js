var routes = {
  mainMenu: {
    $path: "/mainMenu",
    loadMenu: {
      $path: "/mainMenu/loadMenu"
    }
  },
  gameViews: {
    $path: "/gameViews",
    dialogView: {
      $path: "/gameViews/dialogView"
    },
    explorationView: {
      $path: "/gameViews/explorationView"
    },
    battleView: {
      $path: "/gameViews/battleView"
    }
  },
  settings: {
    $path: "/settings"
  }
};
export default routes;
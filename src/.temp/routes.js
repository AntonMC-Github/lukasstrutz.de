const c1 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lukas/Desktop/Privat/LukasStrutz/ls2/node_modules/gridsome/app/pages/404.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/lukas/Desktop/Privat/LukasStrutz/ls2/src/pages/Index.vue")

export default [
  {
    name: "404__en-gb",
    path: "/en/404/",
    component: c1,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "404__de-de",
    path: "/de/404/",
    component: c1,
    meta: {
      locale: "de-de"
    }
  },
  {
    name: "__en_slug",
    path: "/en/:slug+",
    component: c1,
    meta: {
      dataPath: "/en/_slug_plus.json",
      dynamic: true,
      locale: "en-gb"
    }
  },
  {
    name: "__de_slug",
    path: "/de/:slug+",
    component: c1,
    meta: {
      dataPath: "/de/_slug_plus.json",
      dynamic: true,
      locale: "de-de"
    }
  },
  {
    name: "home__en-gb",
    path: "/en/",
    component: c2,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "home__de-de",
    path: "/de/",
    component: c2,
    meta: {
      locale: "de-de"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c1,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "home",
    path: "/",
    component: c2,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "*",
    path: "*",
    component: c1,
    meta: {
      locale: "en-gb"
    }
  }
]

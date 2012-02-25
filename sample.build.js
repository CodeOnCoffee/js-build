({
  appDir: "build-res/module-scripts", /* Scripts from other modules retrieved from ivy */
  dir: "bin/scriptOutput", /* Output location */

  paths: {
    "dashboards": "../../resources/script" /* dashboard scripts aren't in the same location as the ivy resolved scripts */
  },

  modules: [
    {
      name: "require"
    },

    //Optimize the application files. Exclude jQuery since it is
    //included already in require-jquery.js
    {
      name: "dashboards/dashboard-main-module"
//      exclude: ["dojo","dojox","dijit"]
    }
  ]
})

({
//  appDir: "../resource/script",
  baseUrl: "../resource/script",
  dir: "dashboard-build",
  //Comment out the optimize line if you want
  //the code minified by UglifyJS
  //optimize: "none",

  paths: {
    //"jquery": "require-jquery"
  },

  modules: [
    //Optimize the require-jquery.js file by applying any minification
    //that is desired via the optimize: setting above.
//    {
//      name: "require"
//    },

    //Optimize the application files. Exclude jQuery since it is
    //included already in require-jquery.js
    {
      name: "dashboard-main-module"
//      exclude: ["dojo","dojox","dijit"]
    }
  ]
})

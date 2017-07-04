/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    // Allow to handle some npm modules as vendors
    nodeModulesToVendor: [
      new Funnel('node_modules/cheet.js', {
        files: ['cheet.min.js']
      }),
      new Funnel('node_modules/pace-js', {
        files: ['pace.min.js']
      }),
      new Funnel('node_modules/datedropper', {
        files: ['datedropper.min.js']
      }),
      new Funnel('node_modules/spin.js', {
        files: ['spin.min.js']
      })
    ],
    sassOptions: {
      extension: 'sass',
      includePaths: ['app/components'],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  //app.import('node_modules/cheet.js/cheet.min.js');
  //app.import('node_modules/pace-js/pace.min.js');
  //app.import('node_modules/datedropper/datedropper.min.js');
  //app.import('node_modules/spin.js/spin.min.js');

  app.import('vendor/cheet.min.js');
  app.import('vendor/pace.min.js');
  app.import('vendor/datedropper.min.js');
  app.import('vendor/spin.min.js');

  app.import('vendor/boombox.js');
  app.import('vendor/turntables.js');
  app.import('vendor/cheet-sounds.js');

  return app.toTree();
};

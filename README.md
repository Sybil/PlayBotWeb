# Playbot-web

Playbot website lets you listen to thousands of carefully chosen tracks. These tracks cover mainly electro substyles and are aggregated by members of the Nightiies organization.
The website plays youtube and soundcloud tracks and list them accordindly to some user defined parameters (date of sharing, poster, tag ...).
All the tracks follow on from each other -randomly or not depending of the display mode- making it perfect as background music player.

Playbotweb deploys an ember.js frond-end.

# Playbot

Playbot is an irc tool developped to share musics or videos : users give away sounds and the software stores and manages them. The playbot-web website uses this database to offer handpicked tracks.

# Playbot API

The link between playbot database and the website is a Rails API.

# Playbot-web installation

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


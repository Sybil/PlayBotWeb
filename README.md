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
* [Ember CLI](http://www.ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)


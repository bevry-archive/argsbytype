
<!-- TITLE/ -->

# Arguments By Type

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/argsbytype.png?branch=master)](http://travis-ci.org/bevry/argsbytype "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/argsbytype.png)](https://npmjs.org/package/argsbytype "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/argsbytype.png?theme=shields.io)](https://david-dm.org/bevry/argsbytype)
[![Development Dependency Status](https://david-dm.org/bevry/argsbytype/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/argsbytype#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Provide say `[1, 'asd']` and get back `{number:[1], string:['asd']}`. Very useful for agnostic argument orders.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('argsbytype')`
- Install: `npm install --save argsbytype`

### [Browserify](http://browserify.org/)
- Use: `require('argsbytype')`
- Install: `npm install --save argsbytype`
- CDN URL: `//wzrd.in/bundle/argsbytype@1.0.0`

### [Ender](http://ender.jit.su/)
- Use: `require('argsbytype')`
- Install: `ender add argsbytype`

<!-- /INSTALL -->


## Usage

Let's say your coding a function, and you want to accept arguments in any order. Traditionally this would look like:

> https://github.com/bevry/argsbytype/blob/master/example/01.js

But what happens when you:

- Start having arguments that are regular expressions or dates which `typeof` is still `object` instead of `regexp` or `date`
- Or, when you start having multiple arguments of the same type, that you would like to accept (e.g. the first string should be the `name` property, the second string should be the `keyword` property)

At that point in time, it becomes too much trouble to bother with. Fortunately, `argsbytype` is to the rescue! Now you can do:

> https://github.com/bevry/argsbytype/blob/master/example/02.js

Yay! Big win for agnostic argument order! But when would you actually want this? Well, it turns out that in CoffeeScript options come first, in JavaScript, options usually come last. By using this, we can support both conventions, for example:

> https://github.com/bevry/argsbytype/blob/master/example/03.js


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/argsbytype/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/argsbytype/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

No contributors yet! Will you be the first?
[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/argsbytype/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2014+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->



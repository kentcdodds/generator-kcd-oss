<div align="center">
<h1><%= moduleName %></h1>

<strong><%= description %></strong>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

// TODO

## This solution

// TODO

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's <% if (devDep) { %>`devDependencies`<% } %><% if (!devDep) { %>`dependencies`<% } %>:

```
npm install --save<% if (devDep) { %>-dev<% } %> <%= moduleName %>
```

## Usage

// TODO

## Inspiration

// TODO

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/<%= moduleName %>/commits?author=kentcdodds) [📖](https://github.com/kentcdodds/<%= moduleName %>/commits?author=kentcdodds) 🚇 [⚠️](https://github.com/kentcdodds/<%= moduleName %>/commits?author=kentcdodds) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/<%= moduleName %>.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/<%= moduleName %>
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/<%= moduleName %>.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/<%= moduleName %>
[version-badge]: https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square
[package]: https://www.npmjs.com/package/<%= moduleName %>
[downloads-badge]: https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/<%= moduleName %>
[license-badge]: https://img.shields.io/npm/l/<%= moduleName %>.svg?style=flat-square
[license]: https://github.com/kentcdodds/<%= moduleName %>/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/<%= moduleName %>/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/<%= moduleName %>.svg?style=social
[github-watch]: https://github.com/kentcdodds/<%= moduleName %>/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/<%= moduleName %>.svg?style=social
[github-star]: https://github.com/kentcdodds/<%= moduleName %>/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20<%= moduleName %>!%20https://github.com/kentcdodds/<%= moduleName %>%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/<%= moduleName %>.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors

const yeoman = require('yeoman-generator')
const kebabCase = require('lodash.kebabcase')

module.exports = yeoman.Base.extend({
  init() {
    const cb = this.async()

    this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: this.appname.replace(/\s/g, '-'),
        filter: x => kebabCase(x).toLowerCase(),
      },
      {
        name: 'devDep',
        message: 'Should people install this as one of their devDependencies?',
        default: true,
        type: 'confirm',
      },
      {
        name: 'description',
        message: `What's the project description?`,
        type: 'input',
      },
    ], props => {
      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to))
      }

      this.fs.copyTpl([
        `${this.templatePath()}/**`,
      ], this.destinationPath(), props)

      mv('gitattributes', '.gitattributes')
      mv('gitignore', '.gitignore')
      mv('travis.yml', '.travis.yml')
      mv('npmrc', '.npmrc')
      mv('babelrc', '.babelrc')
      mv('opt-in', '.opt-in')
      mv('eslintignore', '.eslintignore')
      mv('_package.json', 'package.json')

      cb()
    })
  },
  git() {
    this.spawnCommandSync('git', ['init'])
  },
  install() {
    this.npmInstall()
  },
  updateDependencies() {
    this.spawnCommandSync('npm-check')
  },
  generateContributors() {
    this.spawnCommandSync('./node_modules/.bin/all-contributors-cli init')
    this.spawnCommandSync('npm start addContributor kentcdodds code,doc,test,infra')
    this.spawnCommandSync('npm start generateContributors')
  },
})

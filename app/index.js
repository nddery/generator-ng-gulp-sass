'use strict';
var path = require('path');
var fs = require('fs');
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    var cb = this.async();

    this.prompt([{
      name: 'appName',
      message: 'An app needs a name, what\' this one ?',
      default: this.appname.replace(/\s/g, '-')
    }, {
      name: 'appNameShort',
      message: 'And it\'s short/slug name ?',
      default: this.appname.replace(/\s/g, '-'),
      filter: function (val) {
        return this._.slugify(val);
      }.bind(this)
    }, {
      name: 'description',
      message: 'What\'s your app doing ?',
      default: 'description'
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      validate: function (val) {
        return val.length > 0 ? true : 'You have to provide a username';
      }
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      validate: function (val) {
        return val.length > 0 ? true : 'You have to provide a website URL';
      },
      filter: function (val) {
        return normalizeUrl(val);
      }
    }], function (props) {
      this.appName = props.appName;
      this.appNameShort = props.appNameShort;
      this.appNameSlug = this._.slugify(props.appName).toLowerCase();
      this.description = props.description;
      this.githubUsername = props.githubUsername;
      this.name = this.user.git.name();
      this.email = this.user.git.email();
      this.website = props.website;
      this.humanizedWebsite = humanizeUrl(this.website);

      // root
      this.template('.bowerrc');
      this.template('.editorconfig');
      this.template('.gitignore');
      this.template('.jshintrc');
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json');
      this.template('bower.json');
      this.template('gulpfile.js');
      this.template('license');
      this.template('readme.md');

      // app
      this.directory('app');
      // gulp
      this.directory('gulp');
      // test
      this.directory('test');

      cb();
    }.bind(this));
  }
});

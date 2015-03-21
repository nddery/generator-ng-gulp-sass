# <%= appname %>
> <%= description %>

## Install
```bash
$ npm install && bower install
```

## Usage (with Gulp)
```bash
$ gulp                    # Defaults to build

$ gulp serve              # Serves and watch files from the app directory
$ gulp serve:dist         # Serves files from the dist directory

$ gulp build              # Build your app to the dist directory

$ gulp test               # Run your unit tests

$ gulp protractor         # Run your e2e tests on the source files
$ gulp protractor:src     # Same as above
$ gulp protractor:dist    # Run your e2e tests on the built files
```

## License
MIT © [<%= name %>](<%= website %>)

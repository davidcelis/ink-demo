# README

This is just a small demo application to show an issue with Ink's inline syntax highlighting using the latest version of Ink.

## Setting up the application

You'll need Ruby installed; an easy way to do this is use a Ruby version manager like `asdf` with their ruby plugin, or `rbenv` with `ruby-install`. This app was built with Ruby 3.2.1, but any version of Ruby 3 should do.

After cloning this repository, you should be able to run `bin/setup` and then `bin/dev` to start the server. Visit http://localhost:3000 and you'll see an Ink editor set up with v0.20.1, but without syntax highlighting working.

If you edit `config/importmap.rb` to change the version to 0.18.1 (the newest older version that jsdelivr will serve), inline highlighting will start working again.

`app/javascript/controllers/ink_controller.js` has all of the other Ink-related imports and code.

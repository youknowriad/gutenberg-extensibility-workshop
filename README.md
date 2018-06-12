# Gutenberg Extensibility Workshop

This repository contains examples of Gutenberg Extensibility Patterns. It's organized as a WordPress plugin you can install and activate to play with the different patterns exposed.

## Plugin Extensibility Patterns (ES6)

It's composed of a sequential list of patterns you can enable one by one. Each pattern is organized like this:

* A php file in `lib/XX-pattern-name.php` to enqueue the different scripts/stylesheets required for this pattern.
* A folder in `scripts/XX-pattern-name` containing the JavaScript files and CSS and SASS stylesheets required for the pattern.
* Each example is implemented in `ES5` + `CSS` without requiring any built step but examples also include an `ESnext` + `SASS` equivalement implementation.
* Running the build process ( `npm run build` ) generates a JavaScript bundle file `scripts/XX-pattern-name/build/index.js` and a stylesheet file `scripts/XX-pattern-name/build/style.css` if needed.
* By default the plugin loads the `ES5` + `CSS` version of each example, make sure to update the URL of the stylesheets/scripts used in the `lib/XX-pattern-name.php` file if you want to switch to the built versions.

### Usage

* Copy this repository to the `wp-content/plugins/gew/` folder in your WordPress installation.
* navigate to this folder using a terminal and run `npm install && npm run build`.

you can run `npm run dev` if you want to make updates to the script files and regenerate the built files automatically.

You can choose which pattern to enable/disable in your plugin by opening the `gutenberg-extensibility-workshop.php` file and comment/uncomment the corresponding pattern file.

## Theme Extensibility

To demonstrate theme extensibility patterns, the repository contains a light theme optimized for Gutenberg Extensibility Patterns.
You can install this theme by copying the `theme` folder in this repository to the `wp-content/themes/gew/` folder in your WordPress installation.

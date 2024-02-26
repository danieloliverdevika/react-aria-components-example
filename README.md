# React Aria Components example with CSS Variable theming

This is a minimal example of how a login form UI could be implemented using React Aria Components and CSS Variables.

## Components

Components can be found in `src/components` and were taken from the React Aria Components Vanilla CSS Starter Kit at https://react-spectrum.adobe.com/react-aria/getting-started.html#starter-kits

This example has used Button, Radio, Radio Group and Text Field components and tweaked them to make more use of CSS variables to enable the different themes that have been used

## Themes

The example supports three different themes, `Default`, `Green` and `Orange` based on various projects.

Themes are defined in separate scss modules found in `src/themes` which are imported into `src/App.module.scss` so they can be applied when selected.

Each theme sets CSS variables that are applied to `:root` where the `data-theme` attribute is set to the appropriate value. These CSS variables are them implemented by each component used in the example.

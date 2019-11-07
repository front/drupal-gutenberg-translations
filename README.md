# 🏳 Drupal Gutenberg Translations

Command line to generate a translations file compatible with Drupal.

It retrieves all translations strings from Gutenberg `__()` translations functions and write as `Drupal.t()`. A new translations file `drupal-gutenberg-translations.js` will be created at given target path.

## Overview

Install it:

```
npm i drupal-gutenberg-translations --save-dev
```

or globally:

```
npm i -g drupal-gutenberg-translations
```

To generate `drupal-gutenberg-translations.js` file:

```
npx drupal-gutenberg-translations [target path]
```

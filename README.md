# 🏳 Drupal Gutenberg Translations

Command line to generate a translations file compatible with Drupal.

It retrieves all translations strings from Gutenberg `__()`, `_n()`, `_x()` and `_nx()` translation function calls and generates equivalent `Drupal.t()` and `Drupal.formatPlural()` calls.

A new translations file `drupal-gutenberg-translations.js` will be created at the given target path.

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

# SSS: Svelte Static SPA
A template repository for building a single page web app (SPA) with Svelte.

## Configure

Change app options in `sss.config.json`.

## Development

Run `npm run dev` to start the development server. Edit the svelte and typescript files in the `src` folder to make changes to your app. Change the `$OUT_DIR/index.html` file directly to make changes to your app's metadata and to add additional stylesheets or resource links.

## Build

When your app is production ready, run the following command to output the static site bundle to the `$OUT_DIR/bundle` directory:

### Linux

`npm run build`

### Windows

`npm run build-win`

## Publish

After building your bundle, publish the static files in the `$OUT_DIR` directory on the platform of your choice, or if your build directory is named `docs`, you can host them directly on github by enabling github pages to serve directly from the `docs` folder in your repository.
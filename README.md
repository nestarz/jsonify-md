<img src="https://img.shields.io/bundlephobia/minzip/jsonifymd@latest?color=%2328cb95&label=gzip" />

# jsonifymd

Convert Markdown to JSON (ESM library)

## Install

```
yarn add jsonifymd
```

# Quickstart

```js
import("https://unpkg.com/jsonifymd@latest/dist/index.es.min.js")
  .then(({ default: jsonifymd }) => {
    const config = {
      explicit: false // headings are keys of objects instead of values
    }
    const json = jsonifymd.text(markdown_text, config) // From RAW text
    const json = jsonifymd.url(markdown_url, config) // From URL
    console.log(json);
  );
});
```

## Example

https://jsonifymd.netlify.com

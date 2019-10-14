<img src="https://img.shields.io/bundlephobia/minzip/jsonifymd@latest?color=%2328cb95&label=gzip" />

# jsonifymd

Convert Markdown to JSON (ESM library)

## Install

```
yarn add jsonifymd
```

# Quickstart

```js
import("https://cdn.jsdelivr.net/npm/jsonifymd@latest/dist/index.es.min.js")
  .then(({ default: jsonifymd }) => {
    const json = jsonifymd.text(markdown_text) // From RAW text
    const json = jsonifymd.url(markdown_url) // From URL
    console.log(json);
  );
});
```

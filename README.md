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
    const json = jsonifymd.text(markdown, { toDict: true })
    console.log(json);
  );
});
```
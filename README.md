# jsonifymd

Convert Markdown to JSON (ESM library)

## Install

```
yarn add jsonifymd
```

# Quickstart

```js
import("/index.es.js").then(({ default: JsonifyMd }) => {
  this.json = JSON.stringify(
    JsonifyMd.text(this.markdown, { toDict: true }),
    null,
    4
  );
  console.log(this.json);
});
```
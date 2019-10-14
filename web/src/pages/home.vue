<template>
  <div class="home">
    <div>
      <h1>Markdown</h1>
      <textarea v-model="markdown" rows="10" cols="50"></textarea>
    </div>
    <div>
      <h1>JSON</h1>
      <textarea v-model="json" rows="10" cols="50" readonly></textarea>
    </div>
    <div class="footer">
      jsonifymd
      <span>(</span>
      <a href="https://github.com/nestarz/jsonifymd#readme">Github</a>,
      <a href="https://www.npmjs.com/package/jsonifymd">NPM</a>,
      <a href="https://github.com/nestarz">Author</a>
      <span>)</span>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      markdown: null,
      json: null
    };
  },
  watch: {
    markdown() {
      import(
        "https://unpkg.com/jsonifymd@latest/dist/index.es.min.js"
      ).then(({ default: jsonifymd }) => {
        this.json = JSON.stringify(jsonifymd.text(this.markdown), null, 4);
        console.log(this.json);
      });
    }
  }
};
</script>

<style scoped>
.home {
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  height: 100%;
}

textarea {
  width: 100%;
  height: 70vh;
  font-size: 1.5em;
}

.footer {
}
</style>
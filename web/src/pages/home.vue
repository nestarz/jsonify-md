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
    <a href="https://eliasrhouzlane.com">Elias Rhouzlane</a> -
    <a href="https://www.npmjs.com/package/jsonifymd">https://www.npmjs.com/package/jsonifymd</a>
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
      import("/index.es.js").then(({ default: JsonifyMd }) => {
        this.json = JSON.stringify(
          JsonifyMd.text(this.markdown, { toDict: true }),
          null,
          2
        );
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
</style>
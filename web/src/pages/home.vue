<template>
  <div class="home">
    <div>
      <h1>Markdown</h1>
      <textarea v-model="markdown" rows="10" cols="50"></textarea>
    </div>
    <div>
      <h1>JSON</h1>
      <textarea v-model="json" rows="10" cols="50"></textarea>
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
      console.log(this.markdown);
      import(
        "https://cdn.jsdelivr.net/npm/jsonifymd@0.1.0/dist/index.es.min.js"
      ).then(async ({ default: JsonifyMd }) => {
        this.json = JSON.stringify(
          await JsonifyMd(
            "https://raw.githubusercontent.com/Nipher/awesome-hacktivism/master/Readme.md",
            { toDict: true }
          )
        );
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
</style>
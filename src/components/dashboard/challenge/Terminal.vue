<template>
  <prism-editor
    class="my-editor"
    v-model="code"
    :highlight="highlighter"
    line-numbers
  ></prism-editor>
</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

//for syntax checking
//TODO decide on the tool that you are going to use for syntax validating
import * as esprima from "esprima"; //Note:code is not vaildate run time error because it uses ast parser to analyze the correct syntax.
import Interpreter from "js-interpreter"; //this does not support 'let' declarations.

export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    code: "",
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    },
    evalSyntax() {
      console.log("Evaluating the code...");
      console.log(this.code);
      try {
        esprima.parseScript(this.code);
        console.log("Checks passed!");
      } catch (e) {
        console.log("Oops... something wrong with your code...");
        console.log(e.message);
      }
    },
  },
  watch: {
    code() {
      this.evalSyntax();
    },
  },
};
</script>

<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>

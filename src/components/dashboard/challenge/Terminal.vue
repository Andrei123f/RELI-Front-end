<template>
  <prism-editor
    class="my-editor"
    v-bind:class="{
      'border-left-danger': stat == 'err',
      'border-left-success': stat == 'correct',
      'border-left-warning': stat == 'loading',
    }"
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
    t: null,
    err: null,
    stat: null,
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    },
    evalSyntax() {
      try {
        esprima.parseScript(this.code);
        this.stat = "correct";
      } catch (e) {
        let ep = e.message.split(":");
        this.error(ep[0], ep[1]);
      }
    },
    error(line, msg) {
      this.stat = "err";
      console.log(line);
      console.log(msg);
    },
  },
  watch: {
    code() {
      this.stat = "loading";
      if (this.t) {
        clearTimeout(this.t);
        this.t = setTimeout(this.evalSyntax, 500);
      } else {
        this.t = setTimeout(this.evalSyntax, 500);
      }
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

<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="content"
      @input="handleInput"
      ref="textInput"
      class="input p-1 w-full"
      rows="1"
      spellcheck="false"
      autocorrect="off"
      autocomplete="off"
    ></input>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    initialText: {
      type: String,
      default: ''
    },
    maxChars: {
      type: Number,
      default: null
    },
  },
  data() {
    return {
      content: this.initialText,
    };
  },
  mounted() {
    if (this.maxChars) {
      this.$refs.textInput.setAttribute('maxlength', this.maxChars);
    }
  }
};
</script>

<style>

</style>

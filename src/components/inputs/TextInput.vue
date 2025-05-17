<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="content"
      @input="handleInput"
      ref="textInput"
      :class="`input p-1 w-full h-full disabled:hover:!bg-transparent disabled:text-tertiary disabled:line-through ${textEnd ? 'text-end' : ''}`"
      rows="1"
      spellcheck="false"
      autocorrect="off"
      autocomplete="off"
      :disabled="disable"
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
    disable: {
      type: Boolean,
      default: false
    },
    textEnd: {
      type: Boolean,
      default: false
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

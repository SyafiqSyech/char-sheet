<template>
  <div>
    <textarea
      :placeholder="placeholder"
      v-model="content"
      @input="handleInput"
      ref="textAreaInput"
      class="input text-area-input p-1 w-full overflow-x-hidden"
      rows="1"
      spellcheck="false"
      autocorrect="off"
      autocomplete="off"
    ></textarea>
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
    maxHeight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: this.initialText,
    };
  },
  methods: {
    handleInput() {
      this.autoResize();
    },
    autoResize() {
      const el = this.$refs.textAreaInput;
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    },
  },
  mounted() {
    this.handleInput();
    if (this.maxChars) {
      this.$refs.textAreaInput.setAttribute('maxlength', this.maxChars);
    }
    if (this.maxHeight) {
      this.$refs.textAreaInput.classList.add('max-h-18');
    }
  }
};
</script>

<style>
.text-area-input {
  resize: none;
  white-space: normal;
  vertical-align: top;
}
</style>

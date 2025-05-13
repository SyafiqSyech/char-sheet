<template>
  <div>
    <div ref="quillContainer">
      <div ref="editor"></div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';

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
    minHeight: {
      type: String,
      default: '48'
    },
  },

  data() {
    return {
      content: this.initialText,
      quill: null
    };
  },
  
  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      theme: 'bubble',
      modules: {
        toolbar: ['bold', 'italic', 'underline']
      },
      formats: ['bold', 'italic', 'underline'],
      placeholder: this.placeholder
    });
    
    this.quill.root.setAttribute('spellcheck', 'false');
    this.quill.root.setAttribute('autocorrect', 'off');
    this.quill.root.setAttribute('autocomplete', 'off');
    this.quill.root.setAttribute('autocapitalize', 'off');

    // Set initial content
    if (this.initialText) {
      this.quill.setText(this.initialText);
    }

    // Update content on text change
    this.quill.on('text-change', () => {
      this.content = this.quill.getText().trim();
      this.$emit('input', this.content);
    });

    // Add 'input' class to the Quill editor
    const editorElement = this.$refs.editor.querySelector('.ql-editor');
    if (editorElement) {
      editorElement.classList.add('min-h-'+ this.minHeight);
    }
  }
};
</script>

<style>
.ql-editor {
  padding: 0 !important;
  font-size: 1rem !important;
}

/* .ql-snow {
  border: none !important;
}

.ql-toolbar {
  padding: 0 !important;
}

.ql-formats {
  margin: 0 !important;
} */

.ql-tooltip {
  background-color: #2a2a2a !important;
  border-radius: 50px !important;
  transform: translateY(6px) !important;
}

.ql-tooltip-arrow {
  display: none !important;
}

.ql-formats {
  margin: 6px 10px !important;
}

.ql-stroke {
  stroke: #787878 !important;
}

.ql-fill {
  fill: #787878 !important;
}

button:hover .ql-stroke {
  stroke: #f4f4f4 !important;
}

button.ql-active .ql-stroke {
  stroke: #f4f4f4 !important;
}

button:hover .ql-fill {
  fill: #f4f4f4 !important;
}

button.ql-active .ql-fill {
  fill: #f4f4f4 !important;
}

.ql-editor.ql-blank::before {
  color: #787878;
  left: 0;
}
</style>

import { Controller } from '@hotwired/stimulus'
import { defineOptions, ink } from 'ink-mde'

export default class extends Controller {
  static targets = ['editor'];

  connect() {
    const options = defineOptions({
      placeholder: "Hello, world!",
      interface: {
        appearance: 'light',
      },
    });

    ink(this.editorTarget, options);
  };
}

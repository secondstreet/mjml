import { HeadComponent } from 'browser-mjml-core'

export default class MjBreakpoint extends HeadComponent {
  static endingTag = true

  static allowedAttributes = {
    width: 'unit(px)',
  }

  handler() {
    const { add } = this.context

    add('breakpoint', this.getAttribute('width'))
  }
}

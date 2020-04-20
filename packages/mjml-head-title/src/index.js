import { HeadComponent } from 'browser-mjml-core'

export default class MjTitle extends HeadComponent {
  static endingTag = true

  handler() {
    const { add } = this.context

    add('title', this.getContent())
  }
}

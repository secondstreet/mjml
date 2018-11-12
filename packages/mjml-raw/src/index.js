import { BodyComponent } from 'browser-mjml-core'

export default class MjRaw extends BodyComponent {
  static endingTag = true
  static rawElement = true

  render() {
    return this.getContent()
  }
}

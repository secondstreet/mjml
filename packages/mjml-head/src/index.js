import { HeadComponent } from 'browser-mjml-core'

export default class MjHead extends HeadComponent {
  handler() {
    return this.handlerChildren()
  }
}

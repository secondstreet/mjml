import MjSection from 'browser-mjml-section'
import { suffixCssClasses } from 'browser-mjml-core'

export default class MjWrapper extends MjSection {
  renderWrappedChildren() {
    const { children } = this.props
    const { containerWidth } = this.context

    return `
      ${this.renderChildren(children, {
        renderer: component =>
          component.constructor.isRawElement()
            ? component.render()
            : `
          <!--[if mso | IE]>
            <tr>
              <td
                ${component.htmlAttributes({
                  align: component.getAttribute('align'),
                  class: suffixCssClasses(
                    component.getAttribute('css-class'),
                    'outlook',
                  ),
                  width: containerWidth,
                })}
              >
          <![endif]-->
            ${component.render()}
          <!--[if mso | IE]>
              </td>
            </tr>
          <![endif]-->
        `,
      })}
    `
  }
}

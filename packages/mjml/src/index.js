import mjml2html, { registerComponent } from 'browser-mjml-core'
import { registerDependencies } from 'browser-mjml-validator'

import { Social, SocialElement } from 'browser-mjml-social'
import { Navbar, NavbarLink } from 'browser-mjml-navbar'
import { Carousel, CarouselImage } from 'browser-mjml-carousel'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'browser-mjml-accordion'

registerComponent(require('browser-mjml-body'))
registerComponent(require('browser-mjml-head'))
registerComponent(require('browser-mjml-head-attributes'))
registerComponent(require('browser-mjml-head-breakpoint'))
registerComponent(require('browser-mjml-head-font'))
registerComponent(require('browser-mjml-head-preview'))
registerComponent(require('browser-mjml-head-style'))
registerComponent(require('browser-mjml-head-title'))
registerComponent(require('browser-mjml-hero'))
registerComponent(require('browser-mjml-button'))
registerComponent(require('browser-mjml-column'))
registerComponent(require('browser-mjml-divider'))
registerComponent(require('browser-mjml-group'))
registerComponent(require('browser-mjml-image'))

registerComponent(require('browser-mjml-raw'))
registerComponent(require('browser-mjml-section'))
registerComponent(require('browser-mjml-spacer'))
registerComponent(require('browser-mjml-text'))
registerComponent(require('browser-mjml-table'))
registerComponent(require('browser-mjml-wrapper'))

registerComponent(Social)
registerComponent(SocialElement)
registerComponent(Navbar)
registerComponent(NavbarLink)
registerComponent(Accordion)
registerComponent(AccordionElement)
registerComponent(AccordionText)
registerComponent(AccordionTitle)
registerComponent(Carousel)
registerComponent(CarouselImage)

registerDependencies(require('./dependencies'))

export default mjml2html

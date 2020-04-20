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

import MjBody from 'browser-mjml-body'
import MjButton from 'browser-mjml-button'
import MjColumn from 'browser-mjml-column'
import MjDivider from 'browser-mjml-divider'
import MjGroup from 'browser-mjml-group'
import MjHead from 'browser-mjml-head'
import MjHeadAttributes from 'browser-mjml-head-attributes'
import MjHeadBreakpoint from 'browser-mjml-head-breakpoint'
import MjHeadFont from 'browser-mjml-head-font'
import MjHeadPreview from 'browser-mjml-head-preview'
import MjHeadStyle from 'browser-mjml-head-style'
import MjHeadTitle from 'browser-mjml-head-title'
import MjHero from 'browser-mjml-hero'
import MjImage from 'browser-mjml-image'
import MjRaw from 'browser-mjml-raw'
import MjSection from 'browser-mjml-section'
import MjSpacer from 'browser-mjml-spacer'
import MjTable from 'browser-mjml-table'
import MjText from 'browser-mjml-text'
import MjWrapper from 'browser-mjml-wrapper'
import dependencies from './dependencies'

registerComponent(MjBody)
registerComponent(MjButton)
registerComponent(MjColumn)
registerComponent(MjDivider)
registerComponent(MjGroup)
registerComponent(MjHead)
registerComponent(MjHeadAttributes)
registerComponent(MjHeadBreakpoint)
registerComponent(MjHeadFont)
registerComponent(MjHeadPreview)
registerComponent(MjHeadStyle)
registerComponent(MjHeadTitle)
registerComponent(MjHero)
registerComponent(MjImage)
registerComponent(MjRaw)
registerComponent(MjSection)
registerComponent(MjSpacer)
registerComponent(MjTable)
registerComponent(MjText)
registerComponent(MjWrapper)

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

registerDependencies(dependencies)

export default mjml2html

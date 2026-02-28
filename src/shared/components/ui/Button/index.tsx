import PrimaryButton from './variants/PrimaryButton'
import OutlineButton from './variants/OutlineButton'
import LinkButton from './variants/LinkButton'
import GhostButton from './variants/GhostButton'

const Button = {
  primary: PrimaryButton,
  outline: OutlineButton,
  link: LinkButton,
  ghost: GhostButton
} as const

export type ButtonVariant = keyof typeof Button

export default Button

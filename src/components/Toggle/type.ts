import { MouseEventHandler } from 'react'

export interface ToggleButtonProps {
  value: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  firstContent: string
  secondContent: string
}

export interface ContentClass {
  width: number
  left: number
}

export interface ToggleButtonWidth {
  secondLabelWidth?: number
  secondLabelLeft?: number
  firstLabelLeft?: number
  firstLabelWidth?: number
}

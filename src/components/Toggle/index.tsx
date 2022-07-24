import React, { useCallback, useState } from 'react'
import { ToggleButton } from './styles'
import { ContentClass, ToggleButtonProps } from './type'

export const Toggle: React.FC<ToggleButtonProps> = ({
  value,
  onClick,
  disabled,
  firstContent,
  secondContent
}) => {
  // Labels content
  const [firstLabelContent, setFirstLabelContent] =
    useState<ContentClass | null>(null)
  const [secondLabelContent, setSecondLabelContent] =
    useState<ContentClass | null>(null)

  const firstLabelRef = useCallback((node: HTMLElement): void => {
    if (node !== null) {
      setFirstLabelContent({
        width: node.offsetWidth,
        left: node.offsetLeft
      })
    }
  }, [])

  const secondLabelRef = useCallback((node: HTMLElement): void => {
    if (node !== null) {
      setSecondLabelContent({
        width: node.offsetWidth,
        left: node.offsetLeft
      })
    }
  }, [])

  return (
    <ToggleButton
      firstLabelWidth={firstLabelContent?.width}
      secondLabelWidth={secondLabelContent?.width}
      firstLabelLeft={firstLabelContent?.left}
      secondLabelLeft={secondLabelContent?.left}
    >
      <input readOnly type="checkbox" checked={value} />
      <button
        data-testid="ToggleContainer"
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <span ref={firstLabelRef}>{firstContent}</span>
        <span ref={secondLabelRef}>{secondContent}</span>
      </button>
    </ToggleButton>
  )
}

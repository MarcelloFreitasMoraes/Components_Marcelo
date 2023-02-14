import React, { FC, useCallback, useState, ReactElement } from 'react'
import { recursiveTargetClasses } from '../../utils/recursiveTargetClasses'
import { Icon } from '@albatross/ui'
import { ButtonDropdownProps, DropdownAlignment } from './interfaces'
import { ButtonDropdownStyle, TriggerStyle } from './styles'
import { ButtonDropdownLeft } from './ButtonDropdownLeft'
import { ButtonDropdownLabel } from './ButtonDropdownLabel'
import { ButtonDropdownValue } from './ButtonDropdownValue'
import { ButtonDropdownRight } from './ButtonDropdownRight'
import { ButtonDropdownContent } from './ButtonDropdownContent'

let onClickOutside: (event: Event) => void
const hasValue = (value: ReactElement | string | undefined): boolean =>
  Boolean(value)

export const ButtonDropdown: FC<ButtonDropdownProps> = React.memo(
  ({
    children,
    closeOnClickInside = true,
    label,
    leftContent,
    align = DropdownAlignment.Left,
    onCollapse,
    onExpand,
    value,
    ...buttonProps
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const showOptions = useCallback(() => {
      setTimeout(() => {
        setIsOpen(true)

        onClickOutside = (event: Event): void => {
          const target = event.target as HTMLElement
          const familyClasses = recursiveTargetClasses(target)
          if (
            (closeOnClickInside ||
              !familyClasses.includes('button-dropdown-content')) &&
            !familyClasses.includes('search-input') &&
            target.nodeName !== 'INPUT'
          ) {
            hideOptions()
          }
        }
        onExpand && onExpand()
        document.addEventListener('click', onClickOutside)
      })
    }, [setIsOpen, onExpand])

    const hideOptions = useCallback(() => {
      setIsOpen(false)
      document.removeEventListener('click', onClickOutside)

      onCollapse && onCollapse()
    }, [setIsOpen, onCollapse])

    const toggleOptions = (): void => {
      isOpen ? hideOptions() : showOptions()
    }

    return (
      <ButtonDropdownStyle data-testid="button-dropdown-wrapper">
        <TriggerStyle
          type="button"
          isOpen={isOpen}
          onClick={toggleOptions}
          {...buttonProps}
          data-testid="button-dropdown-trigger"
        >
          <ButtonDropdownLeft>{leftContent}</ButtonDropdownLeft>
          <ButtonDropdownLabel hasValue={hasValue(value)}>
            {label}
          </ButtonDropdownLabel>
          <ButtonDropdownValue>{value}</ButtonDropdownValue>
          <ButtonDropdownRight isOpen={isOpen}>
            <Icon size="small" name="direction_down" />
          </ButtonDropdownRight>
        </TriggerStyle>
        <ButtonDropdownContent isOpen={isOpen} align={align}>
          {children}
        </ButtonDropdownContent>
      </ButtonDropdownStyle>
    )
  }
)

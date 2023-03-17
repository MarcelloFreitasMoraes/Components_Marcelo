import styled from 'styled-components'

interface AlignTextProps {
  iconLeft: boolean
}

const santander = ({ theme }: any) =>
  theme?.color?.main?.primary?.['01'] || '#EC0000'

const typeLink = ({ iconLeft }: AlignTextProps) => {
  if (iconLeft) {
    return {
      justify_content: 'left',
      flex_direction: 'row-reverse',
    }
  }
}

export const Container = styled.div``

export const AlignText = styled.div<AlignTextProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 10px;
  justify-content: ${({ iconLeft }) =>
    typeLink({ iconLeft })?.justify_content
      ? typeLink({ iconLeft })?.justify_content
      : 'none'};
  flex-direction: ${({ iconLeft }) =>
    typeLink({ iconLeft })?.flex_direction
      ? typeLink({ iconLeft })?.flex_direction
      : 'none'};
`

export const LinkAction = styled.a`
  margin: 0 10px;
  color: ${santander};
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  font-family: 'Santander Micro Text';
`
export const Icon = styled.span`
  cursor: auto;
`

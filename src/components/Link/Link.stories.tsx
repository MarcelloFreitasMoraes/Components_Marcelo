import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from './Link'
import { ArrowLeft } from '../../assets/icons/ArrowLeft'

export default {
  title: 'Context/Components/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} text="Testar" icon={<ArrowLeft />} iconLeft={true} />
)

export const LinkAction = Template.bind({})
LinkAction.args = {}

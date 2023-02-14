import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { QrCode } from './QrCode'

export default {
    title: 'Context/Components/QrCode',
    component: QrCode,
    argTypes: {},
} as ComponentMeta<typeof QrCode>

const Template: ComponentStory<typeof QrCode> = (args) => {
    const [code, setCode] = useState<string>('teste')

    return (
        <>
            <input onChange={(e) => setCode(e.target.value)}></input>
            <QrCode {...args} code={code}></QrCode>
        </>
    )
}

export const generateQrCode = Template.bind({})
generateQrCode.args = {}

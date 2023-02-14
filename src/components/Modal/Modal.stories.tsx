import React, { useState } from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'

export default {
    title: 'Context/Components/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>


const Template: ComponentStory<typeof Modal> = (args) => {
    const [isActive, setIsActive] = useState(false)

    const StyledExample = styled.div`
        display: flex;
        justify-content: center;
    `

    return (
        <>
            <button {...args} onClick={() => setIsActive(true)} data-testid='Modal'>Abrir</button>
            {isActive &&
                <Modal>
                    <StyledExample>
                        <button onClick={() => setIsActive(false)}>Fechar</button>
                    </StyledExample>
                </Modal>}
        </>
    )
}

export const ModalQr = Template.bind({})
ModalQr.args = {}

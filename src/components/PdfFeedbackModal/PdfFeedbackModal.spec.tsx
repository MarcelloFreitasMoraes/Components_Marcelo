import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import { PdfFeedbackModal } from './PdfFeedbackModal'
import { PdfFeedbackModalProps } from './interfaces'
import { act } from 'react-dom/test-utils'

describe('<PdfFeedbackModal />', () => {
  const props: PdfFeedbackModalProps = {
    setOpen: jest.fn(),
    open: true,
    status: '',
  }

  it('Should render', () => {
    const component = render(
      <PdfFeedbackModal {...props}> content </PdfFeedbackModal>
    )
    expect(component).toBeTruthy()
  })

  it('Should render with status success', () => {
    const newProps: PdfFeedbackModalProps = {
      setOpen: jest.fn(),
      open: true,
      status: 'success',
    }
    const { getByText, getByTestId } = screen
    render(<PdfFeedbackModal {...newProps}> content </PdfFeedbackModal>)
    expect(getByTestId('modal-status-title')).toHaveTextContent(
      /Successfully completed/
    )
    const button = getByText('Ok')
    act(() => {
      fireEvent.click(button)
    })
    expect(newProps.setOpen).toHaveBeenCalled()
  })

  it('Should render with status error', () => {
    const newProps: PdfFeedbackModalProps = {
      setOpen: jest.fn(),
      open: true,
      status: 'error',
    }
    const { getByText, getByTestId } = screen
    render(<PdfFeedbackModal {...newProps}> content </PdfFeedbackModal>)
    expect(getByTestId('modal-status-title')).toHaveTextContent(/We are sorry/)
    const button = getByText('Ok')
    act(() => {
      fireEvent.click(button)
    })
    expect(newProps.setOpen).toHaveBeenCalled()
  })

  it('Should render with status no content', () => {
    const newProps: PdfFeedbackModalProps = {
      setOpen: jest.fn(),
      open: true,
      status: 'noContent',
    }
    const { getByText, getByTestId } = screen
    render(<PdfFeedbackModal {...newProps}> content </PdfFeedbackModal>)
    expect(getByTestId('modal-status-title')).toHaveTextContent(/Important/)
    const button = getByText('Ok')
    act(() => {
      fireEvent.click(button)
    })
    expect(newProps.setOpen).toHaveBeenCalled()
  })
})

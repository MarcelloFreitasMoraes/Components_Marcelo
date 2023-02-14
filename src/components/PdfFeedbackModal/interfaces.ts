export interface PdfFeedbackModalProps {
  open: boolean
  setOpen: (status: boolean) => void
  status: string
  index?: number
  maxIndex?: number
}

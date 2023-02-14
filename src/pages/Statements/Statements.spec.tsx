import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import { Statements } from './Statements'
import { AlbatrossTheme } from '@albatross/ui'
import { GlobalStyles } from '../../utils/globalStyles'
import { I18n } from '@albatross/react-i18n'
import { months } from '../../utils/months'
import { sellers } from '../../utils/mock'
import { StatementsService } from '../../services/statementsService'
import { ServiceProvider } from '@albatross/react-service-provider'
import { AppContext } from '@albatross/react-app-context'
import { useStatements } from '../../hooks'

jest.mock('../../hooks')
jest.mock('file-saver', () => ({ saveAs: jest.fn() }))
const mockUseStatements = useStatements as jest.MockedFunction<any>

const renderComponent = () =>
  render(
    <AppContext.Consumer>
      {(config) => (
        <ServiceProvider config={config} services={[StatementsService]}>
          <I18n lang={'es-ar'}>
            <GlobalStyles />
            <AlbatrossTheme>
              <Statements
                tenant="santander"
                country="AR"
                userDetails={{ sellers }}
                featureToggle={{
                  operations: {
                    FT_AR_STATEMENTS_CURRENT_MONTH_FILTER: 'true',
                    FT_AR_STATEMENTS_MONTH_YEAR_FILTER: 'false',
                  },
                }}
              />
            </AlbatrossTheme>
          </I18n>
        </ServiceProvider>
      )}
    </AppContext.Consumer>
  )

describe(':: Statements', () => {
  beforeEach(() => {
    mockUseStatements.mockReturnValue({
      getStatementsReportPdf: jest.fn(),
      getStatementsReportPdfResult: {
        isLoading: false,
        data: null,
        error: false,
      },
    })
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('Should render the component', () => {
    const { getByTestId } = screen
    renderComponent()
    expect(getByTestId('statements')).toBeTruthy()
  })

  it('Should disable download button, if no month is selected', async () => {
    const { findByText, getByText, getByTestId } = screen
    renderComponent()
    expect(getByTestId('statements')).toBeTruthy()

    const triggerSeller = getByText('Select store')
    fireEvent.click(triggerSeller)
    await findByText(sellers[0].trade_name)
    fireEvent.click(getByText(sellers[0].trade_name))

    const downloadButton = getByTestId('statement-downlod-button')
    expect(downloadButton).toBeDisabled()
  })

  it('Should request downlaod statement pdf successfully', async () => {
    const { findByText, getByText, getByTestId } = screen
    renderComponent()
    expect(getByTestId('statements')).toBeTruthy()

    const today = new Date()
    today.setMonth(today.getMonth() - 1)
    const month = months[today.getMonth()]
    const year = today.getFullYear()
    const monthText = `${month}/${year}`

    const triggerSeller = getByText('Select store')
    fireEvent.click(triggerSeller)
    const searchInput = getByTestId('seller-search-input')
    fireEvent.change(searchInput, { target: { value: sellers[0].trade_name } })
    await findByText(sellers[0].trade_name)
    fireEvent.click(getByText(sellers[0].trade_name))

    const triggerMonth = getByText('Select month')
    fireEvent.click(triggerMonth)
    await findByText(monthText)
    fireEvent.click(getByText(monthText))

    mockUseStatements.mockReturnValue({
      getStatementsReportPdf: jest.fn(),
      getStatementsReportPdfResult: {
        isLoading: false,
        data: { size: 100 },
        error: false,
      },
    })

    const downloadButton = getByTestId('statement-downlod-button')
    expect(downloadButton).toBeEnabled()
    fireEvent.click(downloadButton)

    expect(getByTestId('modal-status-title')).toHaveTextContent(
      /Successfully completed/
    )

    const acceptButton = getByText('Ok')
    fireEvent.click(acceptButton)
    expect(acceptButton).not.toBeInTheDocument()
  })
})

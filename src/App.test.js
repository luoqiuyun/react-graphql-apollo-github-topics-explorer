import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import App from './App'

test('renders Qiu Yun Luo link', () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  )
  const linkElement = screen.getByText(/Qiu Yun Luo/i)
  expect(linkElement).toBeInTheDocument()
})
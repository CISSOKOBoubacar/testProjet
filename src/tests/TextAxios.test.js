import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'

// import TestAxios from './TestAxios'

jest.mock('axios')

test.skip('should display a loading text', () => {

 const { getByTestId } = render(<TestAxios />)

  expect(getByTestId('loading')).toHaveTextContent('Loading...')
})

test.skip('should load and display the data', async () => {
  const url = '/greeting'
  const { getByTestId } = render(<TestAxios url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByTestId('fetch-data'))

  const greetingData = await waitForElement(() => getByTestId('show-data'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(greetingData).toHaveTextContent('hello there')
})
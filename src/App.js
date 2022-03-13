import React, { useState } from 'react'
import SearchBar from './components/searchBar'
import PaginatedItem from './components/paginatedItem'
import { BACKEND_API } from './env'
import axios from 'axios'
import _ from 'lodash'

function App() {
  const [list, setList] = useState([])
  const [currency, setCurrency] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(null)

  const getData = async (selectedCurrencies) => {
    const allCurrencies = _.map(selectedCurrencies, currency => currency.value)
    const currencylist = allCurrencies.join()
    const url = `${BACKEND_API}?list=${currencylist}`
    const currenciesData = await axios.get(url)
    setList(currenciesData.data)
    setCurrency(currencylist)
  }

  const returnPaginatedItem = (list, itemsPerPage) => {
    console.log(itemsPerPage, 'hjgj', list)
    const sizing = (list.length === 1) ? 'col-lg-12' : 'col-lg-6'
    return list.map((currency, i) => {
      return <div className={sizing} key={i}>
        <PaginatedItem allCurrencyData={currency.List}
          itemsPerPage={itemsPerPage} />
      </div>
    })
  }

  return (
    <div className="App container">
      <SearchBar onButtonClick={(selectedCurrencies) => getData(selectedCurrencies)}
        onInputChange={(value) => setItemsPerPage(value)}
        currency={currency} />
      <div className='row'>
        {returnPaginatedItem(list, itemsPerPage)}
      </div>
    </div>
  );
}

export default App;


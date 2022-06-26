import React, { Component } from 'react'
import showCheckboxes from '../scripts'
import Swal from 'sweetalert2'

class SearchBar extends Component {
  constructor(){
      super()
      this.setNumOfItems = this.setNumOfItems.bind(this)
      this.getData = this.getData.bind(this)
  }

    getData(e) {
        e.preventDefault()
        const selectedCurrencies = document.querySelectorAll('input[type="checkbox"]:checked')
        const value = document.querySelector('#numOfItems').value
        console.log(value)
        if(value === 'items per page'){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Did you select number of items per page?',
              })
            return
        }
        this.props.onButtonClick(selectedCurrencies)

    }

    setNumOfItems(e){
       this.props.onInputChange( Number(e.target.value))
    }

    render() {
        return (
            <div className='m-3'>
                <form onSubmit={this.getData}>
                    <select id='numOfItems' onChange={this.setNumOfItems}>
                        <option id='selected'>items per page</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                    <div className="multipleSelection">
                        <div className="selectBox"
                            onClick={showCheckboxes}>
                            <select className='option'>
                                <option>select a currency(ies) to see its exchange rates</option>
                            </select>
                            <div className="overSelect"></div>
                        </div>

                        <div id="checkBoxes">
                            <label htmlFor="first">
                                <input type="checkbox" id="first" value='usd' name='currency' />
                                usd
                            </label>

                            <label htmlFor="second">
                                <input type="checkbox" id="second" value='eur' name='currency' />
                                eur
                            </label>
                            <label htmlFor="third">
                                <input type="checkbox" id="third" value='gbp' name='currency' />
                                gbp
                            </label>
                            <label htmlFor="fourth">
                                <input type="checkbox" id="fourth" value='cad' name='currency' />
                                cad
                            </label>
                        </div>
                    </div>
                    <input id='button' type='submit' className='btn btn-success' value='getPrice' />
                </form>
                <h4 className='heading'>{this.props.currency }</h4>
            </div>
        )
    }
}

<form>

</form>

export default SearchBar

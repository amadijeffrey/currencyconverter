import React, { Component } from 'react'

class CurrencyList extends Component {

    renderData() {
        if (!this.props.currentItems) {
            return
        }
        return this.props.currentItems.map((currencyData, index) => {

            return <tr key={index}>
                <td>{currencyData.pair}</td>
                <td>{Number(currencyData.bid).toFixed(7)}</td>
                <td>{Number(currencyData.ask).toFixed(7)}</td>
            </tr>

        })
    }
    render() {
        return (
            
                <table className=" table table-hover">
                    <thead>
                        <tr>
                            <td>Currency Pair</td>
                            <td>Bid</td>
                            <td>Ask</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
          
        )
    }
}

export default CurrencyList
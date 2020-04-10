import React, { Component } from 'react'
import { Cards, Charts, CountriesPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './API'
class App extends Component {
  state = {
    data: {},
    country: '',
  }
  handleCountryChange=async (country)=>{
    const fetchedData = await fetchData(country);
    console.log(fetchedData)
    this.setState({
      data: fetchedData,country:country
    })
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({
      data: fetchedData
    })
  }
  render() {
    const { data,country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountriesPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App;

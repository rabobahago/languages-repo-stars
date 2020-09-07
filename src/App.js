import React from 'react'
import Nav from './components/Nav'
import DataUpdate from './components/DataUpdate'
window.API = {
  fetchPopularRepos(language = 'all') {
    const encodedURI = encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
    )
    return fetch(encodedURI)
      .then((data) => data.json())
      .then((repos) => repos.items)
      .catch((error) => {
        console.warn(error)
        return null
      })
  },
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      activeLanguage: 'all',
      loading: true,
    }
  }
  handleSelectLanguage = (lang) => {
    this.setState(() => {
      return {
        activeLanguage: lang,
      }
    })
  }
  handleFetchRepos = (lang) => {
    this.setState(() => {
      return {
        loading: true,
      }
    })
    window.API.fetchPopularRepos(lang).then((data) => {
      this.setState(() => {
        return {
          loading: false,
          repos: data,
        }
      })
    })
  }
  render() {
    return (
      <div>
        <Nav onSelectLanguage={this.handleSelectLanguage} />
        <DataUpdate onFetchRepos={this.handleFetchRepos} state={this.state} />
      </div>
    )
  }
}

export default App

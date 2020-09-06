import React from 'react'
import Nav from './components/Nav'
const API = {
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
  fetchRepos = (lang) => {
    this.setState(() => {
      return {
        loading: true,
      }
    })
    API.fetchPopularRepos(lang).then((repos) => {
      this.setState(() => {
        return {
          loading: false,
          repos: repos,
        }
      })
    })
  }
  render() {
    return (
      <div>
        <Nav onSelectLanguage={this.handleSelectLanguage} />
        <h3>Active Language:{this.state.activeLanguage}</h3>
      </div>
    )
  }
}

export default App

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
  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

export default App

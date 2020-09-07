import React from 'react'
import Loading from './Loading'
import RepoGrid from './RepoGrid'
class DataUpdate extends React.Component {
  componentDidMount() {
    this.props.onFetchRepos(this.props.state.activeLanguage)
  }
  render() {
    const { repos, activeLanguage, loading } = this.props.state
    return (
      <>
        {loading === true ? (
          <Loading />
        ) : (
          <div>
            <h1 style={{ textAlign: 'center' }}>{activeLanguage}</h1>
            <RepoGrid repos={JSON.parse(JSON.stringify(repos))} />
          </div>
        )}
      </>
    )
  }
}
export default DataUpdate

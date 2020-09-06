import React from 'react'

const Nav = (props) => {
  const languages = ['all', 'javascript', 'ruby', 'python']
  return (
    <nav>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

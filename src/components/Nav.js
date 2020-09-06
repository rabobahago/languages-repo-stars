import React from 'react'

const Nav = ({ onSelectLanguage }) => {
  const languages = ['all', 'javascript', 'ruby', 'python']
  return (
    <nav>
      <ul>
        {languages.map((lang) => (
          <li key={lang} onClick={() => onSelectLanguage(lang)}>
            {lang}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

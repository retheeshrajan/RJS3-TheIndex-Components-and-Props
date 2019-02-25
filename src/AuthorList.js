import React, { Component } from 'react'
import authors from './data'
import AuthorCards from './AuthorCards'

class AuthorsList extends Component {
  render () {
    return (
      <div className='authors'>
        <h3>Authors</h3>
        <AuthorCards authors={authors} />
      </div>
    )
  }
}

export default AuthorsList

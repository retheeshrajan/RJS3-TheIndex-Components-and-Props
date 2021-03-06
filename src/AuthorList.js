import React, { Component } from 'react'
import authors from './data'
import AuthorCard from './AuthorCard'

class AuthorsList extends Component {
  render () {
    let authList = authors.map(author => <AuthorCard author={author} />)
    return (
      <div className='authors'>
        <h3>Authors</h3>
        <div className='row'>{authList}</div>
      </div>
    )
  }
}

export default AuthorsList

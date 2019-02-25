import React, { Component } from 'react'
import AuthorCard from './AuthorCard'

class AuthorCards extends Component {
  render () {
    let authList = this.props.authors.map(author => (
      <AuthorCard author={author} />
    ))
    return <div className='row'>{authList}</div>
  }
}

export default AuthorCards

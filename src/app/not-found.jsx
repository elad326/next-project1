import Link from 'next/link'
import React from 'react'

const notFount = () => {
  return (
    <div>
        <h2>Page not found ...404 Error</h2>
        <Link href="/">Back to Homepae</Link>
    </div>
  )
}

export default notFount
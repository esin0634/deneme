"use client"
import Link from 'next/link'
import React from 'react'

const Movie404 = () => {
  return (
    <div>
        <div>An error has occured.</div>
        <Link href="/">Go Home</Link>
    </div>
  )
}

export default Movie404
import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'

import Parent from './Parent'

export default function ApplicationRoute() {
  return (
    <>
    <Routes>

        <Route path='/parent' element={<Parent></Parent>}/>
    </Routes>
    </>
  )
}

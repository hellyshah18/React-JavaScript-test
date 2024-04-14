import React from 'react'
import { Routes, Route, Link} from "react-router-dom";
import { FakeStoreAPIProducts } from './FakeStoreAPIProducts';
import { TestForm } from './Form';



export const TestRouter = () => {
  return (
    <>
    <Link  to="/account">Navigate</Link>
    <Routes>
          <Route path="products" element={<FakeStoreAPIProducts />} />
          <Route path="contact" element={<TestForm />} />
      </Routes></>
  )
}

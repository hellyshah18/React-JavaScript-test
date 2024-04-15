import React from 'react'
import { Routes, Route} from "react-router-dom";
import { FakeStoreAPIProducts } from './FakeStoreAPIProducts';
import { TestForm } from './Form';



export const TestRouter = () => {
  return (
    <>
    <Routes>
          <Route path="/products" element={<FakeStoreAPIProducts />} />
          <Route path="/contact" element={<TestForm />} />
      </Routes></>
  )
}

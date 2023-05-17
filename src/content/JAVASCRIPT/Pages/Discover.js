import React from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Table from '../Table/Table';
import '../../CSS/Container.css'



export default function Discover() {
  return (
    <>
      <NavBar />
      <div className='Container'>
        <Table />
      </div>
      <Footer />
    </>
  )
}

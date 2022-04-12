import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import TableFeatures from './TableFeatures.jsx';
import TableHeaders from './TableHeaders.jsx';
import TableStyles from './TableStyles.jsx';
import TableSales from './TableSales.jsx';
import {show} from '../../lib/Atoms.jsx'
import React from 'react';
import {RiCloseCircleFill} from 'react-icons/ri'


const RelatedTable = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);

  const closeModal = () => {
    setShow(['none']);
  }

  const [showValue, setShow] = useRecoilState(show);

  return (
<<<<<<< HEAD
    <div>Comparing
      <table >
        <TableHeaders />
        {/* <TableSales /> */}
        <TableStyles />
        <TableFeatures />
    </table>
=======
    <div style={{position: 'absolute', left: '5%', margin: 2, fontWeight: 'bold', justifyContent: 'center'}}>Comparing
      <RiCloseCircleFill onClick={() => {
        closeModal()
      }}style={{color: 'red', position: 'absolute', right: '5%'}}/>
      <tbody>
        <table style={{border: "3px solid rgb(0, 0, 0)"}}>
          <TableHeaders />
          <TableSales />
          <TableStyles />
          <TableFeatures />
        </table>
      </tbody>
>>>>>>> e769114c697b8ae3bc0b2875706663426eb7b554
    </div>
  )
}

export default RelatedTable;
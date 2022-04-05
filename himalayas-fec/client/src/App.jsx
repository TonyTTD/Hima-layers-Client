<<<<<<< HEAD
import React, { useEffect } from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';

import Overview from './Components/Overview/Overview.jsx';

import QA from './Components/Question_Answers/qa.jsx';

import {listQuestions, listProducts, listReviews, listStyles} from './lib/searchAPI.js';
=======
import React, { useEffect } from "react";
import RelatedProducts from "./Components/Related Products/RelatedProducts.jsx";
import Overview from "./Components/Overview/Overview.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import QA from "./Components/Question_Answers/qa.jsx";
import sampleQa from './Components/Question_Answers/sampleQA.js';
import sampleMain from '../src/Components/Question_Answers/sampleMain.js';
import axios from "axios";
import { listQuestions, listProducts, listReviews } from "./lib/searchAPI.js";
import {productResponse, selectedProductId} from './lib/Atoms.jsx';
>>>>>>> master
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

<<<<<<< HEAD
export const show = atom({
  key: 'show',
  default: ['none'],
=======
export const productQ = atom({
  key: 'productQ',
  default: sampleMain,
});

const catalog = atom({
  key: 'catalog',
  default: 'main'
>>>>>>> master
})

var App = () => {

  let [prod, setProd] = useRecoilState(productQ);
  let [pageView, setPageView] = useRecoilState(catalog);

  const productData = productResponse();

  let [selectedProductID, setCurrentProductId] = useRecoilState(selectedProductId)
  //Retrieves data from the API and sets the products to state to render
  //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
      setProd(productData);
  }, []);

  //Sets the product detail page
  // var onClickProduct = (productID) => {
  //   setPageView(productID);
  // };

  var changeView = (page) => {
    setPageView(page);
    setCurrentProductId(page);

    if (pageView === 'main') {
      return (
        <table>
          <tbody>
          {prod.map((product, i) => {
            return (
              <tr key = {i}>
                <td value = {product.id} onClick={(e) => {changeView(e.target.attributes.value.value)}}>{product.name}</td>
                <td>{product.description}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      )
    } else if (pageView !== 'main') {
      return (
        <div>
        {" "}
        Himalayas For The Win
          <Overview />
          <RelatedProducts />
          <QA />
          <Reviews />
        </div>
      )
    }
  };

  return (
    <div className='nav'>
      <span className='logo' onClick={() => {changeView('main');}}>Hima-layers
      </span>
      <span className='searchbar'>
        <input type='search' placeholder='Product search...' onChange={() => {console.log('hi')}}></input>
      </span>

      <div className='main'>{changeView(pageView)}</div>
    </div>
  )

//   return (
//       <div>
//         {" "}
//         Himalayas For The Win
//           <Overview />
//           <RelatedProducts />
//           <QA />
//           <Reviews />
//       </div>
//   );
};

export default App ;


import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import StyleGallery from "./StyleGallery.jsx";
import ProductInformation from "./ProductInformation.jsx";
import StyleSelector from "./StyleSelector.jsx";
import Cart from "./Cart.jsx";
import {
  productResponse,
  categoryResponse,
  productStyles,
  stylesResponse,
  selectedProductId,
  currentProductSelector,
  currentStylesSelector,
  productQ,
} from "../../lib/Atoms.jsx";
import { selectedProduct } from "../../lib/searchAPI.js";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import './Styling/overview.scss';

const Overview = (props) => {
  const [productsArray, setProducts] = useRecoilState(productQ);
  let [selectedProductID, setCurrentProductId] =
    useRecoilState(selectedProductId);

  var currentProduct;

  productsArray.forEach((product) => {
    var stringVersion = JSON.stringify(product.id);
    if (stringVersion === selectedProductID) {
      currentProduct = product;
    }
  });

  let stylesArray = useRecoilValue(currentStylesSelector);
  if (stylesArray.results.length === 0) {
    stylesArray = null;
  }

  return (
    <div className="overview" id="overview-module">
      <StyleSelector styles={stylesArray} />
      <ProductInformation
        currentProduct={currentProduct}
<<<<<<< HEAD
        styles={stylesArray}
      />
=======
        styles={stylesArray}/>
>>>>>>> master
    </div>
  );
};

export default Overview;

import React from 'react';
import {MdOutlineAddCircle} from 'react-icons/md';
import {useRecoilState, useRecoilValue} from 'recoil';
import RelatedOutfitCard from './RelatedOutfitCard.jsx';
import {RiCloseCircleFill} from 'react-icons/ri';
import {outfitCards} from '../../lib/Atoms.jsx';
import RelatedStars from './RelatedStars.jsx';
import './relatedSass.scss';


const RelatedOutfits = () => {
const [outfitArrayValue, setOutfitArray] = useRecoilState(outfitCards)
let newValue;
const deleteCard = async (index) => {

  newValue = [...outfitArrayValue];
  newValue.splice(index, 1);

  if (index > -1) {
    setOutfitArray(newValue)
  }
}

  return (
      <div className='cloudContainer'>
      <div id='cloud-intro'>
        <div className='outfitMainOuter'>
          <div className='outfitMainInner'>
            <RelatedOutfitCard/>
          </div>
            {outfitArrayValue.map((value, index) => {
       
              return (
                <div key={index} className='outfitPicture' style={{backgroundSize: 'cover', backgroundImage: `url(${value.url})`}}>
                  <RiCloseCircleFill className='outfitCloseCircle' onClick={() => {
                    deleteCard(index)
                  }}/>
                  <div className='outfitCardFooter'>
                    <div className='outfitCategory'>{value.category}</div>
                    <div className='outfitName'>{value.name}</div>
                    <div className='outfitPrice'>${value.price}</div>
                  </div>
                </div>
                )
              }
            )
          }
        </div>
      </div>
  </div>
  )
}

export default RelatedOutfits;

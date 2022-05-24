import React, { useState, useEffect } from 'react';

const StyleGallery = (props) => {

  if (props.style.photos[0].url) {

    const [imageSelection, selectImage] = useState(props.style.photos[0].url)

    useEffect(() => {
      selectImage(props.style.photos[0].url);
    }, [props.style.photos])

    const imageSelector = (targetUrl) => {
      selectImage(targetUrl);
    }

      const photos = props.style.photos;

      return (
          <div id = "test">
          <div className="display">
            <img className="main-gal" src={imageSelection} height="600" width="800"></img>
          </div>
          <div className="galleryThumbs">
            {photos.map((photo, index) => {
              return(
                <span className="gallery-cell"
                key={index}>
                  <img src={photo.thumbnail_url} width="75" height="90"
                    url={photo.url}
                    onClick={event => imageSelector(event.target.attributes.url.nodeValue)}></img>
                </span>
              )
            })}
          </div>
          </div>
      )

  } else {

    return (
      <div className="gallery">
        <h2>Fashion Gallery</h2>
        {photos.map((photo, index) => {
          return(
            <div className="gallery-cell"
            key={index}>
              <img src={photo.thumbnail_url} width="75" height="90"
                url={photo.url}
                onClick={this.selectImage}></img>
            </div>
          )
        })}
        <img src="https://i.redd.it/xke2yxfzofu71.jpg" alt="Hang In There!" width="300" height="300"></img>
      </div>
    )
  }
}


export default StyleGallery;


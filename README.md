# Hima-Layers Retail Store

## INSTRUCTIONS:
1. ## GIT CLONE REPO
    $ git clone <repo name>
2. ## INSTALL DEPENDENCIES
    $ npm install

## SCRIPT COMMANDS
1. ## RUN BUILD TOOLS
    $ npm run client-dev
2. ## RUN IN DEV MODE WITH NODEMON
    $ npm run server-dev

## ROUTES
### Base Path
```httpg
/app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/
```
```httpg
Authorization: <GitHub Token>
```
    
### List Products
```httpg
GET /products/
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>page</td>
      <td>int</td>
      <td>Selects the page of results to return. Default 1</td>
    </tr>
    <tr>
      <td>count</td>
      <td>int</td>
      <td>Specifies how many results per page to return. Default 5</td>
    </tr>
  </tbody>
</table>
  
+ Response 200 (application/json)
```json
[
  {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },
  {
        "id": 2,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": "69"
    },
  {
        "id": 3,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40"
    },
    // ...
]
```

### Product Information
```httpg
GET /products/:product_id
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>int</td>
      <td>Requires ID of product requested</td>
    </tr>
  </tbody>
</table>
  
+ Response 200 (application/json)
```json
   
 {
    "id": 11,
    "name": "Air Minis 250",
    "slogan": "Full court support",
    "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
    "category": "Basketball Shoes",
    "default_price": "0",
    "features": [
  	{
            "feature": "Sole",
            "value": "Rubber"
        },
  	{
            "feature": "Material",
            "value": "FullControlSkin"
        },
  	// ...
    ],
}
```
    
### Product Styles
```httpg
GET /products/:product_id/styles
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>int</td>
      <td>Requires ID of product requested</td>
    </tr>
  </tbody>
</table>
  
+ Response 200 (application/json)
```json
   
 {
    "product_id": "1",
    "results": [
  	{
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": true,
            "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                },
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                }
  			// ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  {
        "style_id": 2,
        "name": "Desert Brown & Tan",
        "original_price": "140",
        "sale_price": "0",
        "default?": false,
        "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  // ...
}
```

### Related Products
```httpg
GET /products/:product_id/related
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>int</td>
      <td>Requires ID of product requested</td>
    </tr>
  </tbody>
</table>
  
+ Response 200 (application/json)
```json
[
  2,
  3,
  8,
  7
],
```
    
### List Reviews
```httpg
GET /reviews/
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>page</td>
      <td>int</td>
      <td>Selects the page of results to return. Default 1</td>
    </tr>
    <tr>
      <td>count</td>
      <td>int</td>
      <td>Specifies how many results per page to return. Default 5</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>text</td>
      <td>Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>int</td>
      <td>Specifies the product for which to retrieve reviews.</td>
    </tr>
  </tbody>
</table>
  
+ Response 200 (application/json)
```json
{
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": false,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
}
```

### Review Metadata
```httpg
GET /reviews/meta
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>int</td>
      <td>Requires ID of product requested</td>
    </tr>
  </tbody>
</table>
  
+ Response 200 (application/json)
```json
{
  "product_id": "2",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
    // ...
  },
  "recommended": {
    0: 5
    // ...
  },
  "characteristics": {
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    },
    // ...
}
``` 
    
### Add a Review
```httpg
POST /reviews
```

<table>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>int</td>
      <td>Requires ID of product requested</td>
    </tr>
    <tr>
      <td>rating</td>
      <td>int</td>
      <td>Integer (1-5) indicating the review rating</td>
    </tr>
    <tr>
      <td>summary</td>
      <td>text</td>
      <td>Summary text of the review</td>
    </tr>
    <tr>
      <td>body</td>
      <td>text</td>
      <td>Continued text of the review</td>
    </tr>
    <tr>
      <td>recommend</td>
      <td>bool</td>
      <td>Value indicating if the reviewer recommends the product</td>
    </tr>
    <tr>
      <td>name</td>
      <td>text</td>
      <td>Username for question asker</td>
    </tr>
    <tr>
      <td>email</td>
      <td>text</td>
      <td>Email address for question asker</td>
    </tr>
    <tr>
      <td>photos</td>
      <td>[text]</td>
      <td>Array of text urls that link to images to be shown</td>
    </tr>
    <tr>
      <td>characteristics</td>
      <td>object</td>
      <td>Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}</td>
    </tr>
  </tbody>
</table>
  
+ Response 201 Created (application/json)

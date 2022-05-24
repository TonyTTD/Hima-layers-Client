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


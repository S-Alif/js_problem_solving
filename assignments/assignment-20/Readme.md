## How to run the program
- Clone or download the repository
- Navigate to the folder
- In the terminal run **`npm install`**, then run **`npm start`**

## Other instruction
1. Port is `8080` by default
2. use a **`.env`** file and add the following fileds
    - **db** : your mongodb database connection link with database name
    - **port** : your desired port
3. use **`/product`** for the routes [ e.g : **/product/get-cart** ]

## Endpoints
1. **`/register`** : for registration
2. **`/login`** : for registration
2. **`/delete/:id`** : for deleteing account
3. **`/create-product`** : create a product for demo (**no need for auth**)
4. **`/create-cart`** : create a cart (**auth required**)
5. **`/get-cart/:id`** : get a cart by id (**auth required**)
6. **`/post-order`** : post a order (**auth required**)
7. **`/get-order/:id`** : get the order (**auth required**)

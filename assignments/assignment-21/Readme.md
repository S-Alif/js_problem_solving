## How to run the program
- Clone or download the repository
- Navigate to the folder
- In the terminal run **`npm install`**, then run **`npm start`**

## Other instruction
1. Port is `8080` by default
2. use a **`.env`** file and add the following fileds
    - **db** : your mongodb database connection link with database name
    - **port** : your desired port
3. use **`/api/sale`** for the routes [ e.g : **/api/sale/total-revenue** ]


## Table of contents
- [Highlighted Endpoint](#highlighted-endpoint)
- [Product model](#product-model)
- [Postman online documentation](#postman-online-documentation)
- [Demo sale body](#demo-sale-body)
- [Sample data show](#sample-data-show)


## Highlighted Endpoint
1. **`/enter-sales`** : for entering demo sales data

## Product model

```
const salesSchema = mongoose.Schema({

  product: { type: String, required: true },
  quantity: { type: Number },
  price: { type: Number },
  date: { type: Date },

  // for salary expense
  dept: {type : String},
  soldAt: {type : Number} /* the price each product was sold to a customer*/

}, { timestamps: true, versionKey: false })
```

I used extra two fields `dept` and `soldAt`, to calculate department salary expense. Total revenue for anything comes from **`quantity X soldAt` `-` `quantity X price`**.

> `price` is used as buying price for per unit product <br>
> `soldAt` is used as selling price for per unit product


## Postman online documentation
 - [documnetation](https://documenter.getpostman.com/view/27171367/2s9YC1Wa2m)


## Demo sale body

```
{
    "product" : "chicken",
    "quantity" : 200,
    "price" : 10,
    "date" : "2022-05-05T00:00:00.000Z",
    "dept" : "food",
    "soldAt" : 13
}
```

Copy and paste into postman to enter sales data.
> Demo sale data can be found [here](https://github.com/S-Alif/assignments/blob/main/product-management.sales.json). Import this in mongodb compass

### Sample data show
<hr>

1. **total revenue** : 

```
{
    "status": 1,
    "data": [
        {
            "totalSales": 6482,
            "total_Buying_Price": 352020,
            "total_selling_price": 408672,
            "totalRevenue": 56652
        }
    ]
}
```
2. **quantity-by-product** :

```
{
    "status": 1,
    "data": [
        {
            "totalSale": 3300,
            "product": "rice"
        },
        {
            "totalSale": 56,
            "product": "iphone-12"
        },
        {
            "totalSale": 1046,
            "product": "white shirt"
        },
        {
            "totalSale": 98,
            "product": "samsung s-22"
        },
        {
            "totalSale": 1242,
            "product": "chicken"
        },
        {
            "totalSale": 740,
            "product": "red shirt"
        }
    ]
}
```

3. **top-products** :

```
{
    "status": 1,
    "data": [
        {
            "totalSales": 98,
            "product": "samsung s-22",
            "totalRevenue": 26200
        },
        {
            "totalSales": 56,
            "product": "iphone-12",
            "totalRevenue": 8000
        },
        {
            "totalSales": 3300,
            "product": "rice",
            "totalRevenue": 7510
        },
        {
            "totalSales": 1046,
            "product": "white shirt",
            "totalRevenue": 5876
        },
        {
            "totalSales": 1242,
            "product": "chicken",
            "totalRevenue": 4596
        }
    ]
}
```

4. **average-price** :

```
{
    "status": 1,
    "data": {
        "avgPrice": {
            "totalSales": 6482,
            "totalRevenue": 56652,
            "total_avg_price_per_unit_product_sold": 8.74
        },
        "avgPrice_per_product": [
            {
                "totalSales": 3300,
                "totalRevenue": 7510,
                "product": "rice",
                "avg_price_per_this_unit_product_sold": 2.28
            },
            {
                "totalSales": 56,
                "totalRevenue": 8000,
                "product": "iphone-12",
                "avg_price_per_this_unit_product_sold": 142.86
            },
            {
                "totalSales": 1046,
                "totalRevenue": 5876,
                "product": "white shirt",
                "avg_price_per_this_unit_product_sold": 5.62
            },
            {
                "totalSales": 98,
                "totalRevenue": 26200,
                "product": "samsung s-22",
                "avg_price_per_this_unit_product_sold": 267.35
            },
            {
                "totalSales": 1242,
                "totalRevenue": 4596,
                "product": "chicken",
                "avg_price_per_this_unit_product_sold": 3.7
            },
            {
                "totalSales": 740,
                "totalRevenue": 4470,
                "product": "red shirt",
                "avg_price_per_this_unit_product_sold": 6.04
            }
        ]
    }
}
```

5. **revenue-by-month** :

```
{
    "status": 1,
    "data": [
        {
            "month": 6,
            "year": 2023,
            "totalRevenue": 15111
        },
        {
            "month": 5,
            "year": 2023,
            "totalRevenue": 17511
        },
        {
            "month": 6,
            "year": 2022,
            "totalRevenue": 12290
        },
        {
            "month": 5,
            "year": 2022,
            "totalRevenue": 11740
        }
    ]
}
```

6.  **highest-quantity-sold** : 

```
{
    "status": 1,
    "data": [
        {
            "totalQuantity": 810,
            "product": "rice",
            "date": "2023-05-07"
        }
    ]
}
```

7. **department-salary-expense** :

```
{
    "status": 1,
    "data": [
        {
            "dept_total_product_sale": 1786,
            "total_salary_exp": 89300,
            "dept_total_sale_amount": 99646,
            "department": "cloth",
            "dept_total_revenue": 10346
        },
        {
            "dept_total_product_sale": 154,
            "total_salary_exp": 233800,
            "dept_total_sale_amount": 268000,
            "department": "phone",
            "dept_total_revenue": 34200
        },
        {
            "dept_total_product_sale": 4542,
            "total_salary_exp": 28920,
            "dept_total_sale_amount": 41026,
            "department": "food",
            "dept_total_revenue": 12106
        }
    ]
}
```
const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")


const port = process.env.PORT || 4001;

//Routes
// using comment to auto generate swagger doc 
/**
 * @openapi
 * /customers:
 *   get:
 *     description: to get all customers info
 *     responses:
 *       200:
 *         description: Response is successful
 */
// getting list of customers 
app.get('/customers', (req, res) => {
    res.send('List of customers')
})
// checked on postman to ensure API is working - http://localhost:4001/customers


/**
 * @openapi
 * /customer:
 *   put:
 *     description: update a particular customer info
 *     responses:
 *       200:
 *         description: Update is successful
 */
// getting list of customers 
app.put('/customer/', (req, res) => {
    res.send('Successfully updated customer')
})

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Sable Customer API",
            description: "API to discover Sable's customer information"
        },
        servers: [`http://localhost:${port}`],
    },
    // our routes - we have only one in this project
    apis: ["app.js"]
    // but if we have multiple routes - e.g. [".routes/*.js"]
}

// allows us to pass in our config we just created
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

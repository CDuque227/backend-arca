/*=============================================
=            Initialize the Application       =
=============================================*/
const app = require('./app/app');
require('dotenv').config()


app.listen(process.env.PORT, () =>{
    console.log("application running in port: ", process.env.PORT);
});

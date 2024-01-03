// import mongoose from "mongoose";
// import { getSchema } from "../models/Number.js"

// // numbers db
// // const connUri = process.env.MONGO_NUMBERS_CONN_URL;
// const connUri = process.env.MONGO_LOCAL_CONN_URL;
// const conn = mongoose.createConnection(connUri, {
//     ssl: true,
//     // For example, see https://medium.com/@rajanmaharjan/secure-your-mongodb-connections-ssl-tls-92e2addb3c89
//     // for where the `rootCA.pem` file comes from.
//     // Please note that, in Mongoose >= 5.8.3, `sslCA` needs to be
//     // the **path to** the CA file, **not** the contents of the CA file
//     tlsCAFile: `./mongoKey/ca.pem`,
//     tlsCertificateKeyFile: `./mongoKey/client.pem`,
//     tlsAllowInvalidHostnames: true,
//     tlsAllowInvalidCertificates: false,
//     serverSelectionTimeoutMS: 60000,
// });

// conn.once("open", () =>
//     console.log(
//         "MongoDB --  numbers database connection established 成功!"
//     )
// );
// conn.on("error", (err) => {
//     console.log(
//         "MongoDB connection error. Please make sure MongoDB is running. " + err
//     );
//     process.exit();
// });

// function getModel(conn, collectionName) {
//     return conn.model(collectionName, getSchema(collectionName));
// }

// export default {
//     IDN: getModel(conn, "62_indonesia"),
//     IND: getModel(conn, "91_india"),
//     PHL: getModel(conn, "63_philippines"),
//     THA: getModel(conn, "66_TH"),
// };

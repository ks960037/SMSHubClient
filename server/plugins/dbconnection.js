import mongoose from "mongoose";

export default async () => {
    const config = useRuntimeConfig();
    try {
        const DB_OPTIONS = {
            dbName: config.dbName,
            user: config.user,
            pass: config.pass,
            authSource: config.authSource
        }
        // const DB_OPTIONS = {
        //     dbName: "sample_airbnb",
        //     user: "screen",
        //     pass: "RplsnPs5L6xCgHR5"
        // }
        console.log("try......");
        await mongoose.connect(config.dburl, DB_OPTIONS)
        console.log("資料庫連線成功");
    } catch (error) {
        console.log(error);
    }
}
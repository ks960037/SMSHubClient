import dbconnection from "../plugins/dbconnection.js";
import PHNumber from "../models/PHNumber.js";

export default defineEventHandler(async (event) => {
    console.log("插入資料");
    // 連線
    dbconnection();

    let n = new PHNumber({
        _id: null,
        phone_number: "0012345678",
        update_at: new Date(),
        exported_at: new Date()
    });

    try {
        let saved = await n.save();
        console.log(saved.phone_number);
    } catch (err) {
        console.log(err);
    }
})
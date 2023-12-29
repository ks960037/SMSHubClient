import mongoose from "mongoose";

// {
// "_id" : ObjectId("5f572f6f771ff988c1794832"),
// "phone_number" : "號碼",
// "tags" : "標籤",
// "users" : "用戶名",
// "update_at" : 更新日期,
// "exported_at" : 導出日期
// }
const postSchema = new mongoose.Schema({
    phone_number: { type: String, require: true, trim: true },
    tags: { type: String, require: true, trim: true },
    users: { type: String, require: true, trim: true },
    update_at: { type: String, require: true, trim: true },
    exported_at: { type: String, require: true, trim: true }
})

const PostModel = mongoose.model('post', postSchema);
export default PostModel;
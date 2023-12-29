import PostModel from "../models/Post";

export default defineEventHandler(async (event) => {
    try {
        let result = 1;
        const response = await PostModel.find();
        if (response) {
            return response;
        } else {
            return result;
        }
    } catch (error) {
        console.log(error);
    }
})

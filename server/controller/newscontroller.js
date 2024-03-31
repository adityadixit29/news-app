import { News } from "../model/news.js";

export const addNews = async (req, res) => {
    try {
        const { title, subtitle, image, content, likes, views, comments } = req.body;

        const news = await News.create({
            title,
            subtitle,
            image,
            content,
            likes,
            views,
            comments

        })
        res.status(201).json({
            success: true,
            // news,
            message:"News Added Successfully"


        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getnews = async (req, res) => {
    try {
        

        const getnews = await News.find();
        res.status(201).json({
            success: true,
            getnews,


        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getSinglenews = async (req, res) => {
    try {
        
        const {id} = req.params;
        const getSinglenews = await News.findById(id);
        res.status(201).json({
            success: true,
            getSinglenews,


        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getlikes = async (req, res) => {

    try {
        const allNews = await News.find({}, 'title likes'); // Fetch only title and likes fields
        res.status(200).json({
            success: true,
            likes: allNews
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const getviews = async (req, res) => {

    try {
        const allviews = await News.find({}, 'title views'); // Fetch only title and likes fields
        res.status(200).json({
            success: true,
            views: allviews
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const getcomments = async (req, res) => {

    try {
        const allcomments = await News.find({}, 'title comments'); // Fetch only title and likes fields
        res.status(200).json({
            success: true,
            comments: allcomments
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
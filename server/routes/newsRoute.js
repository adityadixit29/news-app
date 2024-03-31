import express from "express"
import {addNews, getSinglenews, getcomments, getlikes, getnews, getviews} from "../controller/newscontroller.js"
const router = express.Router();

router.post('/newsubmit', addNews);
router.get('/getnews', getnews);
router.get('/getsinglenews/:id', getSinglenews);
router.get('/getlikes', getlikes);
router.get('/getviews', getviews);
router.get('/getcomments', getcomments);

export default router
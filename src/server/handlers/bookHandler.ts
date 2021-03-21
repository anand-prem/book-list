import {Request, Response} from "express";
import BooksService from "../services/BooksService";

const bookService = new BooksService();

interface IReqQuery {
    query?: string;
    pagenumber?: number;
    pagecount?: number;
}

async function bookHandler(req: Request, res: Response) {
    try {
        const {query, pagenumber: pageNumber, pagecount: pageCount} = req.query as IReqQuery;
        const books = await bookService.list(query, pageNumber, pageCount);
        res.status(200).send(books);
    } catch (e) {
        console.log("Error from downstream service (books API): ", e);
        res.status(503).send('Downstream service issue');
    }

}

export default bookHandler;

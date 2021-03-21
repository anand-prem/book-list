import BooksService from "../Services/BooksService";

export const BOOK_LIST_ACTIONS = {
    GET_ALL_BOOKS: "FETCH/BOOK_LIST",
    GET_ALL_BOOKS_SUCCESS: "FETCH/BOOK_LIST/SUCCESS",
    GET_ALL_BOOKS_FAILURE: "FETCH/BOOK_LIST/FAILURE",
}

const bookService = new BooksService();

export const getAllBooks = async (dispatch: any, query?: string) => {
    try {
        dispatch({
            type: BOOK_LIST_ACTIONS.GET_ALL_BOOKS,
        });
        const books = await bookService.list(query);
        dispatch({
            type: BOOK_LIST_ACTIONS.GET_ALL_BOOKS_SUCCESS,
            payload: {books}
        });
    } catch (e) {
        dispatch({
            type: BOOK_LIST_ACTIONS.GET_ALL_BOOKS_FAILURE,
        });
    }
}

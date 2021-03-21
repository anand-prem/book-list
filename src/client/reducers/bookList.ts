import {BOOK_LIST_ACTIONS} from "../actions/bookList";

interface IAction {
    type: string;
    payload: any;
}

const initialState = {list: [], isBooksFetched: false, isFetching: false};

const books = (state = initialState, action: IAction) => {
    switch (action.type) {
        case BOOK_LIST_ACTIONS.GET_ALL_BOOKS:
            return {
                ...state,
                isFetching: true,
                list: [],
            };
        case BOOK_LIST_ACTIONS.GET_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                isBooksFetched: true,
                isFetching: false,
                list: [...action.payload.books.items],
            };
        case BOOK_LIST_ACTIONS.GET_ALL_BOOKS_FAILURE:
            return {
                ...state,
                isBooksFetched: true,
                isFetching: false,
                list: [],
            };
        default:
            return state
    }
}

export default books;

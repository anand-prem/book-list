import IService from "./IService";

const BASE_URL = 'http://localhost:8050/api';
const DEFAULT_QUERY = 'kaplan';

export default class BooksService implements IService {
    list = async (query = '', pageNumber = 1, pageCount = 20) => {
        try {
            const url = `${BASE_URL}/books/list?query=${query.length > 0 ? query : DEFAULT_QUERY}&pagenumber=${pageNumber}&pagecount=${pageCount}`;
            const response: Response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            return response.json();
        } catch (e) {
            throw new Error(e);
        }
    }
}

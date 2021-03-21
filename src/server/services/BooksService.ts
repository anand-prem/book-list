import IService from './IService';
import fetch from 'node-fetch';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const DEFAULT_QUERY = 'kaplan';

export default class BooksService implements IService {
    list = async (query = '', pageNumber = 1, pageCount = 20) => {
        const url = `${BASE_URL}?q=${query.length > 0 ? query : DEFAULT_QUERY}&startIndex=${pageNumber}&maxResults=${pageCount}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.json();
    }
}

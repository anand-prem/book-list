export default interface IService {
    list: (query?: string, pageNumber?: number, pageCount?: number) => void;
}

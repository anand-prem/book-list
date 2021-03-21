import * as React from 'react';
import {v4 as uuidv4} from 'uuid';
import {connect, ConnectedComponent} from 'react-redux'
import BookListItem, {IBook} from './bookListItem';
import {getAllBooks} from '../../actions/bookList';
import SearchBar from './searchBar';
import '../../Less/bookList.less';

interface IBookListProps {
    books: IBook[];
    isBooksFetched: boolean;
    isFetching: boolean;
}

interface IBookListDispatchProps {
    getAllBooks: (query?: string) => void;
}

class BookList extends React.Component<IBookListProps & IBookListDispatchProps> {
    componentDidMount() {
        if (!this.props.isBooksFetched) {
            this.props.getAllBooks();
        }
    }

    onChangeSearchField = (query: string) => {
        this.props.getAllBooks(query);
    }

    render() {
        const {isFetching, books, isBooksFetched} = this.props;
        return (
            <>
                <SearchBar onChange={this.onChangeSearchField}/>
                <div className="bookList">
                    {
                        isFetching ?
                            <div>Loading...</div> :
                            books.map(book => <BookListItem key={uuidv4()} {...book}/>)
                    }
                    {
                        !isFetching && isBooksFetched && books.length === 0 && <div>Something went wrong</div>
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        books: state.books.list,
        isBooksFetched: state.books.isBooksFetched,
        isFetching: state.books.isFetching,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    getAllBooks: (query?: string) => getAllBooks(dispatch, query),
});

const connectedBookList: ConnectedComponent<any, any> = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default connectedBookList;

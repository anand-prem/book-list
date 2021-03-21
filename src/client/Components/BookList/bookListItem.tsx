import * as React from 'react';
import classNames from 'classnames/bind'
import '../../Less/bookListItem.less';

interface IVolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
}

export interface IBook {
  kind: string;
  id: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
}

const bookTitleClassName = classNames('bookTitle', 'ellipsisText');

const BookCard = (props: IBook) => {
  return (
    <div className='bookListItemCard'>
      <div className={bookTitleClassName} title={props.volumeInfo.title}>
        {props.volumeInfo.title}
      </div>
      <div className='ellipsisText' title={props.volumeInfo.authors && props.volumeInfo.authors.join(', ')}>
          Authors: {props.volumeInfo.authors}
      </div>
      <div>Publisher: {props.volumeInfo.publisher ? props.volumeInfo.publisher : 'Not Available'}</div>
      <div>Published Date: {props.volumeInfo.publishedDate}</div>
    </div>
  );
}

export default function BookListItem(props: IBook) {
  return <BookCard {...props} />
}

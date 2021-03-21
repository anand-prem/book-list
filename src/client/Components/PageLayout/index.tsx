import * as React from 'react';
import '../../Less/pageLayout.less';

interface IPageLayoutProps {
    header: JSX.Element;
    content: JSX.Element;
    sideMenuBar: JSX.Element;
}

export default class PageLayout extends React.Component<IPageLayoutProps> {
    render() {
        const { header, content, sideMenuBar } = this.props;
        return (
            <div>
                <div className='pageHeader'>
                    {header}
                </div>
                <div className='pageContent'>
                    <div>{sideMenuBar}</div>
                    <div className='content'>{content}</div>
                </div>
            </div>
        );
    }
}

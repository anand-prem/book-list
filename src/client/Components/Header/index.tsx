import * as React from 'react';
import '../../Less/header.less';

const HEADER_TEXT = 'Books';

export default function Header() {
    return (
        <div className={'header'}>{HEADER_TEXT}</div>
    );
}

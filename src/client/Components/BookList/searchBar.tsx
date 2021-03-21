import * as React from 'react';
import * as lodash from 'lodash';

const SEARCH_FIELD_CHANGE_DELAY = 1000;
interface ISearchBarProps {
    onChange: (query: string) => void;
}

const onSearchInputChange = (query: string, onChange: (q: string) => void) => onChange(query);
const debouncedOnSearchInputChange = lodash.debounce(onSearchInputChange, SEARCH_FIELD_CHANGE_DELAY);

function SearchBar(props: ISearchBarProps) {
    return (
        <input
            type='search'
            name='bookSearch'
            placeholder='Search'
            onChange={(e) => debouncedOnSearchInputChange(e.target.value, props.onChange)}
        />);
}

export default SearchBar;

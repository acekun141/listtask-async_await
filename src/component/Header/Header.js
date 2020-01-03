import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editSearch } from '../../redux/reducer/search/action';

const Header = (props, ) => {
    const [search, setSearch] = useState(props.search);

    useEffect(() => {
        setSearch(props.search);
    }, [props.search]);
   
    let handleInput = (value) => {
        props.editSearch(value);
    }

    return (
        <div className="section-header">
            <div className="module-content">
                <p className="title">List Task</p>
                <input type="text"
                       placeholder="Search"
                       onChange={e => handleInput(e.target.value)}
                       value={search}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    search: state.search,
})

export default connect(mapStateToProps, { editSearch })(Header);
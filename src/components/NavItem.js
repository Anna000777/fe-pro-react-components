import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({link, text}) => {
    return (
        <li className="nav-list__item">
            <a href={link}>
                {text}
            </a>
        </li>
    );
};

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default NavItem;
import React from 'react'
import { Link } from 'react-router-dom';

const NavbarVertical = () => {
    return (
        <div>
            <div className="sidebar__nav">
                <ul>
                    <Link to='' className='sidebar__navLink'>
                        <li>
                            <i className="fas fa-desktop mx-1"></i> <span>Dashboard</span>
                        </li>
                    </Link>

                    <Link to='' className='sidebar__navLink'>
                        <li>

                            <i className="fas fa-th-large mx-1"></i> <span>Games</span>
                        </li>
                    </Link>

                    <Link to='' className='sidebar__navLink'>
                        <li>
                            <i className="fas fa-cogs mx-1"></i> <span>Statistics</span>
                        </li>
                    </Link>

                    <Link to='' className='sidebar__navLink'>
                        <li>
                            <i className="fas fa-info-circle mx-1"></i> <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavbarVertical

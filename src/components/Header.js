import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Link to='/'>
                            <img src="./images/infi_img.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-md-10">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

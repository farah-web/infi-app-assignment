import React from 'react'
import { Link } from 'react-router-dom'

const MainScreen = () => {
    return (
        <div className='mainscreen'>
            <div className="container">
                <div className="row">
                    <h1 className='text-center my-2'><strong>Games</strong></h1>
                    <h2><i>Farah Rashid test yourself.</i></h2>

                    <div className="col-md-11 block welcome-block mx-auto my-5">
                        <h5 className='text-center p-3'>Hello, Welcome to the Exploring Infinities, Hope you're doing well</h5>
                    </div>

                    <div className=" row mainscreen__block d-flex justify-content-center align-items-center my-4">

                        <Link to='/add' className="col-md-3 block add-block m-2 text-center p-3">
                            <i className="fas fa-plus fa-4x"></i>
                            <h1>Addition Challenge</h1>
                            <small>DO THE CHALLENGE!</small>
                        </Link>

                        <Link to='/multiply' className="col-md-3 block multiply-block m-2 text-center p-3">
                            <i className="fas fa-times fa-4x"></i>
                            <h1>Multiplcation Challenge</h1>
                            <small>DO THE CHALLENGE!</small>
                        </Link>

                        <Link to='/square' className="col-md-3 block square-block m-2 text-center p-3">
                            <i className="fas fa-superscript fa-4x"></i>
                            <h1>Squares Challenge</h1>
                            <small>DO THE CHALLENGE!</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainScreen

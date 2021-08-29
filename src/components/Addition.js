import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom'
import Timer from '../components/Timer'
import { Button, Modal } from 'react-bootstrap';


const Addition = () => {

    const [addend1, setAddend1] = useState(Math.floor(Math.random() * 100))
    const [addend2, setAddend2] = useState(Math.floor(Math.random() * 100))
    const [addend3, setAddend3] = useState(Math.floor(Math.random() * 100))
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [sum, setSum] = useState('')
    const [counter, setCounter] = useState(0)
    const [status, setStatus] = useState(0)


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setStatus(1);
        setShow(false);
    }

    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow()

    }, [])

    const sumHandler = () => {
        setCounter(preStat => preStat + 1)
        let correctSum = addend1 + addend2 + addend3;
        if (sum) {
            if (correctSum === parseInt(sum)) {
                setCorrect(preStat => preStat + 1)
                setSum('')
            }
            else {
                setWrong(preStat => preStat + 1)
                setSum('')
            }

        } else {
            setWrong(preStat => preStat + 1)
            setSum('')
        }

        setAddend1(Math.floor(Math.random() * 100))
        setAddend2(Math.floor(Math.random() * 100))
        setAddend3(Math.floor(Math.random() * 100))
    }


    return (
        <div className='addition'>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-md-12 p-0 m-0">
                        <Header />
                    </div>

                    <div className="col-md-2 p-0 m-0">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 p-0 m-0 main">
                        <div className="container addscreen">

                            <div className="row">
                                <h1 className='text-center my-2'><strong>Addition Games</strong></h1>
                                <h3 className="my-5">Hello Farah Rashid!</h3>

                                {counter < 10 ?
                                    (


                                        <div className=" row addscreen d-flex justify-content-around align-items-center">
                                            <div className="col-sm-12 col-md-4 calc-sum my-4">
                                                <div className="addend">
                                                    <div><h2>{addend1}</h2></div>
                                                    <div><h2>+{addend2}</h2></div>
                                                    <div><h2>+{addend3}</h2></div>
                                                </div>
                                                <input autoFocus className='my-3 p-2' type="text" value={sum} onChange={e => setSum(e.target.value)} />
                                                <button className='btn btn-primary my-3 p-2' onClick={sumHandler}>Submit</button>
                                            </div>

                                            <div className="col-sm-12 col-md-6 calc-result">
                                                {status === 1 && <Timer counter={{ counter }} />}


                                                {counter === 0 ?
                                                    <div>
                                                        <div className="correct"><h2>Once you start the game</h2></div>
                                                        <div className="wrong"><h2>your result will be shown here</h2></div>
                                                    </div>
                                                    : <div>
                                                        <div className="correct"><h2>Correct answers are: {correct}</h2></div>
                                                        <div className="wrong"><h2>Wrong answers are: {wrong}</h2></div>
                                                    </div>
                                                }

                                            </div>
                                        </div>

                                    )
                                    :
                                    (
                                        <div className="row m-0 addscreen d-flex justify-content-center align-items-center">
                                            <div className="col-sm-12 col-md-6 calc-result">
                                                {status === 1 && <Timer />}
                                                <div className='my-3'><h1>** Game Completed **</h1></div>
                                                <div className="correct"><h2>Correct answers are: {correct}</h2></div>
                                                <div className="wrong"><h2>Wrong answers are: {wrong}</h2></div>
                                                <Link to='/'><button className='btn btn-primary p-3'>Go Back to Games</button></Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Body className='text-center'><i className="fas fa-info-circle fa-6x"></i>
                            <h2>You are about to start!</h2>
                            <p>Do this as fast as you can</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn btn-primary' onClick={handleClose}>
                                Start
                            </Button>
                            <Link to='/'><Button className='btn btn-danger'> Cancel</Button></Link>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </div>
    )
}

export default Addition

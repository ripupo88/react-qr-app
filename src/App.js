import QrReader from 'react-qr-reader';
import React from 'react';
import './App.css';
import moment from 'moment';
import 'moment/locale/es';

function App() {
    const handleScan = (e) => {
        console.log(e);
    };

    moment.locale('es');
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));

    return (
        <div>
            <div className='fecha'>
                <p>
                    <small> {moment().format('dddd, MMMM Do YYYY,')}</small>{' '}
                    <b>{moment().format('h:mm:ss a')}</b>
                </p>
            </div>
            <QrReader
                delay={300}
                onError={(e) => console.log(e)}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <div>
                <table className='table table-bordered table-striped'>
                    <thead class='thead-dark'>
                        <tr>
                            <th scope='col'>Lunes</th>
                            <th scope='col'>Martes</th>
                            <th scope='col'>Miercoles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mañana</td>
                            <td>Mañana</td>
                            <td>Mañana</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div className='row '>
                        <div className='col-3'>
                            <div> Entrada:</div>
                            <div> Salida:</div>
                        </div>
                        <div className='col-4'>
                            <div>
                                <b>13:21 pm</b>
                            </div>
                            <div>
                                <b>__:____ __</b>
                            </div>
                        </div>
                        <div className='col-5'>
                            <h3>00:25:14</h3>
                        </div>
                    </div>
                </div>
                <div class='table-responsive sgvsrgvwrgv'>
                    <table className='table table-bordered table-striped overflow-hidden'>
                        <thead class='thead-dark'>
                            <tr>
                                <th colspan='3' scope='col'>
                                    Septiembre
                                </th>

                                <th colspan='11' scope='col'>
                                    Octubre
                                </th>
                            </tr>
                        </thead>
                        <thead class='thead-dark'>
                            <tr>
                                <th scope='col'>28</th>
                                <th scope='col'>29</th>
                                <th scope='col'>30</th>
                                <th scope='col'>1</th>
                                <th scope='col'>2</th>
                                <th scope='col'>3</th>
                                <th scope='col'>4</th>
                                <th scope='col'>5</th>
                                <th scope='col'>6</th>
                                <th scope='col'>7</th>
                                <th scope='col'>8</th>
                                <th scope='col'>9</th>
                                <th scope='col'>10</th>
                                <th scope='col'>11</th>
                            </tr>
                        </thead>
                        <thead class='thead-dark'>
                            <tr>
                                <th scope='col'>L</th>
                                <th scope='col'>M</th>
                                <th scope='col'>X</th>
                                <th scope='col'>J</th>
                                <th scope='col'>V</th>
                                <th scope='col'>S</th>
                                <th scope='col'>D</th>
                                <th scope='col'>L</th>
                                <th scope='col'>M</th>
                                <th scope='col'>X</th>
                                <th scope='col'>J</th>
                                <th scope='col'>V</th>
                                <th scope='col'>S</th>
                                <th scope='col'>D</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>M</td>
                                <td>M</td>
                                <td>T</td>
                                <td></td>
                                <td></td>
                                <td>N</td>
                                <td>N</td>
                                <td>M</td>
                                <td>M</td>
                                <td>T</td>
                                <td></td>
                                <td></td>
                                <td>N</td>
                                <td>N</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;

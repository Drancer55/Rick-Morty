import React, { useState } from 'react';
import { useFetch } from '../data/UseFetch';
import { ImBackward, ImForward2 } from "react-icons/im";
import Cards from './Cards';
import Button from 'react-bootstrap/Button';
import './cards.css'

const Characters = () => {
    // Paginación y cards
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    const state = useFetch(url);
    const { loading, data } = state;
    
    // loading ? console.log('cargando') : console.log(data)
    
    return (
        <div className='Characters-show'>
            {
                loading ?
                    <h5 className='loading'>Cargando...</h5> :
                    <div className='pagination'>
                        <div>
                            {
                                data.info.prev ?
                                    <Button className="pag-btns" variant="dark" onClick={() => setUrl(data.info.prev)} ><ImBackward />  Prev</Button> :
                                    null
                            }
                            {
                                data.info.next ?
                                    <Button className="pag-btns" variant="dark" onClick={() => setUrl(data.info.next)} >Next  <ImForward2 /></Button> :
                                    null
                            }
                        </div>
                        <div>
                            <Cards results={data.results} />
                        </div>
                        <div>
                            {
                                data.info.prev ?
                                    <Button variant="dark" className="pag-btns" onClick={() => setUrl(data.info.prev)} ><ImBackward />  Prev</Button> :
                                    null
                            }
                            {
                                data.info.next ?
                                    <Button variant="dark" className="pag-btns" onClick={() => setUrl(data.info.next)} >Next  <ImForward2 /></Button> :
                                    null
                            }
                        </div>    
                    </div>
                }
            </div>
        
        )
    }

export default Characters
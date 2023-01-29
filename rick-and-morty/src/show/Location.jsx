import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useFetch } from '../data/UseFetch';

const Location = ({ locationUrl }) => {
    
    const [url, setUrl] = useState(locationUrl);
    const state = useFetch(url);
    const { loading, data } = state;

    // loading ? console.log('cargando') : console.log(data)

    return (
        <div>
            {loading ?
                <h5 className='loading'>Loading...</h5> :
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>{data.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <h6>Type: </h6><p>{data.type}</p>
                                        <h6>Dimension: </h6><p>{data.dimension}</p>
                                    </div>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                }
        </div>
    )
}

export default Location
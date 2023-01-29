import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { MdFemale, MdMale } from "react-icons/md";
import { GoQuestion, GoCheck } from "react-icons/go";
import SeeMore from './SeeMore';
import { FaSkull } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './cards.css';

const Cards = ({ results }) => {
    // Cards by Bootstrap
    const [search, setSearch] = useState('');
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    // Buscador
    const resultados = !search ? results : results.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()));
        
    return (
        <>
            <div className='search'>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search character"
                        className="m-1"
                        aria-label="Search"
                        onChange={handleChange}
                    />
                </Form>
            </div>
            <div className='Cards'>
                {resultados.map((character) => {
                    return (
                        <Card text="dark" key={character.id} className='oneCard' body='false' style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={character.image} alt={character.name} style={{ width: '8.5rem' }} />
                            <Card.Body className='cardBody'>
                                <Card.Title className='cardName'>{character.name}</Card.Title>
                                <Card.Text className='cardText'>
                                    <div>
                                        Gender: {(character.gender === 'Female' && <MdFemale className='famale' />) ||
                                            (character.gender === 'Male' && <MdMale className='male' />) ||
                                            (character.gender === 'unknown' && <GoQuestion className='unknown' />)}
                                        Alive: {(character.status === 'Alive' && <GoCheck className='check' />) ||
                                            (character.status === 'Dead' && <FaSkull className='x' />) ||
                                            (character.status === 'unknown' && <GoQuestion className='unknown' />)}
                                    </div>
                                    <div>{character.species}</div>
                                    <br />
                                    <SeeMore
                                        name={character.name}
                                        specie={character.species}
                                        location={character.location.name}
                                        locationUrl={character.location.url}
                                        origin={character.origin.name}
                                        originUrl={character.origin.url} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </>
    )
}

export default Cards
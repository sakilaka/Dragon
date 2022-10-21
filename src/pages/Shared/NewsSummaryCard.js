import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    console.log(news);

    const { _id, title, image_url, author, total_view, details, rating } = news;

    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Card.Img className='rounded-circle' variant="top" src={author?.img} style={{ height: '60px', width: '60px' }} />
                        <div className='ms-3'>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>

                    <div className=''>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt className='ms-2'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>
                                    {details.slice(0, 250) + '...'}
                                    <Link to={`/news/${_id}`}>Read More</Link>
                                </p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye className='me-2'></FaEye>
                        <p>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};


export default NewsSummaryCard;
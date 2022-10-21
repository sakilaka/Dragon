import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaWhatsapp, FaTwitter, FaTwitch, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import Carosel from './Carosel';

const RightNav = () => {
    return (
        <div>
            <div className='mb-4'>
                <Button className='w-100 mb-3' variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='w-100' variant='outline-dark'> <FaGithub></FaGithub>  Login with Github</Button>
            </div>
            <div>
                <h5>Find us on</h5>
                <div className='mt-4'>
                    <ListGroup>
                        <ListGroup.Item className='mb-3'> <FaWhatsapp></FaWhatsapp>
                            Whatsapp
                        </ListGroup.Item>
                        <ListGroup.Item className='mb-3'> <FaTwitter></FaTwitter> Twiiter </ListGroup.Item>
                        <ListGroup.Item className='mb-3'> <FaTwitch></FaTwitch> Twitch </ListGroup.Item>
                        <ListGroup.Item className='mb-3'> <FaFacebookMessenger></FaFacebookMessenger> Messenger </ListGroup.Item>
                        <ListGroup.Item className='mb-3'> <FaInstagram></FaInstagram> Instagram </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <div>
                <Carosel></Carosel>
            </div>

        </div>
    );
};

export default RightNav;
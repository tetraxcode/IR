import './App.css'
import {Card} from 'react-bootstrap'
import { useState } from 'react';

export default function Hadoop() {
    const [results, Setresults] = useState([{tweet:{'title':'Example title', 'tweet': 'Here the tweet will be displayed','hashtags':['hashtag1','hashtag2','hahstag2'],'createdat':'03-07-2022','geo':['33.983967','-117.328528']}}, 'json2', 'json3']);
    return (
        <div>
            <div className='time'>
                <h6>About 1,080,000,000 results (0.63 seconds)
                </h6>
            </div>
            <div className='results1'>
                {
                results.map((result, i) => {
                    return (
                        <div className='result'>
                            <Card>
                                <Card.Header style={
                                    {textAlign: 'left'}
                                }>Tweet1</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p> {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                                                                                                                                                                                                                                        erat a ante.{' '} </p>
                                        <footer className="blockquote-footer">
                                            Someone famous in
                                            <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

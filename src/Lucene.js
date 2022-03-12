import './App.css'
import {Card} from 'react-bootstrap'
import { useState } from 'react';

export default function Lucene() {
    const [results, Setresults] = useState([
        {'user':'@mesiowlw', 'tweet': 'RT @HiiroKanon: 【第一回】簪 音織VS緋色カノンVALORANTcustom🌟 https://t.co/lVc7CJifAX https://t.co/ZWtGJ1vYxa','hashtags':'','createdat':'2022-01-30T09:31:36.000Z','geo':['33.983967','-117.328528'],'source':'Twitter for iPhone'},
        {'user':'@Sova1int', 'tweet': 'RT @Sentinels: In response to the rumors, we have provided a list of all active trials for our Valorant head coach position.','hashtags':'#vct #valorant #sentinels #tenz','createdat':'2022-01-30T09:31:36.000Z','geo':['33.983967','-117.328528'],'source':'Twitter for iPhone'},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
    ]);
    return (
        <div>
            <div className='time'>
                <small>About 46 results (0.32 seconds)
                </small>
            </div>
            <div className='results1'>
                {
                    results.map((result, i) => {
                        return (
                            <div className='result'>
                                <Card>
                                    <Card.Header style={
                                        {textAlign: 'left'}
                                    }>{result['user']}</Card.Header>
                                    <Card.Body>
                                        <h4>{result['tweet']}</h4>
                                        <h5>{result['hashtags']}</h5>
                                        <h6>{result['createdat']}</h6>
                                        <h6>{result['source']}</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                } </div>
        </div>
    );
}

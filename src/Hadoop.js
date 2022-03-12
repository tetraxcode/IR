import './App.css'
import {Card} from 'react-bootstrap'
import { useState } from 'react';

export default function Hadoop() {
    const [results, Setresults] = useState([
        {'user':'@PrimeAerknight', 'tweet': 'RT @VALORANTING: Leaked map update: https://t.co/FLjDSuxaHJ','hashtags':'','createdat':'2022-01-30T09:23:39.000Z','geo':['33.983967','-117.328528'],'source':'Twitter for Android'}, 
        {'user':'@numa11398', 'tweet': 'RT @il16_cha: みんなとヴァロするよーん #新人配信者 #VALORANT / 下手なのは許して https://t.co/5n1wnOJxQN','hashtags':'#新人配信者 #VALORANT ','createdat':'2022-01-30T09:24:15.000Z','geo':['33.983967','-117.328528'],'source':'Twitter for iPhone'}, 
        {'user':'@0BarryAllen', 'tweet': 'RT @asaonokeitora: #VALORANT\n\nせっかくエコラン強かったのに自分語りキモすぎて味方が限界を迎えた https://t.co/dKuMFvaeq1','hashtags':'#VALORANT','createdat':'2022-01-30T09:30:30.000Z','geo':['33.983967','-117.328528'],'source':'Twitter for iPhone'},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
        {'user':'', 'tweet': '','hashtags':'','createdat':'','geo':['33.983967','-117.328528'],'source':''},
    ]);
    return (
        <div>
            <div className='time'>
                <small>About 38 results (0.14 seconds)
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
            }
            </div>
        </div>
    );
}

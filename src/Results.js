import React, {Component} from 'react'
import Navigationv2 from './Navigationv2';
import {Card, Tab, Tabs} from 'react-bootstrap';
import './App.css'
import Hadoop from './Hadoop'
import Lucene from './Lucene'
import Map from './map'

export default function Results() {
    return (
        <div>
            <Navigationv2/>
            <div className='switch'>
                <Tabs defaultActiveKey="hadoop" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="hadoop" title="Hadoop">
                        <Hadoop/> </Tab>
                    <Tab eventKey="lucene" title="Lucene">
                        <Lucene/> </Tab>
                    <Tab eventKey="maps" title="Maps">
                        <Map/> </Tab>
                </Tabs>
            </div>
            
        </div>
    );
}

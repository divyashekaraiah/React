import React from 'react';
import { Page } from '../components/Page'
import  Controls  from '../components/Controls'
import Map from '../components/Map'
import {MapProvider} from 'react-map-gl';

export const Home = () => {
    return (
        <>
        <Page title="Home">
            Home
            
            </Page>
            <MapProvider>
        <Controls/>
            <Map/></MapProvider></>
    )
}
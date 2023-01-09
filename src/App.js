// import { useState } from 'react'
// import ReactMapGl from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css';


// function App() {
//   const [viewport, setViewport] = useState({
//     width: "500vw",
//     height: "400vh",
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom:80
//   })
//   return (
//     <div className="App">
//       <ReactMapGl
//         {...viewport}
//         // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//         mapboxAccessToken=
//                  'pk.eyJ1Ijoic2RpdnlhMTM1IiwiYSI6ImNsY29lNms5ZTAwN3Ezb3RpcDhxbGJ6cmQifQ.e3NHcxaiiK3Ag9PfX3FgZg'
//         onViewportChange={nextViewport=>setViewport(nextViewport)}
//       />
//     </div>
//   );
// }

// export default App;


// import * as React from 'react';
// import Map from 'react-map-gl';
// // import PinDropIcon from '@mui/icons-material/PinDrop';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import Map1 fro./components/Mapap1'

// const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2RpdnlhMTM1IiwiYSI6ImNsY29lNms5ZTAwN3Ezb3RpcDhxbGJ6cmQifQ.e3NHcxaiiK3Ag9PfX3FgZg'; // Set your mapbox token here

// export default function MapView() {
//   return (
//     <>
//     <Map
//       id="mymap"
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 800, height: 600}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       mapboxAccessToken={MAPBOX_TOKEN}
     
//       />
//       <Map1/>
//     </>
//   );
// }


import  React from 'react';

// import {MapProvider} from 'react-map-gl';
// import Map from './components/Map';
// import Controls from './components/Controls';
// import TextForm from './components/TextForm'
import { Wrapper } from './components/Wrapper';
import { NavBar } from './components/NavBar';
import { useRoutes } from 'hookrouter'
import {About} from './Pages/About'
import {Home} from './Pages/Home'
import {Contacts} from './Pages/Contacts'
import { NotFound } from './Pages/NotFound';

const routes = {
  "/":()=><Home/>,
  "/about*": () => <About />,
  "/contacts/:name": ({ name }) => <Contacts name= {name} />,

};

function App() {
  const match = useRoutes(routes);
  
  return (
    
      <Wrapper>
      <NavBar/>
      
        {match || <NotFound/>}
     
     </Wrapper>
    
  );

}
// render(<App />, document.body.appendChild(document.createElement('div')));

 export default App;
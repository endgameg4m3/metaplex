import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ReactGA from 'react-ga';
const TRACKING_ID = "206705232-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const CreateReactAppEntryPoint = dynamic(() => import('../App'), {
  ssr: false,
});

function App() {
  return <CreateReactAppEntryPoint />;
}

export default App;

import AdmissionForm from './AdmissionForm.component';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [windowHeight, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="App h-full flex justify-center align-center font-mono" style={{ height: windowHeight }}>
      <AdmissionForm />
    </div>
  );
}

export default App;

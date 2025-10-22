import { useEffect, useState } from 'react';
import { pingServer } from './services/api';

function App() {
  const [serverMsg, setServerMsg] = useState('...');

  useEffect(() => {
    pingServer().then(setServerMsg);
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-indigo-500">Aurora Shelf</h1>
      <p className="mt-4 text-gray-700">{serverMsg}</p>
    </div>
  );
}

export default App;

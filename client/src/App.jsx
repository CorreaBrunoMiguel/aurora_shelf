import { useEffect, useState } from 'react';
import { pingServer, pingData } from './services/api';

function App() {
  const [serverMsg, setServerMsg] = useState('...');
  const [dataStatus, setDataStatus] = useState('...');

  useEffect(() => {
    pingServer()
      .then(setServerMsg)
      .catch(() => setServerMsg('Erro server.'));

    pingData()
      .then((d) => setDataStatus(d.status))
      .catch(() => setDataStatus('Erro data'));
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-indigo-500">Aurora Shelf</h1>
      <p className="mt-4 text-gray-700">{serverMsg}</p>
      <p className="mt-2 text-gray-600">Data: {dataStatus}</p>
    </div>
  );
}

export default App;

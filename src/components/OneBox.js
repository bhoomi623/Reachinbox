import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useShortcuts} from '../utils/shortcuts';

function OneBox() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios.get('/onebox/list')
      .then(res => setThreads(res.data))
      .catch(err => console.error(err));
  }, []);

  useShortcuts({
    'D': (thread_id) => axios.delete(`/onebox/${thread_id}`).then(() => {/* update state */}),
    'R': (thread_id) => {/* handle reply */},
  });

  return (
    <div className="onebox-container">
      {/* Render threads */}
    </div>
  );
}

export default OneBox;

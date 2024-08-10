import React, { useState } from 'react';
import './Editor.css';

function CustomEditor() {
  const [content, setContent] = useState('');

  const handleSave = () => {
    // Save logic
  };

  return (
    <div className="editor-container">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="editor"
      />
      <button onClick={handleSave}>SAVE</button>
    </div>
  );
}

export default CustomEditor;

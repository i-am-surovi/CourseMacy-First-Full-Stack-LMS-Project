import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextEditor = () => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null); // Store the Quill instance

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return <div ref={editorRef} />;
};

export default TextEditor;

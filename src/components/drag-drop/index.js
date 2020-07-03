/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DragAndDrop = ({ children, handleDrop }) => {
  const [dragging, setDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);

  const dropRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDragging(true);
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragCounter === 0) setDragging(true);
  };
  const handleDropImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      setDragCounter(0);
    }
  };

  useEffect(() => {
    const div = dropRef.current;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDropImage);

    return () => {
      const dropDiv = dropRef.current;
      dropDiv.removeEventListener('dragenter', handleDragIn);
      dropDiv.removeEventListener('dragleave', handleDragOut);
      dropDiv.removeEventListener('dragover', handleDrag);
      dropDiv.removeEventListener('drop', handleDropImage);
    };
  }, [handleDragIn, handleDragOut, handleDropImage]);

  return (
    <div
      ref={dropRef}
    >
      {dragging && (
        <div className="drag">
          <div className="drop" />
        </div>
      )}
      {children}
    </div>
  );
};

DragAndDrop.propTypes = {
  children: PropTypes.any,
  handleDrop: PropTypes.func,
};

export default DragAndDrop;

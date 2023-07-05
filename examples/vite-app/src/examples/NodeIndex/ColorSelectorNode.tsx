import React, { memo, FC, CSSProperties, useCallback } from 'react';
import { Handle, Position, NodeProps, Connection, Edge, useOnViewportChange, Viewport } from '@bharatpatil/reactflow';

const targetHandleStyle: CSSProperties = { background: '#555' };
const sourceHandleStyleB: CSSProperties = {
  ...targetHandleStyle,
  bottom: 10,
  top: 'auto',
};

const ColorSelectorNode: FC<NodeProps> = ({ data, isConnectable, index }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} style={targetHandleStyle} />
      <div>
        Node Index: <strong>{index}</strong>
      </div>
      <Handle type="source" position={Position.Right} id="b" style={sourceHandleStyleB} isConnectable={isConnectable} />
    </>
  );
};

export default memo(ColorSelectorNode);

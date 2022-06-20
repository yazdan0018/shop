import React from 'react';

const RenderIf = ({ children, isTrue }) => isTrue ? children : null;

export default RenderIf;
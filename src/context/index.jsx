import React, { createContext, useState } from 'react';
import { responseSchema } from '../mock/reponse';

const domBeginState = responseSchema

const DOMContext = createContext({
  dom:{ ... domBeginState },
  setDom: () => {},
});

const DOMProvider = ({ children }) => {
  const [dom, setDom] = useState({ ... domBeginState});

  return (
    <DOMContext.Provider value={{ dom, setDom }}>
      {children}
    </DOMContext.Provider>
  );
};

export { DOMContext, DOMProvider };
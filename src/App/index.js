import React, { useRef } from "react";
import { Provider } from "react-redux";

import AppRouter from "components/routers/AppRouter";
import generateStore from "store/generateStore";

function App() {
  const storeRef = useRef(null);
  if (storeRef.current === null) {
    storeRef.current = generateStore();
  }

  return (
    <Provider store={storeRef.current}>
      <AppRouter />
    </Provider>
  );
}

export default App;

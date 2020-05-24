import { useEffect } from "react";

import useAsyncResourceGetter from "lib/utilities/hooks/useAsyncResourceGetter";

function useAsyncResource(getterFn = null, resourceDefaultValue = null) {
  const {
    get,
    resource,
    loading,
    success,
    error,
    reset
  } = useAsyncResourceGetter(getterFn);

  useEffect(() => {
    if (getterFn === null) {
      reset();
    } else {
      get();
    }
  }, [getterFn, get, reset]);

  return {
    resource,
    loading,
    success,
    error
  };
}

export default useAsyncResource;

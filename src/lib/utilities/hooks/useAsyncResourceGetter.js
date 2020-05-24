import { useState, useCallback } from "react";

import useAsyncStatus from "lib/utilities/hooks/useAsyncStatus";

function useAsyncResourceGetter(getterFn, resourceDefaultValue = null) {
  const [resource, setResource] = useState(resourceDefaultValue);
  const {
    loading,
    success,
    error,
    onLoading,
    onSuccess,
    onError,
    onReset
  } = useAsyncStatus();

  const get = useCallback(async (...args) => {
    onLoading();
    try {
      const result = await getterFn();
      onSuccess();

      setResource(result);
      return result;
    } catch (err) {
      onError(err);

      return err;
    }
  }, [getterFn, onLoading, onSuccess, onError]);

  const reset = useCallback(() => {
    onReset();
    setResource(resourceDefaultValue);
  }, [onReset, resourceDefaultValue]);

  return {
    get,
    resource,
    loading,
    success,
    error,
    reset
  };
}

export default useAsyncResourceGetter;

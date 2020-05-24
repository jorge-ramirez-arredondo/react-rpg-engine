import { useState, useCallback } from "react";

function useAsyncStatus() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const onSuccess = useCallback(() => {
    setLoading(false);
    setSuccess(true);
    setError(null);
  }, []);

  const onError = useCallback((resError) => {
    setLoading(false);
    setSuccess(false);
    setError(resError);
  }, []);

  const onReset = useCallback(() => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  }, []);

  return {
    loading,
    success,
    error,
    onLoading,
    onSuccess,
    onError,
    onReset
  };
}

export default useAsyncStatus;

import { useState } from 'react';

export const useFetching = callback => {
  const [isLoading, setIsLoadind] = useState(false);
  const [error, serError] = useState(' ');

  const fetching = async () => {
    try {
      setIsLoadind(true);
      await callback();
    } catch (e) {
      serError(e.message);
    } finally {
      setIsLoadind(false);
    }
  };
  return [fetching, isLoading, error];
};

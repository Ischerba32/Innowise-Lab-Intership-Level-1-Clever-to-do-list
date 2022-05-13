import { useState, useRef, useCallback, useEffect } from 'react';

export const useInfiniteScroll = () => {
  const [month, setMonth] = useState<number>(1);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback((entries: any[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setMonth((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef, month };
};

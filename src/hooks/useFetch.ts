import { Moment } from 'moment';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getDays } from '../helpers/calendar';

export const useFetch = (month: number) => {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<Moment[]>([]);

  const getNextMonthDays = useCallback(() => {
    setLoading(true);
    setError(false);
    const calendar = getDays(month);
    // пофиксить чтобы возвращал не полбностью новый массив а только новую часть
    // setList(prev => [...prev, ...calendar]);

    setList(calendar);
    setLoading(false);
  }, [month]);

  useEffect(() => {
    getNextMonthDays();
  }, [month, getNextMonthDays]);

  return {list, loading, error};
};

// export const useFetch = (month: number) => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [list, setList] = useState<Moment[]>([]);

//   const getNextMonthDays = useCallback(() => {
//     setLoading(true);
//     const calendar = getDays(month);
//     // пофиксить чтобы возвращал не полбностью новый массив а только новую часть
//     // setList(prev => [...prev, ...calendar]);

//     setList(calendar);
//     setLoading(false);
//   }, [month]);


//   useEffect(() => {
//     getNextMonthDays();
//   }, [month, getNextMonthDays]);

//   return {list, loading};

// }
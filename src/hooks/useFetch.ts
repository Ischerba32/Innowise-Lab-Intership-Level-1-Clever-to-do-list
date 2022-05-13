import { Moment } from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { getDays } from '../helpers/calendar';

export const useFetch = (month: number) => {
  const [list, setList] = useState<Moment[]>([]);

  const getNextMonthDays = useCallback(() => {
    const calendar = getDays(month);
    setList(calendar);
  }, [month]);

  useEffect(() => {
    getNextMonthDays();
  }, [month, getNextMonthDays]);

  return {list};
};

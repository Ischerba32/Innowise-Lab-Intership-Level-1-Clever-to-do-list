import { Moment } from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { getDays } from '../helpers/calendar';

export const useMonth = (month: number) => {
  const [days, setDays] = useState<Moment[]>([]);

  const getNextMonthDays = useCallback(() => {
    const calendar = getDays(month);
    setDays(calendar);
  }, [month]);

  useEffect(() => {
    getNextMonthDays();
  }, [month, getNextMonthDays]);

  return {days};
};

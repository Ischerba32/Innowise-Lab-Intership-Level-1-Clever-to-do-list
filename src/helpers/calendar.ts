import moment, {Moment} from 'moment';

moment.updateLocale('en', {
  week: {
    dow: 1
  }
});

export const getDays = (month: number) => {
  const currentDay = moment();
  const futureMonth = moment(currentDay).add(`${month}`, 'M').add('1', 'day');

  const calendar: Moment[] = [];
  const day = currentDay.clone();

  while(!day.isSameOrAfter(futureMonth)) {
    calendar.push(day.clone());
    day.add('1', 'day');
  }

  return calendar;
};
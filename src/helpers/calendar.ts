import moment, {Moment} from 'moment';

moment.updateLocale('en', {
  week: {
    dow: 1
  }
});

// export const calendar: Moment[] = [];

export const getDays = (month: number) => {
  const currentDay = moment();
  // const futureMonth = moment(currentDay).add(1, 'M').add('1', 'day');
  const futureMonth = moment(currentDay).add(`${month}`, 'M').add('1', 'day');
  console.log(futureMonth.format('YYYY-MM-DD'));


  const calendar: Moment[] = [];
  const day = currentDay.clone();

  while(!day.isSameOrAfter(futureMonth)) {
    calendar.push(day.clone());
    day.add('1', 'day');
  }

  // currentDay = day.clone();

  return calendar;
};

// export const currentDay = moment();
// export const endMonthDay = moment().endOf('month');


// export const day = currentDay.clone();

// while(!day.isSameOrAfter(endMonthDay)) {
//   calendar.push(day.clone());
//   day.add('1', 'day');
// }



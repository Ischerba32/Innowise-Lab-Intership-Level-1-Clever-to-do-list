import moment, {Moment} from 'moment';

moment.updateLocale('en', {
  week: {
    dow: 1
  }
});

export const currentDay = moment();
export const endMonthDay = moment().endOf('month');

export const calendar: Moment[] = [];

export const day = currentDay.clone();

while(!day.isSameOrAfter(endMonthDay)) {
  calendar.push(day.clone());
  day.add('1', 'day');
}



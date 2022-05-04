import { Moment } from "moment";

export default interface IDayProps {
  day: Moment;
  activeDay: string;
  setActiveDay: (activeDay: string) => void;
  dot: 'complete' | 'incomplete' | 'both' | 'none';
}
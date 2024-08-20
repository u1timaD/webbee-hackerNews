import { fromUnixTime, format } from 'date-fns';

export const formatTime = (time: number): string => {
  const actualDate = fromUnixTime(time);
  const formattedDate = format(actualDate, 'dd - MM - yyyy');
  return formattedDate;
};

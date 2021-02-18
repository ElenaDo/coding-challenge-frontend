import dayjs from 'dayjs';

function formatDate(date, format) {
  return dayjs(date).format(format);
}

export default formatDate;

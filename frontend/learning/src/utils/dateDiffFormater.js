import moment from "moment";

export const dateDiffFormater = (dueDate) => {
  const now = new Date();

  const ends = moment(dueDate);
  const from = moment(now);
  const duration = moment.duration(ends.diff(from));
  const {_data} = moment(duration).endOf("days")._i;
    return `${_data.days}d: ${_data.hours}h: ${_data.minutes}min`
};

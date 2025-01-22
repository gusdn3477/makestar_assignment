export const formatDate = (date: string) => {
  const dateTime = new Date(date);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1; // 월은 0부터 시작
  const day = dateTime.getDate();
  const koreanFormat = `${year}.${month}.${day}`;
  return koreanFormat;
};

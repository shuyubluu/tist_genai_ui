export function compareDate(
  firstDate: { year: string; month: string; day: string },
  secondDate: { year: string; month: string; day: string }
) {
  // 如果兩者都是空的
  if (
    !firstDate.year &&
    !firstDate.month &&
    !firstDate.day &&
    !secondDate.year &&
    !secondDate.month &&
    !secondDate.day
  ) {
    return true;
  }

  const firstYear = parseInt(firstDate.year);
  const firstMonth = parseInt(firstDate.month);
  const firstDay = parseInt(firstDate.day);

  const secondYear = parseInt(secondDate.year);
  const secondMonth = parseInt(secondDate.month);
  const secondDay = parseInt(secondDate.day);

  // 先比較年份
  if (firstYear < secondYear) {
    return true;
  } else if (firstYear > secondYear) {
    return false;
  }

  // 若年份相等，繼續比較月份
  if (firstMonth < secondMonth) {
    return true;
  } else if (firstMonth > secondMonth) {
    return false;
  }

  // 若月份也相等，繼續比較日期
  return firstDay <= secondDay;
}

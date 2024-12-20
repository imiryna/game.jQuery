expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2023-03": {
    "07": {
      food: [20, 11.9, 30.2, 11.9],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
};

function toFirstSunday(month, year) {
  let tempDate = new Date();
  tempDate.setHours(0, 0, 0, 0);
  tempDate.setMonth(month);
  tempDate.setYear(year);
  tempDate.setDate(1);

  let day = tempDate.getDay();
  let toNextSun = day !== 0 ? 7 - day : 0;

  tempDate.setDate(tempDate.getDate() + toNextSun);
  let arr = [...Array(toNextSun + 1).keys()].map((item) => item + 1);

  return arr;
}

function objectIsEmpty(objForCheck) {
  return Object.keys(objForCheck).length === 0 && objForCheck.constructor === Object;
}

function solution1(expenses) {
  let result = null;
  let daysValue = [];

  for (let month of Object.keys(expenses)) {
    //exclude empty obj
    if (objectIsEmpty(expenses[month])) continue;
    const monthExpenses = expenses[month];

    //calculate with toFirstSunday() possible days
    const date = month.split("-");
    const daysToSun = toFirstSunday(Number(date[1]) - 1, date[0]);

    //collect values

    for (let day of Object.keys(monthExpenses)) {
      if (!daysToSun.includes(Number(day))) continue;

      daysValue = daysValue.concat(Object.values(monthExpenses[day]).flat(1));
    }
  }

  daysValue.sort((a, b) => a - b);

  //find median

  const n = daysValue.length;
  if (n === 0) return null;

  if (n % 2 === 1) {
    //case if odd
    const medianIndex = (n + 1) / 2 - 1;
    result = daysValue[medianIndex];
  } else {
    result = (daysValue[n / 2 - 1] + daysValue[n / 2]) / 2;
  }

  return result;
}

function solution2(expenses) {
  let result = null;
  let daysValue = [];

  for (let month of Object.keys(expenses)) {
    //exclude empty obj
    if (objectIsEmpty(expenses[month])) continue;
    const monthExpenses = expenses[month];

    //calculate with toFirstSunday() possible days
    const date = month.split("-");
    const daysToSun = toFirstSunday(Number(date[1]) - 1, date[0]);

    //collect values

    for (let day of Object.keys(monthExpenses)) {
      if (!daysToSun.includes(Number(day))) continue;

      daysValue = daysValue.concat(Object.values(monthExpenses[day]).flat(1));
    }
  }

  daysValue.sort((a, b) => a - b); // acording to JavaScript documentation Arrays.sort() only uses quicksort on primitive types. For Object[] or collections (Collections.sort()) merge sort is used.

  //find median

  const n = daysValue.length;
  if (n === 0) return null;

  // for findin medianIndex we can use quick select, but I think simple arifmetical operation will be more effectively.

  if (n % 2 === 1) {
    //case if odd
    const medianIndex = (n + 1) / 2 - 1;
    result = daysValue[medianIndex];
  } else {
    result = (daysValue[n / 2 - 1] + daysValue[n / 2]) / 2;
  }

  return result;
}

solution1(expenses);

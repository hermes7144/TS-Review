{
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Friday;
  console.log(day);
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  type DayOfWeek = 'Monday';
  let dayOfWeek: DayOfWeek = 'Monday';
}

export enum RecurringTypeEnum {
  EARNING = 'earning',
  EXPENSES = 'expenses'
}

export enum RecurrenceEnum {
  ONCE = 'ONCE', // happens only once
  DAILY = 'DAILY', // every day
  WEEKDAYS = 'WEEKDAYS', // every Monday to Friday
  WEEKLY = 'WEEKLY', // every week (same day of week)
  BI_WEEKLY = 'BI_WEEKLY', // every 2 weeks
  MONTHLY = 'MONTHLY', // every month (same day of month)
  QUARTERLY = 'QUARTERLY', // every 3 months
  SEMI_ANNUALLY = 'SEMI_ANNUALLY', // every 6 months
  ANNUALLY = 'ANNUALLY', // every year
  EVERY_X_DAYS = 'EVERY_X_DAYS', // custom: every N days
  EVERY_X_WEEKS = 'EVERY_X_WEEKS', // custom: every N weeks
  EVERY_X_MONTHS = 'EVERY_X_MONTHS', // custom: every N months
  EVERY_X_YEARS = 'EVERY_X_YEARS', // custom: every N years
}

import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export function createEventId() {
  return String(eventGuid++);
}

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
    extendedProps: {
      ownerId: '123',
      detail: 'This is a detailed description for the all-day event.',
    },
  },
  {
    id: createEventId(),
    title: 'Training',
    start: TODAY_STR + 'T09:38:00',
    end: TODAY_STR + 'T15:00:00',
    extendedProps: {
      ownerId: '123',
      detail:
        'This is a detailed description for the timed event in the morning.',
    },
  },
  {
    id: createEventId(),
    title: 'Training',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    extendedProps: {
      ownerId: '124',
      detail:
        'This is a detailed description for the timed event in the afternoon.',
    },
  },
  {
    id: createEventId(),
    title: 'Lunching',
    start: '2024-08-06T12:00:00',
    end: '2024-08-06T14:00:00',
    extendedProps: {
      ownerId: '124',
      detail: 'This is a detailed description for the lunch event.',
    },
  },
//   {
//     id: createEventId(),
//     title: 'On Business Trip',
//     start: '2024-06-02T09:33:20',
//     end: '2024-06-08T20:41:20',
//     extendedProps: {
//       ownerId: '123',
//       location: '小琉球',
//       summary: 'This is a summary description for the business trip event.',
//       detail: 'This is a detailed description for the business trip event.',
//     },
//   },
  {
    id: createEventId(),
    title: 'On Business Trip',
    start: '2024-08-02T09:33:20',
    end: '2024-08-08T20:41:20',
    extendedProps: {
      ownerId: '123',
      location: '小琉球',
      summary: 'This is a summary description for the business trip event.',
      detail: 'This is a detailed description for the business trip event.',
    },
  },
  {
    id: createEventId(),
    title: 'On Trip',
    start: '2024-08-03T01:20:10',
    end: '2024-08-07T22:00:00',
    extendedProps: {
      ownerId: '124',
      location: '小琉球',
      summary: 'This is a summary description for the business trip event.',
      detail: 'This is a detailed description for the business trip event.',
    },
  },
  {
    id: createEventId(),
    title: 'On Business Trip',
    start: '2024-08-05',
    end: '',
    extendedProps: {
      ownerId: '123',
      location: '小琉球',
      summary: 'This is a summary description for the business trip event.',
      detail: 'This is a detailed description for the business trip event.',
    },
  },
  {
    id: createEventId(),
    title: 'On Business Trip',
    start: '2024-08-04',
    end: '2024-08-07',
    extendedProps: {
      ownerId: '123',
      location: '小琉球',
      summary: 'This is a summary description for the business trip event.',
      detail: 'This is a detailed description for the business trip event.',
    },
  },
];

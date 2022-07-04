// 1. При виборі дати вивести на сторінку інформацію про
// вибрану дату: день тижня, число, місяць, рік.

import { dateOptions } from '../options/dateOptions';

const formEl = document.querySelector('.js-form');
const dateContainerEl = document.querySelector('.js-date-descr');

const dayEl = dateContainerEl.querySelector('.js-day');
const dateEl = dateContainerEl.querySelector('.js-date');
const monthEl = dateContainerEl.querySelector('.js-month');
const yearEl = dateContainerEl.querySelector('.js-year');

let i = 0;

const getFormatedDate = value => {
  // console.log(value);
  const date = new Date(value);

  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + i
  );

    i += 1;

  return {
    day: dateOptions.days[newDate.getDay()],
    date: newDate.getDate(),
    month: dateOptions.month[newDate.getMonth()],
    year: newDate.getFullYear(),
  };

  // console.log(dateObj);
};

const showCurrentDate = formatedDate => {
  dayEl.textContent = formatedDate.day;
  dateEl.textContent = formatedDate.date;
  monthEl.textContent = formatedDate.month;
  yearEl.textContent = formatedDate.year + ' рік';
};

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const { value } = e.target.elements.date;

  // console.log(value);

  const formatedDate = getFormatedDate(value);

  showCurrentDate(formatedDate);

  setInterval(() => {
    const formatedDate = getFormatedDate(value);
    showCurrentDate(formatedDate);
  }, 2000);
});

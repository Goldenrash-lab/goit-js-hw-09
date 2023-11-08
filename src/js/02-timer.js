import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  daysElem: document.querySelector('[data-days]'),
  hoursElem: document.querySelector('[data-hours]'),
  minutesElem: document.querySelector('[data-minutes]'),
  secondsElem: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartBtnClick);

let selectedDates1 = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const nowDate = new Date();
    selectedDates1 = selectedDates[0];
    if (selectedDates[0] <= nowDate) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, 0);
  } else return value;
}

function onStartBtnClick(e) {
  e.target.disabled = true;
  let intervalId = setInterval(() => {
    const nowDate = new Date();
    const diff = selectedDates1.getTime() - nowDate.getTime();
    if (diff < 0) {
      return;
    }
    renderDate(convertMs(diff));
  }, 1000);
}

function renderDate(obj) {
  for (const key of Object.keys(obj)) {
    refs[key + 'Elem'].textContent = addLeadingZero(obj[key]);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

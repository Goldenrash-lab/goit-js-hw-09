import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      const promise = { position, delay };
      if (shouldResolve) {
        resolve(promise);
      } else {
        reject(promise);
      }
    }, delay);
  });
}

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(e) {
  e.preventDefault();

  const delay = +e.currentTarget.elements.delay.value;
  const step = +e.currentTarget.elements.step.value;
  const amount = +e.currentTarget.elements.amount.value;

  for (let i = 0; i < amount; i++) {
    const myDelay = delay + i * step;

    createPromise(i, myDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
  }
}

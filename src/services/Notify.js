import Notiflix from 'notiflix';

export const Notify = () => {
  Notiflix.Notify.init({
    position: 'center-top',
    timeout: 2000,
    clickToClose: true,
  });
};

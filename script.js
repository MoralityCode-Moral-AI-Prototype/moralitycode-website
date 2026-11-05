// Communities carousel: dots follow scroll, click scrolls to position
const track = document.getElementById('track');
const dots = [...document.querySelectorAll('#dots .dot')];
const maxScroll = () => Math.max(1, track.scrollWidth - track.clientWidth);
const setActive = () => {
  const d = Math.round((track.scrollLeft / maxScroll()) * (dots.length - 1));
  dots.forEach((el, i) => el.classList.toggle('active', i === d));
};
dots.forEach((el, i) =>
  el.addEventListener('click', () =>
    track.scrollTo({ left: (i / (dots.length - 1)) * maxScroll(), behavior: 'smooth' })));
// Prev / next arrows: move by one card; hide an arrow at its end
const prev = document.getElementById('carPrev');
const next = document.getElementById('carNext');
const step = () => {
  const card = track.firstElementChild;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
};
const setArrows = () => {
  prev.disabled = track.scrollLeft <= 2;
  next.disabled = track.scrollLeft >= maxScroll() - 2;
};
prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
track.addEventListener('scroll', setArrows, { passive: true });
window.addEventListener('resize', setArrows);
setArrows();
track.addEventListener('scroll', setActive, { passive: true });
window.addEventListener('resize', setActive);
setActive();

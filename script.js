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
track.addEventListener('scroll', setActive, { passive: true });
window.addEventListener('resize', setActive);
setActive();

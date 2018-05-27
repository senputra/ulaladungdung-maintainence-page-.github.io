var textOne = document.querySelector('.text--1');
var textTwo = document.querySelector('.text--2');
var logo = document.querySelector('.logo');
var wrap = document.querySelector('.text__wrap');
var replay = document.querySelector('.replay');
var audio = document.querySelector('audio');
var mute = document.querySelector('.mute');

var intro = function intro() {
  var scaleTL = new TimelineMax();
  scaleTL.to(logo, 0, { opacity: 0, display: 'none' }, 0);
  return scaleTL;
};
var swap = function swap(el, text) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

  var swapTL = new TimelineMax();
  swapTL.to(el, 0, { text: text, delay: delay, opacity: 1, x: '0%', immediateRender: false });
  return swapTL;
};
var slidingWords = function slidingWords() {
  var swipeTL = new TimelineMax();
  swipeTL.to(textOne, 0.15, { delay: 0.1, scale: 0.85 }).to(textOne, 0, { text: '#Dody\'s ', delimiter: ' ' }).to(textOne, 0.1, { scale: 1 }).to(textTwo, 0.15, {
    delay: 0.25,
    text: ' portfolio',
    delimiter: ' '
  }).to(wrap, 0.1, { delay: 0.25, scale: 0.75 }).to(wrap, 0.1, { scale: 1 });
  return swipeTL;
};
var environment = function environment() {
  var envTL = new TimelineMax();
  envTL.to(wrap, 0, { delay: 0.5, scale: 1.5 }, 0).to(textOne, 0, { delay: 0.5, text: '####' }, 0).to(textTwo, 0, { delay: 0.5, text: '' }, 0).to(wrap, 0, { scale: 1 }, 1);
  return envTL;
};
var type = function type(el, text) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

  var typeTL = new TimelineMax();
  typeTL.add(TweenMax.to(el, 0, { delay: delay, text: '' }));
  for (var l = 0; l < text.length; l++) {
    typeTL.add(TweenMax.to(el, 0.15, { text: text.slice(0, l + 1) }));
  }
  return typeTL;
};
var frontEnd = function frontEnd() {
  var frontEndTL = new TimelineMax();
  frontEndTL.to(textOne, 0, { text: 'co', delay: 0.5 }, 0).to(textTwo, 0, { text: 'ming', delay: 0.5 }, 0).from(textOne, 0.25, { x: '-25%', opacity: 0, immediateRender: false }, 0.5).from(textTwo, 0.25, { x: '-125%', opacity: 0, immediateRender: false }, 0.5).to(textOne, 0.15, { x: '125%', opacity: 0 }, 1).to(textTwo, 0.15, { x: '25%', opacity: 0 }, 1).to(textOne, 0.15, { x: '0%', text: 'soon', opacity: 1 }, 1.25).to(textTwo, 0, { x: '0%', text: '' }, 1.25);
  return frontEndTL;
};
var bounce = function bounce() {
  var bounceTL = new TimelineMax({ repeat: 1 });
  bounceTL.to(wrap, 0.1, { scale: 1.05 }).to(wrap, 0.1, { scale: 1 });
  return bounceTL;
};
var wave = function wave() {
  var waveTL = new TimelineMax({ delay: 0.25, repeat: 2 });
  waveTL.to(textOne, 0.1, { rotation: -25, transformOrigin: 'bottom right' }).to(textOne, 0.1, { rotation: 25, transformOrigin: 'bottom right' });
  return waveTL;
};
var fadeLogo = function fadeLogo() {
  var logoTL = new TimelineMax({ delay: 0.25 });
  logoTL.to(textOne, 0, { opacity: 0 }, 0.1).to(replay, 0.2, {
    opacity: 1,
    onStart: function onStart() {
      return replay.classList.remove('replay--hidden');
    }
  }, 1.1);
  return logoTL;
};
var advertTL = new TimelineMax({
  onStart: function onStart() {
    replay.classList.add('replay--hidden');
    textOne.style.color = 'transparent';
    audio.play();
  },
  onComplete: function onComplete() {
    audio.pause();
    audio.currentTime = 0;
  }
});

advertTL.add(intro()).add(swap(textOne, 'Hi', 0)).add(swap(textOne, 'there')).add(slidingWords()).add(environment()).add(type(textOne, 'is')).add(frontEnd()).add(swap(textOne, 'really soon!')).add(swap(textOne, 'WAIT FOR IT')).add(bounce()).add(TweenMax.to(textOne, 0, {
  text: '👋',
  immediateRender: false,
  onStart: function onStart() {
    return textOne.style.color = 'black';
  }
})).add(wave()).add(fadeLogo());
replay.addEventListener('click', function () {
  return advertTL.restart();
});
audio.muted = true;
mute.addEventListener('click', function () {
  audio.muted = !audio.muted;
  if (audio.muted) {
    mute.classList.add('mute--active');
  } else {
    mute.classList.remove('mute--active');
  }
});

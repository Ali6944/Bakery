'use strict';
const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');
const asideBarEl = document.querySelector('.aside-menu');
const playerBtn = document.querySelector('.player-control');
const videoEl = document.querySelector('.video-container');
const sliderEl = document.querySelector('.slider');
const preloaderEl = document.querySelector('.preloader');
const questionCols = document.querySelectorAll('.question-container');
const btnCont = document.querySelector('.btn-container');
const people = [
  {
    fullName: 'Sara Jones',
    twitterAccount: '@sarajonas',
    img: 'images/people/1.jpg',
    Comment: `I am so pleased of my order. it was so fun celebrating my son's
    birthday with my friends and family.`,
  },
  {
    fullName: 'Ali Doosti',
    twitterAccount: '@doosti69',
    img: 'images/people/2.jpg',
    Comment: `I really enjoyed pancakes I ordered from sweet world bakery.
    they delivered my order right on my desk at the office.`,
  },
  {
    fullName: 'Emily ipsum',
    twitterAccount: '@ipsum204',
    img: 'images/people/3.jpg',
    Comment: `What I love the most about sweet land store is that they just use
    organic ingridients and I can feel it. keep it up guys and never use palm oil.`,
  },
  {
    fullName: 'Mike pens',
    twitterAccount: '@themike94',
    img: 'images/people/4.jpg',
    Comment: `Wow give yourself a pad on your back. your cookies taste awesome.
    the only thing I am concered is about your delivery. please ask the guy to be patient.`,
  },
  {
    fullName: 'Josh Henry',
    twitterAccount: '@Johenry9',
    img: 'images/people/5.jpg',
    Comment: `It was so much pleasant to have your tasty muffines at the weekend. everything is ballanced 
    oil sweetness.`,
  },
];
// preloader functionality
window.addEventListener('load', function () {
  preloaderEl.classList.add('hide-preloader');
});

// menu functionality
menuBtn.addEventListener('click', function () {
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  asideBarEl.classList.toggle('hide-sidebar');
});

// player control
playerBtn.addEventListener('click', function () {
  if (sliderEl.classList.contains('move-slider')) {
    sliderEl.classList.remove('move-slider');
    videoEl.play();
  } else {
    sliderEl.classList.add('move-slider');
    videoEl.pause();
  }
});

// service functionality
questionCols.forEach(function (questionCol) {
  const btn = questionCol.querySelector('.btn');
  btn.addEventListener('click', function () {
    questionCols.forEach(function (item) {
      if (item !== questionCol) {
        item.classList.remove('show-answer');
      }
    });
    questionCol.classList.toggle('show-answer');
  });
});

// comment section functionality

const btns = btnCont.querySelectorAll('button');
const infoWrapper = document.querySelector('.top-info');
let count = 0;

const showReview = function (item) {
  let text = `
  <div class="img-cont">
        <img
          src="${people[item].img}"
          alt="people picture"
          class="customers-img"
        />
      </div>
      <h3 class="name-customer">${people[item].fullName}</h3>
      <p class="info-twt">${people[item].twitterAccount}</p>
      <p class="comment-body">
        ${people[item].Comment}
      </p>
      `;

  infoWrapper.innerHTML = text;
};

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const btnType = e.currentTarget.dataset.id;
    if (btnType === 'next') {
      count = count < people.length - 1 ? count + 1 : 0;
    } else if (btnType === 'previous') {
      count = count > 0 ? count - 1 : people.length - 1;
    }
    showReview(count);
  });
});

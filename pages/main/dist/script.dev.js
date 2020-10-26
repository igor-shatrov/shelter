"use strict";

//goToPets
document.querySelector('#make-a-friend').addEventListener('click', function () {
  document.location.href = '../pets/index.html';
});
document.querySelector('#get-to-know').addEventListener('click', function () {
  document.location.href = '../pets/index.html';
}); //mobile-menu

document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#mobile-menu').style.right = 0;
  setTimeout(function () {
    document.querySelector('#under-burger').style.transform = "rotate(90deg)";
  }, 500);
  document.querySelector('#cover-elem').style.display = "block";
});
document.querySelector('#under-burger').addEventListener('click', closeMenu);
document.querySelector('#cover-elem').addEventListener('click', closeMenu);
document.querySelector('#about-the-shelter').addEventListener('click', closeMenu);

function closeMenu() {
  document.querySelector('#under-burger').style.transform = "rotate(0deg)";
  setTimeout(function () {
    document.querySelector('#mobile-menu').style.right = '-320px';
  }, 500);
  document.querySelector('#cover-elem').style.display = "none";
}

var pets = [{
  "name": "Jennifer",
  "img": "../../assets/pets-jennifer.png",
  "type": "Dog",
  "breed": "Labrador",
  "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  "age": "2 months",
  "inoculations": ["none"],
  "diseases": ["none"],
  "parasites": ["none"]
}, {
  "name": "Sophia",
  "img": "../../assets/pets-sophia.png",
  "type": "Dog",
  "breed": "Shih tzu",
  "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  "age": "1 month",
  "inoculations": ["parvovirus"],
  "diseases": ["none"],
  "parasites": ["none"]
}, {
  "name": "Woody",
  "img": "../../assets/pets-woody.png",
  "type": "Dog",
  "breed": "Golden Retriever",
  "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  "age": "3 years 6 months",
  "inoculations": ["adenovirus", "distemper"],
  "diseases": ["right back leg mobility reduced"],
  "parasites": ["none"]
}, {
  "name": "Scarlett",
  "img": "../../assets/pets-scarlett.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  "age": "3 months",
  "inoculations": ["parainfluenza"],
  "diseases": ["none"],
  "parasites": ["none"]
}, {
  "name": "Katrine",
  "img": "../../assets/pets-katrine.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  "age": "6 months",
  "inoculations": ["panleukopenia"],
  "diseases": ["none"],
  "parasites": ["none"]
}, {
  "name": "Timmy",
  "img": "../../assets/pets-timmy.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  "age": "2 years 3 months",
  "inoculations": ["calicivirus", "viral rhinotracheitis"],
  "diseases": ["kidney stones"],
  "parasites": ["none"]
}, {
  "name": "Freddie",
  "img": "../../assets/pets-freddie.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  "age": "2 months",
  "inoculations": ["rabies"],
  "diseases": ["none"],
  "parasites": ["none"]
}, {
  "name": "Charly",
  "img": "../../assets/pets-charly.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  "age": "8 years",
  "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
  "diseases": ["deafness", "blindness"],
  "parasites": ["lice", "fleas"]
}];
document.onload = completePets();

function completePets() {
  for (var index = 0; index < 3; index++) {
    document.querySelector("#img-animal-".concat(index)).src = pets[index].img;
    document.querySelector("#name-animal-".concat(index)).textContent = pets[index].name;
  }
}

document.querySelector('#previous').addEventListener('click', previousSlide);
document.querySelector('#next').addEventListener('click', nextSlide);

function previousSlide() {
  var firstName = document.querySelector('#name-animal-0').textContent;
  var ind = 0;
  pets.forEach(function (elem, index) {
    if (elem['name'] === firstName) {
      ind = index;
    }
  });

  switch (ind) {
    case 0:
      ind = 5;
      break;

    case 1:
      ind = 6;
      break;

    case 2:
      ind = 7;
      break;

    default:
      ind -= 3;
      break;
  }

  for (var index = 0; index < 3; index++) {
    document.querySelector("#img-animal-".concat(index)).src = pets[ind].img;
    document.querySelector("#name-animal-".concat(index)).textContent = pets[ind].name;

    if (ind === 7) {
      ind = -1;
    }

    ind++;
  }
}

function nextSlide() {
  var firstName = document.querySelector('#name-animal-2').textContent;
  var ind = 0;
  pets.forEach(function (elem, index) {
    if (elem['name'] === firstName) {
      ind = index;
    }
  });
  ind++;

  if (ind === 8) {
    ind = 0;
  }

  for (var index = 0; index < 3; index++) {
    document.querySelector("#img-animal-".concat(index)).src = pets[ind].img;
    document.querySelector("#name-animal-".concat(index)).textContent = pets[ind].name;

    if (ind === 7) {
      ind = -1;
    }

    ind++;
  }
}
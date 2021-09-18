let gochi;
let index;
const gochiImg = document.querySelector(".gochi-image");

window.onload = async () => {
  createTamagotchi();
};

class Tamogotchi {
  constructor(name, hero) {
    this.name = name;
    this.alive = true;
    this.age = 1;
    this.status = null;
    this.hero = hero;
    this.bornTimer = 10;
    this.eggImg =
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1137bca4-fed5-46b2-b43e-24357e0b936d/d8cv9bd-e9b98978-a1b8-4e22-b831-4d8f4945c340.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExMzdiY2E0LWZlZDUtNDZiMi1iNDNlLTI0MzU3ZTBiOTM2ZFwvZDhjdjliZC1lOWI5ODk3OC1hMWI4LTRlMjItYjgzMS00ZDhmNDk0NWMzNDAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.171mmoI-C2q_rZ3mgBCxlDRAMa9U1Q7rrqIaE3LdsRw";
  }

  playAudio(path) {
    let audio = new Audio(path);
    audio.volume = 0.6;
    audio.play();
  }

  startLife() {
    gochiImg.src = this.eggImg;

    this.playAudio("./public/eggcrack.mp3");
    let timerId = setInterval(() => {
      this.bornTimer = this.bornTimer - 1;
      if (this.bornTimer === 0) {
        clearInterval(timerId);
        this.startGame();
      }
      if (this.bornTimer === 4) {
        this.playAudio("./public/back.mp3");
      }
    }, 1000);
  }

  startGame() {
    let audio = new Audio("./public/audio.wav");
    gochiImg.src = this.hero.eating;
    let timerId = setInterval(() => {
      audio.play();
    }, 1000);
  }
  endLife() {}
}

const createTamagotchi = () => {
  index = 0;
  const heroImg = document.querySelector(".gochi-image");
  const switchImgBtn = document.querySelector(".btn-next");
  const inputName = document.querySelector("#gochi-name");
  const btn = document.querySelector(".btn-create");
  const picBtnContainer = document.querySelector(".gochi-pick");
  const submitForm = document.querySelector(".submit-form");

  const heroes = [
    {
      hero: {
        avatar: "https://c.tenor.com/7kEKI-C32ZAAAAAC/peach-cat.gif",
        eating: "https://c.tenor.com/MXnHaInfrnwAAAAj/peach-cat.gif",
        sleeping: "https://c.tenor.com/A61nIWCPRlYAAAAM/peach-cat-sleeping.gif",
        playing: "https://c.tenor.com/5UTM_jsCSoEAAAAi/pom-peach.gif",
        angry: "https://c.tenor.com/KayBlLo95RoAAAAM/peach-cat.gif",
      },
    },
    {
      hero: {
        avatar:
          "https://64.media.tumblr.com/4ed75cea0a03512f882cbcd86b19f93d/tumblr_inline_oupahxTlLa1rpf0sr_500.gifv",
        eating:
          "https://64.media.tumblr.com/70a5c5a857bef93563feeb859ed1b10e/tumblr_pkgoze5d2Z1y2bx2eo3_500.gifv",
        sleeping:
          "https://art.ngfiles.com/images/1095000/1095728_irisoftherepliforce_sonictchi-nap-time.gif?f1574895793",
        playing: "https://www.rpnation.com/gallery/sonictchi-run.30251/full",
        angry:
          "https://pa1.narvii.com/6550/2a57a1d5d981be177e5b7e20404c7b5c637dca61_hq.gif",
      },
    },
    {
      hero: {
        avatar: "https://c.tenor.com/z3K9V0uFH80AAAAC/chicken-bro-chicken.gif",
        eating: "https://c.tenor.com/qRNdbo9xLccAAAAC/chicken-chicken-bro.gif",
        sleeping:
          "https://c.tenor.com/wnnJVfsT1KIAAAAi/chicken-bro-chicken.gif",
        playing: "https://c.tenor.com/VxHvCEqODdUAAAAC/chicken-bro-chicken.gif",
        angry: "https://c.tenor.com/PpbTFlKtCucAAAAC/chicken-chicken-bro.gif",
      },
    },
  ];
  let defaultImage = heroes[index].hero.avatar;
  heroImg.src = defaultImage;
  let pickedHero = heroes[index].hero;

  switchImgBtn.addEventListener("click", () => {
    index++;
    if (index === heroes.length) index = 0;
    heroImg.src = heroes[index].hero.avatar;
    pickedHero = heroes[index].hero;
  });

  btn.addEventListener("click", () => {
    gochi = new Tamogotchi(inputName.value, pickedHero);
    picBtnContainer.style.display = "none";
    submitForm.style.display = "none";
    gochi.startLife();
    return gochi;
  });
};

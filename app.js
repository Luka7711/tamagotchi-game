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
  }
  startLife() {}
  endLife() {}
}

let index;

const createTamagotchi = () => {
  index = 0;
  const heroImg = document.querySelector(".gochi-image");
  const switchImgBtn = document.querySelector(".btn-next");
  const inputName = document.querySelector("#gochi-name");
  const btn = document.querySelector(".btn-create");

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
    const gochi = new Tamogotchi(inputName.value, pickedHero);
    return gochi;
  });
};

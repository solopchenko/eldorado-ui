class ShieldPic {
  constructor(shield) {
    this.shield = shield;

    this.toggle = () => {
      this.shield.classList.toggle('shield-pic--show');
    };

    this.show = () => {
      this.shield.classList.add('shield-pic--show');
    };

    this.hide = () => {
      this.shield.classList.remove('shield-pic--show');
    };

    this.shield.addEventListener('mouseover', this.show);
    this.shield.addEventListener('mouseout', this.hide);
  }

  static createShields() {
    let elements = document.querySelectorAll('.shield-pic');
    return Array.from(elements).map((element) => {
      return new ShieldPic(element);
    });
  }
}

window.picShields = ShieldPic.createShields();

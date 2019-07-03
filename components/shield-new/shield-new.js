export default class ShieldNew {
  constructor(shield) {
    this.shield = shield;

    this.toggle = () => {
      this.shield.classList.toggle('shield-new--show');
    };

    this.show = () => {
      this.shield.classList.add('shield-new--show');
    };

    this.hide = () => {
      this.shield.classList.remove('shield-new--show');
    };

    this.shield.addEventListener('mouseover', this.show);
    this.shield.addEventListener('mouseout', this.hide);
  }

  static createShields() {
    let elements = document.querySelectorAll('.shield-new');
    return Array.from(elements).map((element) => {
      return new ShieldNew(element);
    });
  }
}

window.shields = ShieldNew.createShields();

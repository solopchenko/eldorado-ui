class Popup {
  constructor(popup) {
    this.popup = popup;
    let popup__trigger = this.popup.querySelector('.popup__trigger');
    let popup__close = this.popup.querySelector('.popup__close');
    let popup__content = this.popup.querySelector('.popup__content');
    let popup__modal = this.popup.querySelector('.popup__modal');

    this.toggle = () => {
      this.popup.classList.toggle('popup--show');
    }

    this.show = () => {
      this.popup.classList.add('popup--show');
    }

    this.hide = () => {
      this.popup.classList.remove('popup--show');
    }

    popup__trigger.addEventListener('click', this.show);
    popup__close.addEventListener('click', this.hide);
    popup__content.addEventListener('click', this.hide);
    popup__modal.addEventListener('click', (event) => { event.stopPropagation(); });
  }

  static createPopups() {
    let elements = document.querySelectorAll('.popup');
    return Array.from(elements).map((element) => {
      return new Popup(element);
    });
  }
}

window.popups = Popup.createPopups();

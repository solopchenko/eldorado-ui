class Hint {
  constructor(hint) {
    this.hint = hint;
    let hint__close = this.hint.querySelector('.hint__close');
    let hint__content = this.hint.querySelector('.hint__content');

    this.toggle = () => {
      this.hint.classList.toggle('hint--show');
    }

    this.show = () => {
      this.hint.classList.add('hint--show');
    }

    this.hide = () => {
      this.hint.classList.remove('hint--show');
    }

    this.hint.addEventListener('click', this.toggle);
    hint__close.addEventListener('click', this.toggle);
    hint__content.addEventListener('click', (event) => { event.stopPropagation(); });
  }

  static createHints() {
    let elements = document.querySelectorAll('.hint');
    return Array.from(elements).map((element) => {
      return new Hint(element);
    });
  }

  static windowOnClick(event) {
    window.hints = window.hints || [];
    window.hints.forEach((hint) => {
      if (event.target !== hint.hint) {
        hint.hide();
      }
    });
  }
}

window.hints = Hint.createHints();
window.addEventListener('click', Hint.windowOnClick);

import randomColor from 'randomColor';
import {randomRange} from '../helpers';

export default class Square {
  #x;
  #y;
  #size;
  #holder;
  #clicked = 0;
  #degrees = 0;
  constructor(x, y, size, holder) {
    this.#size = randomRange(25,250);
    this.#x = randomRange(this.#size, window.innerWidth - this.#size, true);
    this.#y = randomRange(this.#size, window.innerHeight - this.#size, true);
    this.#holder = holder;
    this.htmlRef = this.#generateHTML();
    //console.log(this.htmlRef);
    this.#setStyling();
    this.#setUpEvents();
  }
  #generateHTML() {
    this.#holder.insertAdjacentHTML(
      "beforeend",
      `
        <div class="square"></div>
      `
    );
    return this.#holder.querySelector(".square:last-child");
  }
  #setStyling() {
    const styles = {
      left: this.#x + "px",
      top: this.#y + "px",
      width: this.#size + "px",
      height: this.#size + "px",
      backgroundColor: randomColor({hue: 'blue'}),
    };
    Object.assign(this.htmlRef.style, styles);
  }
  #setUpEvents() {
    this.htmlRef.onclick = () => {
      this.htmlRef.style.backgroundColor = randomColor();
      this.#clicked++;
      if (this.#clicked === 10) {
        this.#holder.removeChild(this.htmlRef);
      } else if(this.#clicked < 10){
        
        this.htmlRef.style.transform = "rotate("+this.#degrees+"deg)";
        this.#degrees += 45;
      }
    };

  }
}

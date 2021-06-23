import randomColor from 'randomColor';
import {randomRange} from '../helpers';

export default class Circle{
    #x;
    #y;
    #size;
    #holder;
    #clicked = 0;
    constructor(xps,yps,size,holder){
        this.#size = randomRange(25,250);
        this.#x = randomRange(this.#size, window.innerWidth - this.#size, true);
        this.#y = randomRange(this.#size, window.innerHeight - this.#size, true);
        this.#holder = holder;
        this.htmlRef = this.#generateHtml();
        this.#addStyling();
        this.#clickEvent();
        // this.#scaleShape();
        
    }
    #generateHtml(){
        this.#holder.insertAdjacentHTML(
            "beforeend",
            `<div class="circle"></div>`
        )
        return this.#holder.querySelector(".circle:last-child");
    }
    #addStyling(){
        const styles = {
            width: this.#size + "px",
            height: this.#size + "px",
            borderRadius: 50 + "%",
            backgroundColor : randomColor(),
            left: this.#x + "px",
            top: this.#y + "px"
        }
        Object.assign(this.htmlRef.style, styles)
    }
    #clickEvent(){
        this.htmlRef.ondblclick = () => {
            this.htmlRef.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
        };
        this.htmlRef.onclick = (e) => {
            this.htmlRef.style.backgroundColor=randomColor();
            
            this.#clicked++;
            if(this.#clicked === 3){
                this.htmlRef.style.borderRadius = 0;
            }else if(this.#clicked === 6){
                this.htmlRef.style.borderRadius = 50 + "%";
                this.#clicked = 0;
            }
            
            // this.htmlRef.style.transform = `skew(`+25+`deg, `+25+`deg)`;
        }
    }
   
}
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Sach");
    }

    async getHtml(){
        return `
          <div>hello</div>
          <div id="app"></div>
        
        `;

    }
}
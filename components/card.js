//card.js
const cardTemplate = document.createElement('template');
class card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    	let img = this.attributes.img.value;
    	let id = this.attributes.id.value;
    	let atts = this.attributes.atts.value;
    	let price = this.attributes.price.value;
    	cardTemplate.innerHTML = `
    		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen|Ubuntu+Mono|Roboto+Mono">
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			<link rel="stylesheet" type="text/css" href="style.css">
    		<div class="card-wrapper brite my-2 black-bg white-txt d-inline-block" 
    			 data-price="${price}" 
    			 data-atts="${atts}"
    			 id="${id}">
				<div class="img-wrapper v3-bg">
					<img class="w-100" src="${img}" loading="lazy">
				</div> 
				<div class="card-info-wrapper">
					<p class="phunk-id mb-0 v3-txt">#${id}</p>
					<h4 class="phunk-price mb-1">${price}Ξ</h4>
				</div>
			</div>
		`

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(cardTemplate.content);
    }
}

customElements.define('comp-card', card);
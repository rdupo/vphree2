//Cinfo.js
const cinfoTemplate = document.createElement('template');

class Cinfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    	let title = this.attributes.title.value;
    	let desc = this.attributes.desc.value;
    	cinfoTemplate.innerHTML = `
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen|Ubuntu+Mono|Roboto+Mono">
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			<link rel="stylesheet" type="text/css" href="style.css">
			<div class="collection-info mb-5 col-md-9">
				<h1 class="v3-txt">${title}</h1>
				<div class="collection-desc">
					<p>${desc}</p>
				</div>				
			</div>
		`
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(cinfoTemplate.content);
    }
}

customElements.define('comp-collection-info', Cinfo);
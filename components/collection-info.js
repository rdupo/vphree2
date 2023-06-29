//Cinfo.js
const cinfoTemplate = document.createElement('template');

class Cinfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    	let title = this.attributes.title.value;
    	let desc = this.attributes.desc.value;
    	let twitter = this.attributes.twitter.value;
    	let contract = this.attributes.contract.value;
    	cinfoTemplate.innerHTML = `
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen|Ubuntu+Mono|Roboto+Mono">
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			<link rel="stylesheet" type="text/css" href="style.css">
			<div class="collection-info mb-5 col-md-9">
				<div class="d-flex">
					<h1 class="v3-txt mr-auto">${title}</h1>
					<div class="justify-content-end">
						<a href="${twitter}" target="_blank" class="sans-underline">
							<img class="d-inline-flex align-middle my-3 mr-3 h-img-w brite" src="assets/twitter.png">
						</a>
						<a href="https://etherscan.io/address/${contract}" target="_blank" class="sans-underline">
							<img class="d-inline-flex align-middle my-3 h-img-w brite" src="assets/etherscan.png">
						</a>
					</div>
				</div>
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
//header.js
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen|Ubuntu+Mono|Roboto+Mono">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
	<div class="v3-txt black-bg d-flex">
		<div class="mr-auto brite">
			<a href="/" class="sans-underline">
				<img class="d-inline-flex align-middle my-3 ml-4 h-img" src="assets/vphreeLogo.png">
				<h1 class="d-inline-flex align-middle h-txt">vphree</h1>
			</a>
		</div>
		<div class="justify-content-end">
			<a href="https://discord.gg/phunks" target="_blank" class="sans-underline">
				<img class="d-inline-flex align-middle my-3 mr-3 h-img-w brite" src="assets/discord.png">
			</a>
			<img class="d-inline-flex align-middle my-3 mr-3 h-img-w brite" 
			src="assets/wallet.png"
			onclick="connectWallet()">
			<a href="/profile">
				<img class="d-inline-flex align-middle my-3 mr-4 h-img brite" src="assets/profile-icon.png">
			</a>
		</div>
	</div>
`

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('comp-header', Header);
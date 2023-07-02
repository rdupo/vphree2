//purchase.js
const purchaseTemplate = document.createElement('template');
class purchase extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    	let img = this.attributes.img.value;
    	let title = this.attributes.title.value;
    	let owner = this.attributes.owner.value;
    	let truncatedOwner = this.attributes.truncatedOwner.value;
    	let metadata = this.attributes.metadata.value;
    	let price = this.attributes.price.value;
    	let bid = this.attributes.bid.value;
    	let txnHistory = this.attributes.txnHistory.value;
    	purchaseTemplate.innerHTML = `
    	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen|Ubuntu+Mono|Roboto+Mono">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="style.css">
    	<div class="content mx-4">
			<div class="row-wrapper d-block px-0 mt-4">
				<div class="nft-info col-md-4 d-inline-block pl-0 align-top">
					<div>
						<img src="${img}" class="w-100">
					</div>
				</div>
				<div class="metadata col-md-4 d-inline-block align-top">
					<div class="id-and-owner">
						<h3>${title}</h3>
						<p>Owner: <a href="/profile?w=${owner}">${truncatedOwner}</a></p>
					</div>
					<div class="metadata">						
						${metadata}
					</div>
				</div>
				<div class="contract-interactions col-md-3 d-inline-block pr-0 align-top">
					<div class="price-and-bid">
						<p>Price: ${price}</p>
						<p>Top Bid: ${bid}</p>
					</div>
					<div class="buy-bid-buttons">
						<button class="brite v3-bg w-100 p-1 my-2">BUY</button>
						<br>
						<button class="brite v3-bg w-100 p-1 my-2">BID</button>
						<br>
						<div class="enter-bid-amount">
							<input
								class="lite-v3-bg w-100 p-1 my-2" 
								type="number" 
								name="bid-amount" 
								placeholder="bid amount">
							<br>
							<button class="brite v3-bg w-100 p-1 my-2">PLACE BID</button>
						</div>
						<button class="brite v3-bg w-100 p-1 my-2">CANCEL BID</button>
					</div>
					<div class="seller-buttons">
						<button class="brite v3-bg w-100 p-1 my-2">LIST</button>
						<br>
						<div class="enter-list-amount">
							<input 
								class="lite-v3-bg w-100 p-1 my-2" 
								type="number" 
								name="list-amount" 
								placeholder="list price">
							<br>
							<button class="brite v3-bg w-100 p-1 my-2">LIST</button>
						</div>
						<button class="brite v3-bg w-100 p-1 my-2">DELIST</button>
						<br>
						<button class="brite v3-bg w-100 p-1 my-2">ACCEPT BID</button>
					</div>
				</div>
			</div>
			<div class="row-wrapper mt-5">
				<div class="tx-history">
					${txnHistory}
				</div>
			</div>
		</div>`

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(purchaseTemplate.content);
    }
}

customElements.define('comp-purchase', purchase);
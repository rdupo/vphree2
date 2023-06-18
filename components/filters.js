//filters
const filterTemplate = document.createElement('template');
filterTemplate.innerHTML = `
<div>
	<div class="search">
		<label for="id">Phunk ID</label>
		<input type="text" id="id" name="id" minlength="1" maxlength="4" placeholder="Phunk ID..." onkeyup="pid()">
		<button id="view" onclick="togl(['view','hide','filters']);">View Filters</button>
		<button id="hide" class="hide-me" onclick="togl(['view','hide','filters']);">Hide Filters</button>
		<select class="select sorter" type="text" name="sort" id="sort" onchange="ar();">
			<option disabled selected hidden>Sort</option>
			<option value="pa">Price Low - High</option>
			<option value="pd">Price High - Low</option>
			<option value="ia">ID Low - High</option>
			<option value="id">ID High - Low</option>
			<option value="ta">Traits Low - High</option>
			<option value="td">Traits High - Low</option>
		</select>
	</div>
	<div id="filters" class="hide-me">
		<div class="input-group" data-filter="beard">
			<select class="select" type="text" name="beard" id="beard" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Beard</option>
				<option value="NA">None</option>
				<option value="Big-Beard">Big Beard</option>
				<option value="Chinstrap">Chinstrap</option>
				<option value="Front-Beard">Front Beard</option>
				<option value="Front-Beard-Dark">Front Beard Dark</option>
				<option value="Goat">Goat</option>
				<option value="Handlebars">Handlebars</option>
				<option value="Luxurious-Beard">Luxurious Beard</option>
				<option value="Mustache">Mustache</option>
				<option value="Muttonchops">Muttonchops</option>
				<option value="Normal-Beard">Normal Beard</option>
				<option value="Normal-Beard-Black">Normal Beard Black</option>
				<option value="Shadow-Beard">Shadow Beard</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="beardx" type="button" onclick="cleer('beard'); reset('data-beard')">x</button>
			</div>
		</div>
		<div class="input-group" data-type="cheeks">
			<select class="select" type="text" name="cheeks" id="cheeks" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Cheeks</option>
				<option value="NA">None</option>
				<option value="Rosy-Cheeks">Rosy Cheeks</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="cheeksx" type="button" onclick="cleer('cheeks');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="ears">
			<select class="select" type="text" name="ears" id="ears" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Ears</option>
				<option value="NA">None</option>
				<option value="Earring">Earring</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="earsx" type="button" onclick="cleer('ears');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="emotion">
			<select class="select" type="text" name="emotion" id="emotion" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Emotion</option>
				<option value="NA">None</option>
				<option value="Frown">Frown</option>
				<option value="Smile">Smile</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="emox" type="button" onclick="cleer('emotion');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="eyes">
			<select class="select" type="text" name="eyes" id="eyes" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Eyes</option>
				<option value="NA">None</option>
				<option value="3D-Glasses">3D Glasses</option>
				<option value="Big-Shades">Big Shades</option>
				<option value="Blue-Eye-Shadow">Blue Eye Shadow</option>
				<option value="Classic-Shades">Classic Shades</option>
				<option value="Clown-Eyes-Blue">Clown Eyes Blue</option>
				<option value="Clown-Eyes-Green">Clown Eyes Green</option>
				<option value="Eye-Mask">Eye Mask</option>
				<option value="Eye-Patch">Eye Patch</option>
				<option value="Green-Eye-Shadow">Green Eye Shadow</option>
				<option value="Horned-Rim-Glasses">Horned Rim Glasses</option>
				<option value="Nerd-Glasses">Nerd Glasses</option>
				<option value="Purple-Eye-Shadow">Purple Eye Shadow</option>
				<option value="Regular-Shades">Regular Shades</option>
				<option value="Small-Shades">Small Shades</option>
				<option value="VR">VR</option>
				<option value="Welding-Goggles">Welding Goggles</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="eyesx" type="button" onclick="cleer('eyes');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="face">
			<select class="select" type="text" name="face" id="face" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Face</option>
				<option value="NA">None</option>
				<option value="Mole">Mole</option>
				<option value="Spots">Spots</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="facex" type="button" onclick="cleer('face');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="hair">
			<select class="select" type="text" name="hair" id="hair" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Hair</option>
				<option value="NA">None</option>
				<option value="Bandana">Bandana</option>
				<option value="Beanie">Beanie</option>
				<option value="Blonde-Bob">Blonde Bob</option>
				<option value="Blonde-Short">Blonde Short</option>
				<option value="Cap">Cap</option>
				<option value="Cap-Forward">Cap Forward</option>
				<option value="Clown-Hair-Green">Clown Hair Green</option>
				<option value="Cowboy-Hat">Cowboy Hat</option>
				<option value="Crazy-Hair">Crazy Hair</option>
				<option value="Dark-Hair">Dark Hair</option>
				<option value="Do-rag">Do-rag</option>
				<option value="Fedora">Fedora</option>
				<option value="Frumpy-Hair">Frumpy Hair</option>
				<option value="Half-Shaved">Half Shaved</option>
				<option value="Headband">Headband</option>
				<option value="Hoodie">Hoodie</option>
				<option value="Knitted-Cap">Knitted Cap</option>
				<option value="Messy-Hair">Messy Hair</option>
				<option value="Mohawk">Mohawk</option>
				<option value="Mohawk-Dark">Mohawk Dark</option>
				<option value="Mohawk-Thin">Mohawk Thin</option>
				<option value="Orange-Side">Orange Side</option>
				<option value="Peak-Spike">Peak Spike</option>
				<option value="Pigtails">Pigtails</option>
				<option value="Pilot-Helmet">Pilot Helmet</option>
				<option value="Pink-With-Hat">Pink With Hat</option>
				<option value="Police-Cap">Police Cap</option>
				<option value="Purple-Hair">Purple Hair</option>
				<option value="Red-Mohawk">Red Mohawk</option>
				<option value="Shaved-Head">Shaved Head</option>
				<option value="Straight-Hair">Straight Hair</option>
				<option value="Straight-Hair-Blonde">Straight Hair Blonde</option>
				<option value="Straight-Hair-Dark">Straight Hair Dark</option>
				<option value="Stringy-Hair">Stringy Hair</option>
				<option value="Tassle-Hat">Tassle Hat</option>
				<option value="Tiara">Tiara</option>
				<option value="Top-Hat">Top Hat</option>
				<option value="Vampire-Hair">Vampire Hair</option>
				<option value="Wild-Blonde">Wild Blonde</option>
				<option value="Wild-Hair">Wild Hair</option>
				<option value="Wild-White-Hair">Wild White Hair</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="hairx" type="button" onclick="cleer('hair');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="lips">
			<select class="select" type="text" name="lips" id="lips" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Lips</option>
				<option value="NA">None</option>
				<option value="Black-Lipstick">Black Lipstick</option>
				<option value="Hot-Lipstick">Hot Lipstick</option>
				<option value="Purple-Lipstick">Purple Lipstick</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="lipsx" type="button" onclick="cleer('lips');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="mouth">
			<select class="select" type="text" name="mouth" id="mouth" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Mouth</option>
				<option value="NA">None</option>
				<option value="Cigarette">Cigarette</option>
				<option value="Medical-Mask">Medical Mask</option>
				<option value="Pipe">Pipe</option>
				<option value="Vape">Vape</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="mouthx" type="button" onclick="cleer('mouth');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="neck">
			<select class="select" type="text" name="neck" id="neck" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Neck</option>
				<option value="NA">None</option>
				<option value="Choker">Choker</option>
				<option value="Gold-Chain">Gold Chain</option>
				<option value="Silver-Chain">Silver Chain</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="neckx" type="button" onclick="cleer('neck');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="nose">
			<select class="select" type="text" name="nose" id="nose" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Nose</option>
				<option value="NA">None</option>
				<option value="Clown-Nose">Clown Nose</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="nosex" type="button" onclick="cleer('nose');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="sex">
			<select class="select" type="text" name="sex" id="sex" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Sex</option>
				<option value="Alien">Alien</option>
				<option value="Ape">Ape</option>
				<option value="Female">Female</option>
				<option value="Male">Male</option>
				<option value="Zombie">Zombie</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="sexx" type="button" onclick="cleer('sex');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="teeth">
			<select class="select" type="text" name="teeth" id="teeth" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Teeth</option>
				<option value="NA">None</option>
				<option value="Buck-Teeth">Buck Teeth</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="teethx" type="button" onclick="cleer('teeth');">x</button>
			</div>
		</div>
		<div class="input-group" data-type="traits">
			<select class="select" type="text" name="atts" id="atts" onchange="trait(this.id);">
				<option value="" disabled selected hidden>Trait Count</option>
				<option value="0">0 Trait</option>
				<option value="1">1 Trait</option>
				<option value="2">2 Traits</option>
				<option value="3">3 Traits</option>
				<option value="4">4 Traits</option>
				<option value="5">5 Traits</option>
				<option value="6">6 Traits</option>
				<option value="7">7 Traits</option>
			</select>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" id="traitsx" type="button" onclick="cleer('atts');">x</button>
			</div>
		</div>
	</div>
</div>
`

class Filter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(filterTemplate.content);
    }
}

customElements.define('comp-filter', Filter);
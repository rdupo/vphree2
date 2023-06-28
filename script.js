//connect metamask
async function connectWallet() {
	const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();			
}

connectWallet();


export const connectWallet = async (window) => {
    if(window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts"}).then((accounts) => {
            return accounts[0]
        })
    }
}
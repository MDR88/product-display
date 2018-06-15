
const listProduct = () => {
const prodList = require("./productData")
const prodDiv = document.querySelector("#product-div")
const frag = document.createDocumentFragment()
for (let key in prodList) {
    const UlEl = document.createElement("ul")
    for (let innerKey in prodList[key]){
        if (innerKey === "img"){
                const imgEl = document.createElement("img")
                imgEl.src = prodList[key][innerKey]
                UlEl.appendChild(imgEl)
        }
        else {
        let liEl = document.createElement("li")
        liEl.innerHTML = prodList[key][innerKey]
        UlEl.appendChild(liEl)
        }
    frag.appendChild(UlEl)
    }
    prodDiv.appendChild(frag)
}
}

module.exports = listProduct
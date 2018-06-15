//nav bar

//create elements for nav bar
const createNavBar = () =>{
    let bar = document.createElement("nav")
    let nav1 = document.createElement("a")
    let nav2 = document.createElement("a")
    let nav3 = document.createElement("a")
    let companyName = document.createElement("h1")

    nav1.href = "#"
    nav2.href = "#"
    nav3.href = "#"

    bar.id = "nav-bar"
    nav1.innerHTML = "Catagories"
    nav2.innerHTML = "Orders"
    nav3.innerHTML = "Log Out"
    companyName.innerHTML = "Welcome To Sethsy"

    document.querySelector("#nav-container").appendChild(companyName)
    document.querySelector("#nav-container").appendChild(bar)
    document.querySelector("#nav-bar").appendChild(nav1)
    document.querySelector("#nav-bar").appendChild(nav2)
    document.querySelector("#nav-bar").appendChild(nav3)

}
module.exports = createNavBar
//counters
let counterHome = document.getElementById("counter-home")
let counterGuest = document.getElementById("counter-guest")

let countHome = 0
let countGuest = 0

//home points
function home1() {
    countHome += 1
    counterHome.innerText = countHome
}

function home2() {
    countHome += 2
    counterHome.innerText = countHome
}

function home3() {
    countHome += 3
    counterHome.innerText = countHome
}

//guest points
function guest1() {
    countGuest += 1
    counterGuest.innerText = countGuest
}

function guest2() {
    countGuest += 2
    counterGuest.innerText = countGuest
}

function guest3() {
    countGuest += 3
    counterGuest.innerText = countGuest
}

//highlight the leader
//let highlightHome = document.getElementById("highlight-home")
//let highlightGuest = document.getElementById("highlight-guest")

//let visibleHome = highlightHome.style.visibility = "visible"
//let visibleGuest = highlightGuest.style.visibility = "visible"
//let hiddenHome = highlightHome.style.visibility = "hidden"
//let hiddenGuest = highlightGuest.style.vivibility = "hidden"

//if (countHome = countGuest) {
//    highlightHome = hiddenHome
//    highlightGuest = hiddenGuest
//} else if (countHome > countGuest) {
//    highlightHome = visibleHome
//    highlightGuest = hiddenGuest
//} else {
//    highlightHome = hiddenHome
//    highlightGuest = visibleGuest
//}
//warunek jesli oba countery = 0 to maja neutralne kolory
// jesli jeden z counterow jest wiekszy od drugiego to wiekszy zmienia kolor

//if (countHome, countGuest = 0) {
//    counterHome.style.color = "red"
//    counterGuest.style.color = "red"
//} else if (countHome > countGuest) {
//    counterHome.style.color = "red"
//    counterGuest.style.color = "black"
//} else {
//    counterHome.style.color = "black"
//    counterGuest.style.color = "red"
//}

//new game button
function reset() {
    countHome = 0
    countGuest = 0
    counterHome.innerText = countHome
    counterGuest.innerText = countGuest
}
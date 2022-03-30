let bttn = document.getElementById("button");
bttn.addEventListener("click", function (event) {
    let selector = document.getElementById("selector").value
    switch (selector) {
        case "1" : alert("U chose 1")
        break 
        case "2" : alert("U chose 2")
        break
        case "3" : alert ("U chose 3")
        break
        case "4" : alert("U chose 4")
        break 
        case "5" : alert("U chose 5")
        break
        case "6" : alert ("U chose 6")
        break
        case "7" : alert("U chose 7")
        break 
        case "8" : alert("U chose 8")
        break
        case "9" : alert ("U chose 9")
        break
        case "10" : alert ("U chose 10")
        break
        default : alert("Not valid")
    }
})


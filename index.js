// Write your code here!
// const element = document.createElement("div");

const main = document.getElementById("main")
main.remove()

const newHeader = document.createElement("h1")

newHeader.setAttribute("id", 'victory')

newHeader.textContent = "Ali is the champion"
document.createElement('p');
let newP=document.createElement('p')
newP.innerText="hi i am a new new p."


body=document.querySelector('body')
body.appendChild(newP)

let btn=document.createElement('button')
btn.innerText="click me."
body.appendChild(btn)
body.append(btn)
body.append("do not touch")

// append(element):add at end
// prepend(element) : add at start of elemnt 

let btn=document.createElement('button')
btn.innerHTML='new button ' 

// insertAdjacent(where,element) where:beforeBegin,afterBegin
p.insertAdjacentElement('beforeBegin',btn)
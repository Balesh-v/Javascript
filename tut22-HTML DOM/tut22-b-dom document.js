// ------------------------------ Finding HTML Elements --------------------

let findid = document.getElementById("demo")
console.log(findid)

let heading = document.getElementsByClassName("heading")
console.log(...heading)

let tagN = document.getElementsByTagName('a')
console.log(...tagN)


// ------------------------------ Finding HTML Object --------------------

// doctype

let doc = document.doctype
console.log(doc)

// head

let hed = document.head
console.log(hed)


let url = document.baseURI
console.log(url)

let an = document.anchors	
console.log(an)

let doc1 = document.documentElement
console.log(doc1)

let docmo = document.documentMode;
console.log(docmo)

let dom = document.domain
console.log(dom)
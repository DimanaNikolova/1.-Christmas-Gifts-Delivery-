function solution() {
   
    let addGiftTextArea =document.querySelector("body > div > section:nth-child(1) > div > input[type=text]")
    let addGiftBtn= document.querySelector("body > div > section:nth-child(1) > div > button")
    let listOfGiftsUl = document.querySelector("body > div > section:nth-child(2) > ul")
    let sentUl =document.querySelector("body > div > section:nth-child(3) > ul")
    let discardedUl=document.querySelector("body > div > section:nth-child(4) > ul")
  
  
    addGiftBtn.addEventListener('click', addGiftHandler)

    let addedGiftsNames= []

    
function addGiftHandler(e){
    let li = createHTMLElement("li", "gift")
    let sendBtn = createHTMLElement("button", null, "Send")
    sendBtn.id="sendButton"
    let discardBtn = createHTMLElement("button", null, "Discard")
    sendBtn.id="discardButton"

    let giftName= addGiftTextArea.value
 

    li.textContent = giftName
    li.appendChild(sendBtn)
    li.appendChild(discardBtn)
    listOfGiftsUl.appendChild(li)

    ulSort()
    addGiftTextArea.value=""
    sendBtn.addEventListener("click", sendBtnHandler)
     discardBtn.addEventListener("click", discardBtnHandler)
    function sendBtnHandler(){
   let li = this.parentNode
   li.lastChild.remove()
   li.lastChild.remove()

   sentUl.appendChild(li)
  
    }

    function discardBtnHandler(){
        let li = this.parentNode
        li.lastChild.remove()
        li.lastChild.remove()
     
        discardedUl.appendChild(li)
       
         }
}

function createHTMLElement(tagName, className, textContent, attributes, event) {
 
    let element = document.createElement(tagName);

    if (className) {
        element.classList.add(className);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        attributes.forEach((a) => element.setAttribute(a.k, a.v));
    }

    if (event) {
        element.addEventListener(event.name, event.func);
    }

    return element;
}
function ulSort(){   let itemsArray= Array.prototype.slice.call(listOfGiftsUl.children)
    itemsArray.sort(function (a, b) {
     // inner text suits best (even when formated somehow)
     if (a.innerText < b.innerText) return -1;
     if (a.innerText > b.innerText) return 1;
     return 0; 
 }
 
 );
 itemsArray.forEach(function (item) {
     // one by one move to the end in correct order
     listOfGiftsUl.appendChild(item);
 });}
 
}



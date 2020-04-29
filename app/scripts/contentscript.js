'use strict';


// const button = document.createElement('button');
// button.textContent = 'Greet me!'
// document.body.insertAdjacentElement('afterbegin', button);
// button.addEventListener('click', () => {
//   console.log('notification')
//
// });


function interceptData() {
  var xhrOverrideScript = document.createElement('script');
  xhrOverrideScript.type = 'text/javascript';
  xhrOverrideScript.innerHTML = `
  (function() {
    var XHR = XMLHttpRequest.prototype;
    var send = XHR.send;
    var open = XHR.open;
    XHR.open = function(method, url) {
        this.url = url; // the request url
        return open.apply(this, arguments);
    }
    XHR.send = function() {
        this.addEventListener('load', function() {
            if (this.url.includes('learned_items')) {
                var data = JSON.parse(this.response);
                data.url = this.url
                var dataDOMElement = document.createElement('div');
                dataDOMElement.id = '__interceptedData';
                dataDOMElement.innerText = JSON.stringify(data);
                dataDOMElement.style.height = 0;
                dataDOMElement.style.overflow = 'hidden';
                document.body.appendChild(dataDOMElement);
            }               
        });
        return send.apply(this, arguments);
    };
  })();
  `
  document.head.prepend(xhrOverrideScript);
}


function checkForDOM() {
  if (document.body && document.head) {
    interceptData();
  } else {
    requestIdleCallback(checkForDOM);
  }
}


requestIdleCallback(checkForDOM);

async function scrapeData() {
  const responseContainingEle = document.getElementById('__interceptedData');
  const deckName = 'Babbel-deck-name'
  const modelName = 'babbelModel'
  if (responseContainingEle) {
    chrome.runtime.sendMessage(
      {
        action: "addNotes",
        learnedItems: JSON.parse(responseContainingEle.innerHTML).learned_items,
        deckName: deckName,
        modelName: modelName
      }, function (response) {
        console.log(`Added ${response.addedNotes}/${response.totalNotes} new words to ${deckName} using model ${modelName}`);
      });


    responseContainingEle.remove()
  }
  requestIdleCallback(scrapeData);

}

requestIdleCallback(scrapeData);
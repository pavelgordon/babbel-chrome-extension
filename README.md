<p align="center">
<img src="https://i.imgur.com/RXOYJCu.png" width="250" alt="babbel-to-anki">
</p>
<h1 align="center">
Babbel2Anki
</h1>
<p align="center">
<a href="https://chrome.google.com/webstore/detail/babbel2anki/dnnognkhllcinkeimdhdchjggploankm?hl=en">Chrome Extension</a> which imports and syncs Babbel vocabulary to Anki. Supports auto-syncing(WIP), customising deck and card template for syncing.
</p>

## What is it  
[`Babbel`](https://my.babbel.com) - a German subscription-based language learning app and e-learning platform with more than 14 languages being offered at the moment.  
[`Anki`](https://apps.ankiweb.net/) - Anki is a free and open-source flashcard program that utilizes spaced repetition. Spaced repetition has been shown to increase rate of memorization.  
[`Anki Desktop`](https://apps.ankiweb.net/) - computer version of Anki.  
[`AnkiConnect`](https://foosoft.net/projects/anki-connect/) - addon for Anki Desktop.  
## How to use
### TL;DR:
1. Install this extension([latest release](https://github.com/pavelgordon/babbel2anki-chrome-extension/releases/)). At some point it will be published to chrome...
1. Open `Anki Desktop` with [`AnkiConnect`](https://foosoft.net/projects/anki-connect/) addon.
1. Update AnkiConnect CORS policy(reasoning explained below):  Anki Desktop -> Tools -> Addons -> AnkiConnect -> Config->
```"webCorsOriginList": ["*"]```
1. Open [`Review section of Babbel`](https://my.babbel.com/review-manager?ref=navbar) with any language of your choice.
1. Click `Sync current page with Anki` button.
1. Check your `Anki Desktop` for new deck `BabbelDeck` with all your words from Babbel.
### More detailed guide
Install [`AnkiConnect`](https://foosoft.net/projects/anki-connect/). Now you have to allow AnkiConnect to receive calls from this extension via setting `webCorsOriginList`(Anki Desktop -> Tools -> Addons -> AnkiConnect -> Config): 
- `"webCorsOriginList": ["*"]` to allow calls from any resourse
- `"webCorsOriginList": ["chrome-extension://hdihhgoahdggcdndkepomdlbjhngghig"]` to allow calls only from this extension. Replace `hdihhgoahdggcdndkepomdlbjhngghig` with ID from `chrome://extensions`
![image](https://user-images.githubusercontent.com/2462444/80809999-2b538980-8bc3-11ea-9dcc-3bb347e75fbb.png)  

Now with `Anki Desktop` with `AnkiConnect` addon being set up: 
1. Go to: `chrome://extensions`, enable Developer mode and load `app` as an unpacked extension.
1. Optional: Set custom deck name, there is a popup with settings if you click on extention icon. Auto-sync mode WIP.

![image](https://user-images.githubusercontent.com/2462444/80767209-ae36fe80-8b47-11ea-8798-53a8541cfbb0.png)
1. Login to Babbel and open [`Review section of Babbel`](https://my.babbel.com/review-manager?ref=navbar ). It opens a review section of a selected language. 
- `Sync with Anki` is a new button coming from `Babbel2Anki` which allows to manually sync to configured deck.
- ~~`auto-sync` enabled option performs sync to configured deck every 30 seconds.~~ WIP
![image](https://user-images.githubusercontent.com/2462444/80767502-564cc780-8b48-11ea-954a-98a3fff83e0d.png)
1. `Babbel2Anki` will: 
    -  Create a deck with name `BabbelDeck`(if such deck already exists, nothing happens)
    -  Create a card template (model) with name `BabbelModel` and all necessary fields (if such model already exists, nothing happens)
    -  Adds words from current open page in `My vocab` words to deck `BabbelDeck`. Adds only new words (which are not in the deck).  
    -  Shows notification about an amount of **new** words which were saved in Anki (e.g. if notification says that new words/total words is 10/50 - means that other 40 words are already in Anki deck).
![image](https://user-images.githubusercontent.com/2462444/80767663-b5124100-8b48-11ea-9d6b-c8beb3f6aa51.png)
1. Check Anki Desktop for `BabbelDeck`: 
![image](https://user-images.githubusercontent.com/2462444/80614070-4e086580-8a3e-11ea-8b5c-cf847e1e29eb.png)
1. Check Dev Tools Console for any errors/debug messages. To Open Dev Tools Console - open the Chrome Menu in the upper-right-hand corner of the browser window and select More Tools > Developer Tools. You can also use the shortcut Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux).


## Things to do
- ~~Maximum size of items is 100, and user has to click on pagination multiple times. Check if possible to:~~
  - ~~request 1k+ words at the same time or~~
  - ~~use pagination to fetch all words~~
 - ~~Button to manually sync(add to review html page)~~
 - ~~Checkbox to temporary disable auto-sync~~
- Rethink AutoSync mechanism
- Merging vocabularies(right now extension takes  vocabulary from Babbel and sends it to Anki, even it was added before)
- Better workflow for multiple decks
- Extend to other learning web-sites(like Duolingo)
- Custom Sync server
- Error handling if AnkiConnect is not installed
  
## Links
- [Anki](https://apps.ankiweb.net)
- [AnkiConnect](https://foosoft.net/projects/anki-connect/)
- [Github Primer](https://primer.style/css/getting-started])
- [Google Chrome Extension Development](http://developer.chrome.com/extensions/devguide.html)
- [generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension)
- [Intercepting body requests in chrome extension](https://medium.com/better-programming/chrome-extension-intercepting-and-reading-the-body-of-http-requests-dd9ebdf2348b)
- [Icons used from](https://www.flaticon.com/)




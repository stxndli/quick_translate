let translationContainer = null
let srcLanguage = 'auto'
let destLanguage = 'en'
let color = "#DEF5E5"
let trigger = "alt"
let textToTranslate = ""
function onError(error) {
    console.log(`Error: ${error}`);
}

function setPreferences(item) {
    if (item.defaultSrc) {
        srcLanguage = item.defaultSrc
    }
    if (item.defaultDest) {
        destLanguage = item.defaultDest
    }
    if (item.color) {
        color = item.color
    }
    if (item.trigger) {
        trigger = item.trigger
    }
}

const getting = browser.storage.sync.get(["defaultSrc", "defaultDest", "color", "trigger"]);
getting.then(setPreferences, onError);
function translationDiv() {
    return (
        `
    <style>
    .textInput{
        resize:none; 
        width: 100%;
        height: 100%;
        padding: 8px;
        border: 1px solid ${color};
        border-radius: 5px;
        outline:none;
        font-size: 16px;   
        background-color: white;
        color: black
    }
    .selectContainer{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .selectInput{
        font-size: 14px;   
        background-color: rgba(0, 0, 0, 0.2);
        color: black;
        width: 100%;
        padding: 8px;
        border: 1px solid ${color};
        border-radius: 5px;
    }
    </style>
    <div class="selectContainer">
        <select class="selectInput" id="fromLang">
                  <option value="auto" id="detectLangOption">Detect language</option>
                  <option value="af">Afrikaans</option>
                  <option value="sq">Albanian</option>
                  <option value="am">Amharic</option>
                  <option value="ar">Arabic</option>
                  <option value="hy">Armenian</option>
                  <option value="az">Azerbaijani</option>
                  <option value="eu">Basque</option>
                  <option value="be">Belarusian</option>
                  <option value="bn">Bengali</option>
                  <option value="bs">Bosnian</option>
                  <option value="bg">Bulgarian</option>
                  <option value="ca">Catalan</option>
                  <option value="ceb">Cebuano</option>
                  <option value="ny">Chichewa</option>
                  <option value="zh-CN">Chinese (Simplified)</option>
                  <option value="zh-TW">Chinese (Traditional)</option>
                  <option value="co">Corsican</option>
                  <option value="hr">Croatian</option>
                  <option value="cs">Czech</option>
                  <option value="da">Danish</option>
                  <option value="nl">Dutch</option>
                  <option value="en">English</option>
                  <option value="eo">Esperanto</option>
                  <option value="et">Estonian</option>
                  <option value="tl">Filipino</option>
                  <option value="fi">Finnish</option>
                  <option value="fr">French</option>
                  <option value="fy">Frisian</option>
                  <option value="gl">Galician</option>
                  <option value="ka">Georgian</option>
                  <option value="de">German</option>
                  <option value="el">Greek</option>
                  <option value="gu">Gujarati</option>
                  <option value="ht">Haitian Creole</option>
                  <option value="ha">Hausa</option>
                  <option value="haw">Hawaiian</option>
                  <option value="iw">Hebrew</option>
                  <option value="hi">Hindi</option>
                  <option value="hmn">Hmong</option>
                  <option value="hu">Hungarian</option>
                  <option value="is">Icelandic</option>
                  <option value="ig">Igbo</option>
                  <option value="id">Indonesian</option>
                  <option value="ga">Irish</option>
                  <option value="it">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="jw">Javanese</option>
                  <option value="kn">Kannada</option>
                  <option value="kk">Kazakh</option>
                  <option value="km">Khmer</option>
                  <option value="rw">Kinyarwanda</option>
                  <option value="ko">Korean</option>
                  <option value="ku">Kurdish (Kurmanji)</option>
                  <option value="ky">Kyrgyz</option>
                  <option value="lo">Lao</option>
                  <option value="la">Latin</option>
                  <option value="lv">Latvian</option>
                  <option value="lt">Lithuanian</option>
                  <option value="mk">Macedonian</option>
                  <option value="ms">Malay</option>
                  <option value="ml">Malayalam</option>
                  <option value="mt">Maltese</option>
                  <option value="mi">Maori</option>
                  <option value="mr">Marathi</option>
                  <option value="mn">Mongolian</option>
                  <option value="my">Myanmar (Burmese)</option>
                  <option value="ne">Nepali</option>
                  <option value="no">Norwegian</option>
                  <option value="ny">Nyanja (Chichewa)</option>
                  <option value="or">Odia (Oriya)</option>
                  <option value="ps">Pashto</option>
                  <option value="fa">Persian</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="pa">Punjabi</option>
                  <option value="ro">Romanian</option>
                  <option value="ru">Russian</option>
                  <option value="sm">Samoan</option>
                  <option value="gd">Scots Gaelic</option>
                  <option value="sr">Serbian</option>
                  <option value="st">Sesotho</option>
                  <option value="sn">Shona</option>
                  <option value="sd">Sindhi</option>
                  <option value="si">Sinhala (Sinhalese)</option>
                  <option value="sk">Slovak</option>
                  <option value="sl">Slovenian</option>
                  <option value="so">Somali</option>
                  <option value="es">Spanish</option>
                  <option value="su">Sundanese</option>
                  <option value="sw">Swahili</option>
                  <option value="sv">Swedish</option>
                  <option value="tl">Tagalog (Filipino)</option>
                  <option value="tg">Tajik</option>
                  <option value="ta">Tamil</option>
                  <option value="tt">Tatar</option>
                  <option value="te">Telugu</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="tk">Turkmen</option>
                  <option value="uk">Ukrainian</option>
                  <option value="ur">Urdu</option>
                  <option value="ug">Uyghur</option>
                  <option value="uz">Uzbek</option>
                  <option value="vi">Vietnamese</option>
                  <option value="cy">Welsh</option>
                  <option value="xh">Xhosa</option>
                  <option value="yi">Yiddish</option>
                  <option value="yo">Yoruba</option>
                  <option value="zu">Zulu</option>

        </select>
    </div>
    <div style="display: flex;align-items: center;justify-content: center;">
        <select class="selectInput" id="toLang">
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="az">Azerbaijani</option>
          <option value="eu">Basque</option>
          <option value="be">Belarusian</option>
          <option value="bn">Bengali</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="ceb">Cebuano</option>
          <option value="ny">Chichewa</option>
          <option value="zh-CN">Chinese (Simplified)</option>
          <option value="zh-TW">Chinese (Traditional)</option>
          <option value="co">Corsican</option>
          <option value="hr">Croatian</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="eo">Esperanto</option>
          <option value="et">Estonian</option>
          <option value="tl">Filipino</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="fy">Frisian</option>
          <option value="gl">Galician</option>
          <option value="ka">Georgian</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="gu">Gujarati</option>
          <option value="ht">Haitian Creole</option>
          <option value="ha">Hausa</option>
          <option value="haw">Hawaiian</option>
          <option value="iw">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hmn">Hmong</option>
          <option value="hu">Hungarian</option>
          <option value="is">Icelandic</option>
          <option value="ig">Igbo</option>
          <option value="id">Indonesian</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="jw">Javanese</option>
          <option value="kn">Kannada</option>
          <option value="kk">Kazakh</option>
          <option value="km">Khmer</option>
          <option value="rw">Kinyarwanda</option>
          <option value="ko">Korean</option>
          <option value="ku">Kurdish (Kurmanji)</option>
          <option value="ky">Kyrgyz</option>
          <option value="lo">Lao</option>
          <option value="la">Latin</option>
            <option value="lv">Latvian</option>
          <option value="lt">Lithuanian</option>
          <option value="mk">Macedonian</option>
          <option value="ms">Malay</option>
          <option value="ml">Malayalam</option>
          <option value="mt">Maltese</option>
          <option value="mi">Maori</option>
          <option value="mr">Marathi</option>
          <option value="mn">Mongolian</option>
          <option value="my">Myanmar (Burmese)</option>
          <option value="ne">Nepali</option>
          <option value="no">Norwegian</option>
          <option value="ny">Nyanja (Chichewa)</option>
          <option value="or">Odia (Oriya)</option>
          <option value="ps">Pashto</option>
          <option value="fa">Persian</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="pa">Punjabi</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sm">Samoan</option>
          <option value="gd">Scots Gaelic</option>
          <option value="sr">Serbian</option>
          <option value="st">Sesotho</option>
          <option value="sn">Shona</option>
          <option value="sd">Sindhi</option>
          <option value="si">Sinhala (Sinhalese)</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="so">Somali</option>
          <option value="es">Spanish</option>
          <option value="su">Sundanese</option>
          <option value="sw">Swahili</option>
          <option value="sv">Swedish</option>
          <option value="tl">Tagalog (Filipino)</option>
          <option value="tg">Tajik</option>
          <option value="ta">Tamil</option>
          <option value="tt">Tatar</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="tr">Turkish</option>
          <option value="tk">Turkmen</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="ug">Uyghur</option>
          <option value="uz">Uzbek</option>
          <option value="vi">Vietnamese</option>
          <option value="cy">Welsh</option>
          <option value="xh">Xhosa</option>
          <option value="yi">Yiddish</option>
          <option value="yo">Yoruba</option>
          <option value="zu">Zulu</option>

        </select>
    </div>
    <div style="display: flex;align-items: center;justify-content: center;">
        <textarea class="textInput" placeholder="Type some text to translate" id="textToTranslate"></textarea>
    </div>
    <div style="display: flex;align-items: center;justify-content: center;">
        <textarea readonly class="textInput" placeholder="Translation appears here" id="translatedText"></textarea>
    </div>`
    )
}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

async function translate(src, dest, text) {
    const translatedText = document.querySelector("#translatedText")
    translatedText.value = 'Loading ...'
    if (src === "auto") {
        const el = document.querySelector("#detectLangOption")
        const langInfo = await browser.i18n.detectLanguage(text)
        if (langInfo.languages.length > 0) {
            src = langInfo.languages[0].language
        }
        else {
            src = 'en'
        }
        el.innerText = `Detect language (${src})`
    }
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${src}%7C${dest}`)
    if (response.status === 200) {
        response.json().then(data => {
            translatedText.value = data.responseData.translatedText
        })
    }
    else {
        translatedText.value = 'AN ERROR OCCURED'
    }
}
function getTriggerKey(key, e) {
    if (key === "alt") return e.altKey
    else if (key === "ctrl") return e.ctrlKey
    else if (key === "shift") return e.shiftKey
    else if (key === "none") return true
}
document.onmouseup = (e) => {
    const selectedText = getSelectionText()
    const { pageX, pageY } = e
    const triggerKey = getTriggerKey(trigger, e)
    if (selectedText && triggerKey) {
        textToTranslate = selectedText
        // check if clicked on the translation box, otherwise delete it
        if (translationContainer) {
            if (pageX === 0 && pageY === 0) return
            const { left, top, right, bottom } = translationContainer.getBoundingClientRect()
            if (pageX < left || pageX > right || pageY < top || pageY > bottom) {
                translationContainer.remove()
                translationContainer = null
            }
            return
        }
        translationContainer = document.createElement('div')
        translationContainer.style.cssText = `
            background: ${color};
            font-family: sans-serif;  
            position: absolute;
            left:${pageX}px;
            top:${pageY}px;
            width: 500px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 8px;
            padding-right: 8px;
            padding-left: 8px;
            padding-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 7px 7px 5px #888888;
            z-index:100
            `
        translationContainer.innerHTML = translationDiv()
        document.body.appendChild(translationContainer);
        // set preferences
        const toLangElement = document.querySelector("#toLang")
        toLangElement.value = destLanguage
        const fromLangElement = document.querySelector("#fromLang")
        fromLangElement.value = srcLanguage

        // perform translation
        const textToTranslateElement = document.querySelector("#textToTranslate")
        textToTranslateElement.value = textToTranslate
        translate(srcLanguage, destLanguage, textToTranslate)
        // event listeners
        const to = document.querySelector("#toLang")
        const from = document.querySelector("#fromLang")
        to.addEventListener("change", (e) => {
            destLanguage = e.target.value
            translate(srcLanguage, destLanguage, textToTranslate)
        })
        from.addEventListener("change", (e) => {
            srcLanguage = e.target.value
            translate(srcLanguage, destLanguage, textToTranslate)
        })
        // start translation after 1s idle
        let typingTimer
        textToTranslateElement.addEventListener("keyup", (e) => {
            const input = e.target.value
            clearTimeout(typingTimer)
            if (input) {
                typingTimer = setTimeout(doneTyping, 1000)
            }
            function doneTyping() {
                textToTranslate = input
                translate(srcLanguage, destLanguage, textToTranslate)
            }
        })
    }
    else {
        // check if clicked on the translation box, otherwise delete it
        if (translationContainer) {
            if (pageX === 0 && pageY === 0) return
            const { left, top, right, bottom } = translationContainer.getBoundingClientRect()
            if (pageX < left || pageX > right || pageY < top || pageY > bottom) {
                translationContainer.remove()
                translationContainer = null
            }
            return
        }

    }
}

function saveOptions(e) {
  e.preventDefault();

  const src = document.querySelector("#src").value
  const dest = document.querySelector("#dest").value
  const color = document.querySelector("#color").value
  const trigger = document.querySelector("#trigger").value
  browser.storage.sync.set({
    defaultSrc: src,
    defaultDest: dest,
    color: color,
    trigger: trigger
  });
  document.querySelector("#saved").style.visibility = 'visible'

}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#src").value = result.defaultSrc || "auto";
    document.querySelector("#dest").value = result.defaultDest || "en";
    document.querySelector("#color").value = result.color || "#DEF5E5";
    document.querySelector("#trigger").value = result.trigger || "alt";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get();

  getting.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("form").addEventListener("submit", saveOptions);


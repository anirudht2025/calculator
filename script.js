function setEditor(e) {
  //   document.querySelector("#editor").value += e.target.textContent;

  //   We can use the id name directly instead of using document.querySelector("#editor").
  //   editor.value += e.target.textContent;
  editor.value += e.target.textContent.trim();
}

function getResult() {
  editor.value = eval(editor.value);
}

function clearAll() {
  editor.value = "";
}

function clearOne() {
  editor.value = editor.value.slice(0, -1);
}

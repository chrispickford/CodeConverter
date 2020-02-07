(function(window, document) {
  const codeTextArea = document.getElementById("code");
  const textTextArea = document.getElementById("text");
  const convertToTextBtn = document.getElementById("convertToText");
  const convertToCodeBtn = document.getElementById("convertToCode");

  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const convertToText = () => {
    const input = codeTextArea.value;
    const inputArr = input.split(";");
    const outputArr = new Array(inputArr.length);

    for (let i=0;i<inputArr.length;i++) {
      if (isNaN(inputArr[i])) {
        outputArr[i] = inputArr[i];
      } else {
        outputArr[i] = alphabet[inputArr[i]];
      }
    }

    textTextArea.value = outputArr.join("");
  };

  const convertToCode = () => {
    const input = textTextArea.value.toUpperCase();
    const inputArr = input.split(";");
    const outputArr = new Array(inputArr.length);

    for (let i=0;i<input.length;i++) {
      const idx = alphabet.indexOf(input[i]);
      if (idx >= 0) {
        outputArr[i] = idx;
      } else {
        outputArr[i] = input[i];
      }
    }
    
    codeTextArea.value = outputArr.join(";");
  };

  convertToTextBtn.addEventListener("click", convertToText);
  convertToCodeBtn.addEventListener("click", convertToCode);

})(window, document);
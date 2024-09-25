function printText() {
    console.log("Words of text with letters");
    setTimeout(printText,1000);//forgot here that printText() will fire the function immidiately
}

printText();



document.getElementById("copy").onclick = function() {
    var text = document.getElementById("content").value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}

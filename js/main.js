//Write your pseduo code first!
//onclick 
document.querySelector('#dominosPizza').addEventListener('click', convertToC)

function convertToC() {
    //get value from user to convert
    const f = Number(document.querySelector('#f').value)

    //convert the value
    let cel = (f - 32) * 5/9

    //display the value to the user
    document.querySelector('#placeToSee').innerText = cel
  }

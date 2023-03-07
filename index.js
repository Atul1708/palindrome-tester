const input = document.querySelector(".input_grp input");
const checkBtn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancel");
const msgShow = document.querySelector(".msgShow");


const palindromeChecker = () => {
  let inputValue = input.value.toLowerCase();
  console.log(inputValue);
  let string = "";
  for (let i = inputValue.length - 1; i >= 0; i--) {
    string += inputValue[i];
  }

  if(inputValue == "") {
    msgShow.innerHTML = "Please enter a word first";
   setInterval(() => {
    msgShow.innerHTML = "";
   },3000)
  }
  else if (inputValue === string) {
    msgShow.innerHTML = `${inputValue} is an palindrome word`;
    setInterval(() => {
      msgShow.innerHTML = "";
     },3000)
  } else {
    msgShow.innerHTML = `${inputValue} is not an palindrome word`;
    setInterval(() => {
      msgShow.innerHTML = "";
     },3000)
  }
};

checkBtn.addEventListener("click", palindromeChecker);

function remove() {
  input.value = "";
}

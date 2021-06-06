const palindromeForm = document.getElementById("palindromeForm");
const palindromeResult = document.getElementById("palindromeResult");

// function to check if input is a palindrome
const checkPalindrome = string => {
  let output = "";
  string.split("").forEach(letter => {
    output = letter + output;
  })

  //check if string and palindrome are equal
  if(output === string) {
    palindromeResult.className = "container__result success";
    palindromeResult.textContent = `${string.toUpperCase()} is a PALINDROME!`;
  } else {
    palindromeResult.className = "container__result error";
    palindromeResult.textContent = `${string.toUpperCase()} is NOT a palindrome!`;
  }
};

// function to submit palindromeForm
const submitPalindromeForm = e => {
  //prevent default form action
  e.preventDefault();

  palindromeResult.className = "container__result";
  let value = e.target.palindromeInput.value;
  value = value.trim().toLowerCase();
  
  if(value)
    checkPalindrome(value);

  //reset form
  e.target.reset();
};

// event listeners
palindromeForm.addEventListener("submit", submitPalindromeForm);
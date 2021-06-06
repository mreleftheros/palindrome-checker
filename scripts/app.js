const palindromeForm = document.getElementById("palindromeForm");

// function to check if input is a palindrome

// function to submit palindromeForm
const submitPalindromeForm = e => {
  //prevent default form action
  e.preventDefault();

  let value = e.target.palindromeInput.value;
  value = value.trim().toLowerCase();
  
  if(value)
  // checkPalindrome(value);

  //reset form
  e.target.reset();
};

// event listeners
palindromeForm.addEventListener("submit", submitPalindromeForm);
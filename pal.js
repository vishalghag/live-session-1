// **Problem Statement**#

// Write a function that takes a variable testVariable, which contains a string, and checks whether or not it is a palindrome.

// *What is a “Palindrome”?*#

// A Palindrome is a string that reads the same backward and forwards. For example madammadam, poppop, etc. All strings with length 11 are considered palindromes.

// Remember, lower case letters are different from upper case letters, therefore, AdaAda is not a palindrome.

// **Input**#

// A variable testVariable containing a string.

// **Output**#

// true if the input string is a palindrome. false if the string is not a palindrome.

// Sample Input#

// "madam"

// Sample Output#

// true

function pal(testVariable)
{
    let a = testVariable.split("").reverse("").join("")

    if(a == testVariable)
    {
        return true
    }
    return false
}
 console.log(pal("madam"));  

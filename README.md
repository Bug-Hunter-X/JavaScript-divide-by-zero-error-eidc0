# JavaScript Divide by Zero Error

This repository demonstrates a common error in JavaScript: dividing by zero.  The `divide` function handles the error by throwing an exception, preventing the program from crashing silently.  However, the main code still attempts a division by zero, highlighting the importance of comprehensive error handling and testing.

## Bug
The `bug.js` file contains the erroneous code.  It defines four mathematical functions (`add`, `subtract`, `multiply`, `divide`) and then calls them, including a call to `divide` with a divisor of 0, which will throw an error.

## Solution
The `bugSolution.js` file demonstrates how to mitigate the error by using a try-catch block.  This allows the program to handle the error gracefully instead of crashing.

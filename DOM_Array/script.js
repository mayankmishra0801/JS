const main = document.getElementById('main');

const addUserBtn = document.getElementById('add-user');

const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaries');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate_wealth');


// getRandomUser();
// getRandomUser();

// getRandomUser();


let data = [];
// fetch random user and add money

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
     const data1 = await res.json();

  const user = data1.results[0];
  console.log(user);
  const newUser = {
    name:`${user.name.first} ${user.name.last}`,
    money:Math.floor(Math.random()*1000000),


  }
  addData(newUser);
//   add new obj to data arr
}




// double money
function doubleMoney(){
    data = data.map((user)=>{
        return{...user,money:user.money*2};
    });
    UpdateDOM();
}


// add new obj to data arr
  function addData(obj){
    data.push(obj);
    UpdateDOM();

  }


//   calculate  wealth 

function calculateWealth(){
    const wealth = data.reduce((acc,user)=>(acc+= user.money),0);
    const wealthE1 = document.createElement('div');
    wealthE1.innerHTML =  `<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong></h3>`
    main.appendChild(wealthE1);
}

//   update DOM
function UpdateDOM(providedData = data){
main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
providedData.forEach((item)=>{
  const element = document.createElement('div');
  element.classList.add('person');
  element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
  main.appendChild(element);

})

}

// format number as money
// filter only millionarie

function showMillionaires(){
    data = data.filter((user)=>
        user.money > 1000000);
 

    UpdateDOM();
}

// sort by richest
function sortByRichest(){
    data.sort((a,b)=>b.money - a.money);
    UpdateDOM();

}
//Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
  }

// event listener
addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortByRichest);

showMillionairesBtn.addEventListener('click',showMillionaires);
calculateWealthBtn.addEventListener('click',calculateWealth);







// This code defines a function called UpdateDOM that updates the DOM (Document Object Model) with data provided as an argument or using a default data object called data.

// Here's a breakdown of how the code works:

// providedData = data: The providedData parameter is set to the data object if no argument is provided when calling the function. This allows the function to use the default data object if necessary.

// main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';: This line sets the innerHTML property of the main element to a string containing an HTML header (<h2>) with the text "Person Wealth". The <strong> tags are used to make the text bold.

// providedData.forEach((item) => {...});: The forEach() method is used to iterate over each element in the providedData array. For each item in the array, the code inside the curly braces will be executed.

// const element = document.createElement('div');: This line creates a new <div> element and assigns it to the element constant.

// element.classList.add('person');: The classList.add() method adds the CSS class name 'person' to the element div. This is done to apply styling to the div, presumably defined in CSS.

// element.innerHTML = <strong>${item.name}</strong> ${formatMoney(item.money)};: The innerHTML property of the element div is set to a template string that contains HTML markup. The template string includes the name of the person (item.name) wrapped in <strong> tags for bold formatting, and the monetary value (item.money) formatted using the formatMoney function. This line populates the div with the person's name and wealth information.

// main.appendChild(element);: The element div is appended as a child to the main element. This adds the newly created div to the DOM, making it visible on the webpage.

// Overall, the UpdateDOM function updates the DOM by creating a <div> element for each item in the provided data array. Each div contains the person's name and their wealth, formatted using the formatMoney function. These divs are then appended to the main element, effectively updating the webpage with the new data.

















// This code defines a function called formatMoney that takes a number as input and returns a formatted string representing the number as a monetary value.

// Here's a breakdown of how the code works:

// number.toFixed(2): The toFixed(2) method is used to convert the input number into a string with exactly two decimal places. This ensures that the resulting value will have a fixed precision of two decimal places.

// .replace(/\d(?=(\d{3})+\.)/g, '$&,'): This part of the code utilizes regular expressions and the replace() method to insert commas as thousands separators. Let's break down the regular expression:

// \d: Matches any digit (0-9).
// (?=(\d{3})+\.)): This is a positive lookahead assertion that matches a digit only if it is followed by groups of three digits (e.g., 1,000, 100,000) and a dot (decimal point). This ensures that the matching digits are part of the integer portion of the number, not the decimal places.
// The replace() method is then used to replace the matched digit with '$&,'. Here, $& represents the matched digit, and the comma is added after it. This effectively adds commas as thousands separators to the number.

// '$' + ...: The resulting formatted string is concatenated with a dollar sign ('$') at the beginning to indicate a monetary value.

// Overall, the formatMoney function takes a number, formats it with two decimal places, and adds commas as thousands separators, returning the formatted string representation of the monetary value.






// This code defines an asynchronous function called getRandomUser that fetches random user data from an API, processes the data, and adds a new user object to the existing data array.

// Here's a breakdown of how the code works:

// async function getRandomUser() { ... }: This line declares an asynchronous function named getRandomUser. Async functions allow the use of the await keyword within the function body, enabling asynchronous operations.

// const res = await fetch('https://randomuser.me/api/');: The fetch() function is used to send a GET request to the specified URL, which retrieves random user data from the "randomuser.me" API. The await keyword is used to pause the execution of the function until the promise returned by fetch() is resolved, and the response is assigned to the res variable.

// const data = await res.json();: The json() method is called on the res response object, which returns a promise that resolves to the JSON data retrieved from the API. The await keyword is used again to pause the execution of the function until the promise is resolved, and the resulting data is assigned to the data variable.

// const user = data.results[0];: The results property of the data object contains an array of user objects. Here, we extract the first user object and assign it to the user variable.

// console.log(user);: This line logs the user object to the console, allowing you to see the retrieved user data.

// const newUser = { ... }: A new object named newUser is created, which will hold the processed data for the new user. The name property is set to the concatenation of the user's first and last names, while the money property is assigned a random value between 0 and 999,999 (representing the wealth of the user).

// addData(newUser);: The addData function is called, passing in the newUser object as an argument. It's assumed that this function adds the newUser object to an existing data array or performs some other data manipulation operation.

// Overall, the getRandomUser function retrieves random user data from an API, processes the data, creates a new user object, and then calls the addData function to incorporate the new user object into the existing data.



// This code calculates the total wealth by using the reduce() method on the data array.

// Here's a breakdown of how the code works:

// const wealth = data.reduce((acc, user) => (acc += user.money), 0);: This line declares a constant variable wealth and assigns it the result of the reduce() method applied to the data array.

// data.reduce((acc, user) => {...}, 0): The reduce() method is used to iterate over the data array and reduce it to a single value. It takes two parameters: a callback function and an initial value (optional).

// (acc, user) => {...}: This is the callback function provided to the reduce() method. It takes two parameters: acc (short for "accumulator") and user (representing each element of the data array).

// (acc += user.money): In the callback function, the += operator is used to add the user.money value to the accumulator acc. The user.money represents the wealth of each user. The result is stored back in the accumulator.

// , 0): The second parameter passed to the reduce() method is the initial value of the accumulator, which is set to 0. This means that the accumulation starts from 0 and the first iteration of the callback function will add the wealth of the first user to 0.

// Overall, the reduce() method iterates over each element in the data array, adding up the user.money values and accumulating them in the wealth variable. At the end of the reduction, the wealth variable will hold the total wealth of all the users in the data array.










var userId;

var password;

var userIdAlert = []

var passwordArray = []

//true or false is the user ID valid
function isUserIdValid(userId) {
  if(!(userId.includes("&") || userId.includes("#") || userId.includes("!")) && userId.length > 5) {
    return {valid: true};
  } else {
    return {valid: false}
    };
  }

//user ID length and string return
  function userIdLength(userId){
    if(userId.length < 5){
      return ": must contain at least 5 characters."
    }
  }

//Check upper and lower case of password
function checkCase(password) {
  return password.toUpperCase() != password && password.toLowerCase() != password
};

//Check if password has a number
function test(str) {
  return /\d/.test(str);
};

// Checks validation of characters, length, case and numbers in password
function isPasswordValid(password) {
  if ((password.includes("$") || password.includes("#") || password.includes("!")) && password.length >5 && !password.includes("password") && checkCase(password) && test(password)){
    return {valid: true};
  } else {
    return{ valid: false}
  }
};


//tests the validity of both password and ID and returns reasons
function areCredentialsValid(userId, password) {
  if(isUserIdValid(userId).valid && isPasswordValid(password).valid) {
  return alert("Your credentials are valid.")
}
//user ID string/array return
if(isUserIdValid(userId).valid === false){
  alert("User ID " + userAlertArray(userId) + " " + userIdLength(userId))
}
//password string/array return
 if(isPasswordValid(password).valid === false){
  alert("Password: " + passwordAlertArray(password))
};
}
//prompts
function getUserId() {
  userId=prompt("Enter User ID");
};

function getUserPassword() {
  password=prompt("Enter Password");
};

//userID array sorter
  function removeSort(e, index){
      if (e != userIdAlert[index + 1]){
      return e;
    };
  }

//pushed userID errors into an array
 function userAlertArray(){
    if (userId.includes("&")){
      userIdAlert.push("&")}
    if (userId.includes("#")){
      userIdAlert.push("#")}
    if (userId.includes("!")){
        userIdAlert.push("!")};
    return "cannot contain: " + userIdAlert.sort().filter(removeSort).join(", ")
  };


//pushes password errors into an array and joins them
  function passwordAlertArray(){
    if(!(password.includes("$") || password.includes("#") || password.includes("!"))){
      passwordArray.push("Must contain one of these symbols: !, # or &")
    };
    if(password.length < 5){
      passwordArray.push("Must contain at least 5 characters")
    };
    if(checkCase(password) != true){
      passwordArray.push("Must include and uppercased and lowercased letter")
    };
    if (test(password) != true){
      passwordArray.push("Must include a number")
    };
    return passwordArray.join(": ")
  }

//calls all functions

function login(){
  getUserId();
  getUserPassword();
  areCredentialsValid(userId, password);
  }

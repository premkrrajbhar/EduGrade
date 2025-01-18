let subMark1 = document.getElementById("subMark1");
let calstuGrade1 = document.getElementById("calstuGrade1");
let displayGrade1 = document.getElementById("displayGrade1");

let subMark2 = document.getElementById("subMark2");
let calstuGrade2 = document.getElementById("calstuGrade2");
let displayGrade2 = document.getElementById("displayGrade2");

let subMark3 = document.getElementById("subMark3");
let calstuGrade3 = document.getElementById("calstuGrade3");
let displayGrade3 = document.getElementById("displayGrade3");

let subMark4 = document.getElementById("subMark4");
let calstuGrade4 = document.getElementById("calstuGrade4");
let displayGrade4 = document.getElementById("displayGrade4");

let subMark5 = document.getElementById("subMark5");
let calstuGrade5 = document.getElementById("calstuGrade5");
let displayGrade5 = document.getElementById("displayGrade5");

let calFinalMarks = document.getElementById("calFinalMarks");
let displayFinalMarks = document.getElementById("displayFinalMarks");

let calFinalPercentage = document.getElementById("calFinalPercentage");
let displayFinalPercentage = document.getElementById("displayFinalPercentage");

let clearBtn = document.getElementById("clearBtn");

let dropDown1 = document.getElementById("dropDown1");
let dropDown2 = document.getElementById("dropDown2");
let dropDown3 = document.getElementById("dropDown3");
let dropDown4 = document.getElementById("dropDown4");
let dropDown5 = document.getElementById("dropDown5");

// Calculate Grade for Subject 1
calstuGrade1.addEventListener("click", () => {
  let subjectMark1 = Number(subMark1.value);

  if (subjectMark1 == "") {
    alert("Please Enter Your Marks");
    return;
  }

  if (subjectMark1 === 100) {
    displayGrade1.textContent = "Grade: " + "A++";
  } else if (subjectMark1 >= 90 && subjectMark1 <= 99) {
    displayGrade1.textContent = "Grade: " + "A";
  } else if (subjectMark1 >= 80 && subjectMark1 <= 89) {
    displayGrade1.textContent = "Grade: " + "B";
  } else if (subjectMark1 >= 70 && subjectMark1 <= 79) {
    displayGrade1.textContent = "Grade: " + "C";
  } else if (subjectMark1 >= 60 && subjectMark1 <= 69) {
    displayGrade1.textContent = "Grade: " + "D";
  } else if (subjectMark1 >= 50 && subjectMark1 <= 59) {
    displayGrade1.textContent = "Grade: " + "E";
  } else if (subjectMark1 >= 0 && subjectMark1 <= 49) {
    displayGrade1.textContent = "Grade: " + "F";
  } else {
    alert("Invalid Marks! Marks must be between 0 and 100");
  }
});

// Calculate Grade for Subject 2
calstuGrade2.addEventListener("click", () => {
  let subjectMark2 = Number(subMark2.value);

  if (subjectMark2 == "") {
    alert(" Please Enter Your Marks");
    return;
  }

  if (subjectMark2 === 100) {
    displayGrade2.textContent = "Grade: " + "A++";
  } else if (subjectMark2 >= 90 && subjectMark2 <= 99) {
    displayGrade2.textContent = "Grade: " + "A";
  } else if (subjectMark2 >= 80 && subjectMark2 <= 89) {
    displayGrade2.textContent = "Grade: " + "B";
  } else if (subjectMark2 >= 70 && subjectMark2 <= 79) {
    displayGrade2.textContent = "Grade: " + "C";
  } else if (subjectMark2 >= 60 && subjectMark2 <= 69) {
    displayGrade2.textContent = "Grade: " + "D";
  } else if (subjectMark2 >= 50 && subjectMark2 <= 59) {
    displayGrade2.textContent = "Grade: " + "E";
  } else if (subjectMark2 >= 0 && subjectMark2 <= 49) {
    displayGrade2.textContent = "Grade: " + "F";
  } else {
    alert("Invalid Marks! Marks must be between 0 and 100");
  }
});

// Calculate Grade for Subject 3
calstuGrade3.addEventListener("click", () => {
  let subjectMark3 = Number(subMark3.value);

  if (subjectMark3 == "") {
    alert(" Please Enter Your Marks");
    return;
  }

  if (subjectMark3 === 100) {
    displayGrade3.textContent = "Grade: " + "A++";
  } else if (subjectMark3 >= 90 && subjectMark3 <= 99) {
    displayGrade3.textContent = "Grade: " + "A";
  } else if (subjectMark3 >= 80 && subjectMark3 <= 89) {
    displayGrade3.textContent = "Grade: " + "B";
  } else if (subjectMark3 >= 70 && subjectMark3 <= 79) {
    displayGrade3.textContent = "Grade: " + "C";
  } else if (subjectMark3 >= 60 && subjectMark3 <= 69) {
    displayGrade3.textContent = "Grade: " + "D";
  } else if (subjectMark3 >= 50 && subjectMark3 <= 59) {
    displayGrade3.textContent = "Grade: " + "E";
  } else if (subjectMark3 >= 0 && subjectMark3 <= 49) {
    displayGrade3.textContent = "Grade: " + "F";
  } else {
    alert("Invalid Marks! Marks must be between 0 and 100");
  }
});

// Calculate Grade for Subject 4
calstuGrade4.addEventListener("click", () => {
  let subjectMark4 = Number(subMark4.value);

  if (subjectMark4 == "") {
    alert(" Please Enter Your Marks");
    return;
  }

  if (subjectMark4 === 100) {
    displayGrade4.textContent = "Grade: " + "A++";
  } else if (subjectMark4 >= 90 && subjectMark4 <= 99) {
    displayGrade4.textContent = "Grade: " + "A";
  } else if (subjectMark4 >= 80 && subjectMark4 <= 89) {
    displayGrade4.textContent = "Grade: " + "B";
  } else if (subjectMark4 >= 70 && subjectMark4 <= 79) {
    displayGrade4.textContent = "Grade: " + "C";
  } else if (subjectMark4 >= 60 && subjectMark4 <= 69) {
    displayGrade4.textContent = "Grade: " + "D";
  } else if (subjectMark4 >= 50 && subjectMark4 <= 59) {
    displayGrade4.textContent = "Grade: " + "E";
  } else if (subjectMark4 >= 0 && subjectMark4 <= 49) {
    displayGrade4.textContent = "Grade: " + "F";
  } else {
    alert("Invalid Marks! Marks must be between 0 and 100");
  }
});

// Calculate Grade for Subject 5
calstuGrade5.addEventListener("click", () => {
  let subjectMark5 = Number(subMark5.value);

  if (subjectMark5 == "") {
    alert(" Please Enter Your Marks");
    return;
  }

  if (subjectMark5 === 100) {
    displayGrade5.textContent = "Grade: " + "A++";
  } else if (subjectMark5 >= 90 && subjectMark5 <= 99) {
    displayGrade5.textContent = "Grade: " + "A";
  } else if (subjectMark5 >= 80 && subjectMark5 <= 89) {
    displayGrade5.textContent = "Grade: " + "B";
  } else if (subjectMark5 >= 70 && subjectMark5 <= 79) {
    displayGrade5.textContent = "Grade: " + "C";
  } else if (subjectMark5 >= 60 && subjectMark5 <= 69) {
    displayGrade5.textContent = "Grade: " + "D";
  } else if (subjectMark5 >= 50 && subjectMark5 <= 59) {
    displayGrade5.textContent = "Grade: " + "E";
  } else if (subjectMark5 >= 0 && subjectMark5 <= 49) {
    displayGrade5.textContent = "Grade: " + "F";
  } else {
    alert("Invalid Marks! Marks must be between 0 and 100");
  }
});

// To calculate Final Marks
calFinalMarks.addEventListener("click", () => {
  let subject1 = Number(subMark1.value);
  let subject2 = Number(subMark2.value);
  let subject3 = Number(subMark3.value);
  let subject4 = Number(subMark4.value);
  let subject5 = Number(subMark5.value);

  // validate to input
  if (
    !subMark1.value ||
    !subMark2.value ||
    !subMark3.value ||
    !subMark4.value ||
    !subMark5
  ) {
    alert("Please Enter all Marks");
    return;
  }

  if (
    subMark1.value < 0 ||
    subMark1.value > 100 ||
    subMark2.value < 0 ||
    subMark2.value > 100 ||
    subMark3.value < 0 ||
    subMark3.value > 100 ||
    subMark4.value < 0 ||
    subMark4.value > 100 ||
    subMark5.value < 0 ||
    subMark5.value > 100
  ) {
    alert("Invalid Marks! Marks must be between 0 and 100");
    return;
  }

  let finalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

  displayFinalMarks.textContent =
    "Your Final Marks is: " + finalMarks + " out of 500";
});

// To calculate the final Percentage
calFinalPercentage.addEventListener("click", () => {
  let sub1 = Number(subMark1.value);
  let sub2 = Number(subMark2.value);
  let sub3 = Number(subMark3.value);
  let sub4 = Number(subMark4.value);
  let sub5 = Number(subMark5.value);

  // validate to input
  if (
    !subMark1.value ||
    !subMark2.value ||
    !subMark3.value ||
    !subMark4.value ||
    !subMark5
  ) {
    alert("Please Enter all Marks");
    return;
  }

  if (
    subMark1.value < 0 ||
    subMark1.value > 100 ||
    subMark2.value < 0 ||
    subMark2.value > 100 ||
    subMark3.value < 0 ||
    subMark3.value > 100 ||
    subMark4.value < 0 ||
    subMark4.value > 100 ||
    subMark5.value < 0 ||
    subMark5.value > 100
  ) {
    alert("Invalid Marks! Marks must be between 0 and 100");
    return;
  }

  let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
  const perSubMark = 100;
  const totalSubMark = 500;
  let totalPercentage = (totalMarks * perSubMark) / totalSubMark;

  displayFinalPercentage.textContent =
    "Your Final Percentage is: " + totalPercentage + "%";
});

// To clear input and result
clearBtn.addEventListener("click", () => {
  subMark1.value = "";
  subMark2.value = "";
  subMark3.value = "";
  subMark4.value = "";
  subMark5.value = "";

  displayGrade1.textContent = "";
  displayGrade2.textContent = "";
  displayGrade3.textContent = "";
  displayGrade4.textContent = "";
  displayGrade5.textContent = "";

  displayFinalMarks.textContent = "";

  displayFinalPercentage.textContent = "";

  dropDown1.selectedIndex = 0;
  dropDown2.selectedIndex = 0;
  dropDown3.selectedIndex = 0;
  dropDown4.selectedIndex = 0;
  dropDown5.selectedIndex = 0;
});

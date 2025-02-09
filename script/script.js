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
  let validateDropdown1 = dropDown1.value;
  let subjectMark1 = subMark1.value;

  if (!validateDropdown1 && !subjectMark1) {
    displayGrade1.innerText = "Please choose your subject and enter your marks";
    return;
  }

  if (!validateDropdown1) {
    displayGrade1.innerText = "Please choose your subject";
    return;
  }

  if (!subjectMark1) {
    displayGrade1.innerText = "Please Enter Your Marks";
    return;
  }

  let subjectGrade1 = parseFloat(subjectMark1);

  if (subjectGrade1 === 100) {
    displayGrade1.textContent = "Grade: " + "A++";
  } else if (subjectGrade1 >= 90 && subjectGrade1 <= 99) {
    displayGrade1.textContent = "Grade: " + "A";
  } else if (subjectGrade1 >= 80 && subjectGrade1 <= 89) {
    displayGrade1.textContent = "Grade: " + "B";
  } else if (subjectGrade1 >= 70 && subjectGrade1 <= 79) {
    displayGrade1.textContent = "Grade: " + "C";
  } else if (subjectGrade1 >= 60 && subjectGrade1 <= 69) {
    displayGrade1.textContent = "Grade: " + "D";
  } else if (subjectGrade1 >= 50 && subjectGrade1 <= 59) {
    displayGrade1.textContent = "Grade: " + "E";
  } else if (subjectGrade1 >= 0 && subjectGrade1 <= 49) {
    displayGrade1.textContent = "Grade: " + "F";
  } else {
    displayGrade1.innerText = "Invalid Marks! Marks must be between 0 and 100";
  }
});

// Calculate Grade for Subject 2
calstuGrade2.addEventListener("click", () => {
  let validateDropdown2 = dropDown2.value;
  let subjectMark2 = subMark2.value;

  if (!validateDropdown2 && !subjectMark2) {
    displayGrade2.innerText = "Please choose your subject and enter your marks";
    return;
  }

  if (!validateDropdown2) {
    displayGrade2.innerText = "Please choose your subject";
    return;
  }

  if (!subjectMark2) {
    displayGrade2.innerText = "Please enter your marks";
    return;
  }

  let subjectGrade2 = parseFloat(subjectMark2);

  if (subjectGrade2 === 100) {
    displayGrade2.textContent = "Grade: " + "A++";
  } else if (subjectGrade2 >= 90 && subjectGrade2 <= 99) {
    displayGrade2.textContent = "Grade: " + "A";
  } else if (subjectGrade2 >= 80 && subjectGrade2 <= 89) {
    displayGrade2.textContent = "Grade: " + "B";
  } else if (subjectGrade2 >= 70 && subjectGrade2 <= 79) {
    displayGrade2.textContent = "Grade: " + "C";
  } else if (subjectGrade2 >= 60 && subjectGrade2 <= 69) {
    displayGrade2.textContent = "Grade: " + "D";
  } else if (subjectGrade2 >= 50 && subjectGrade2 <= 59) {
    displayGrade2.textContent = "Grade: " + "E";
  } else if (subjectGrade2 >= 0 && subjectGrade2 <= 49) {
    displayGrade2.textContent = "Grade: " + "F";
  } else {
    displayGrade2.innerText = "Invalid Marks! Marks must be between 0 and 100";
  }
});

// Calculate Grade for Subject 3
calstuGrade3.addEventListener("click", () => {
  let validateDropdown3 = dropDown3.value;
  let subjectMark3 = subMark3.value;

  if (!validateDropdown3 && !subjectMark3) {
    displayGrade3.innerText = "Please choose your subject and enter your marks";
    return;
  }

  if (!validateDropdown3) {
    displayGrade3.innerText = "Please choose your subject";
    return;
  }

  if (!subjectMark3) {
    displayGrade3.innerText = "Please Enter Your Marks";
    return;
  }

  let subjectGrade3 = parseFloat(subjectMark3);

  if (subjectGrade3 === 100) {
    displayGrade3.textContent = "Grade: " + "A++";
  } else if (subjectGrade3 >= 90 && subjectGrade3 <= 99) {
    displayGrade3.textContent = "Grade: " + "A";
  } else if (subjectGrade3 >= 80 && subjectGrade3 <= 89) {
    displayGrade3.textContent = "Grade: " + "B";
  } else if (subjectGrade3 >= 70 && subjectGrade3 <= 79) {
    displayGrade3.textContent = "Grade: " + "C";
  } else if (subjectGrade3 >= 60 && subjectGrade3 <= 69) {
    displayGrade3.textContent = "Grade: " + "D";
  } else if (subjectGrade3 >= 50 && subjectGrade3 <= 59) {
    displayGrade3.textContent = "Grade: " + "E";
  } else if (subjectGrade3 >= 0 && subjectGrade3 <= 49) {
    displayGrade3.textContent = "Grade: " + "F";
  } else {
    displayGrade3.innerText = "Invalid Marks! Marks must be between 0 and 100";
  }
});

// Calculate Grade for Subject 4
calstuGrade4.addEventListener("click", () => {
  let validateDropdown4 = dropDown4.value;
  let subjectMark4 = subMark4.value;

  if (!validateDropdown4 && !subjectMark4) {
    displayGrade4.innerText = "Please choose your subject and enter your marks";
    return;
  }

  if (!validateDropdown4) {
    displayGrade4.innerText = "Please choose your subject";
    return;
  }

  if (!subjectMark4) {
    displayGrade4.innerText = "Please Enter Your Marks";
    return;
  }

  let subjectGrade4 = parseFloat(subjectMark4);

  if (subjectGrade4 === 100) {
    displayGrade4.textContent = "Grade: " + "A++";
  } else if (subjectGrade4 >= 90 && subjectGrade4 <= 99) {
    displayGrade4.textContent = "Grade: " + "A";
  } else if (subjectGrade4 >= 80 && subjectGrade4 <= 89) {
    displayGrade4.textContent = "Grade: " + "B";
  } else if (subjectGrade4 >= 70 && subjectGrade4 <= 79) {
    displayGrade4.textContent = "Grade: " + "C";
  } else if (subjectGrade4 >= 60 && subjectGrade4 <= 69) {
    displayGrade4.textContent = "Grade: " + "D";
  } else if (subjectGrade4 >= 50 && subjectGrade4 <= 59) {
    displayGrade4.textContent = "Grade: " + "E";
  } else if (subjectGrade4 >= 0 && subjectGrade4 <= 49) {
    displayGrade4.textContent = "Grade: " + "F";
  } else {
    displayGrade4.innerText = "Invalid Marks! Marks must be between 0 and 100";
  }
});

// Calculate Grade for Subject 5
calstuGrade5.addEventListener("click", () => {
  let validateDropdown5 = dropDown5.value;
  let subjectMark5 = subMark5.value;

  if (!validateDropdown5 && !subjectMark5) {
    displayGrade5.innerText = "Please choose your subject and enter your marks";
    return;
  }

  if (!validateDropdown5) {
    displayGrade5.innerText = "Please choose your subject";
    return;
  }

  if (!subjectMark5) {
    displayGrade5.innerText = "Please Enter Your Marks";
    return;
  }

  let subjectGrade5 = parseFloat(subjectMark5);

  if (subjectGrade5 === 100) {
    displayGrade5.textContent = "Grade: " + "A++";
  } else if (subjectGrade5 >= 90 && subjectGrade5 <= 99) {
    displayGrade5.textContent = "Grade: " + "A";
  } else if (subjectGrade5 >= 80 && subjectGrade5 <= 89) {
    displayGrade5.textContent = "Grade: " + "B";
  } else if (subjectGrade5 >= 70 && subjectGrade5 <= 79) {
    displayGrade5.textContent = "Grade: " + "C";
  } else if (subjectGrade5 >= 60 && subjectGrade5 <= 69) {
    displayGrade5.textContent = "Grade: " + "D";
  } else if (subjectGrade5 >= 50 && subjectGrade5 <= 59) {
    displayGrade5.textContent = "Grade: " + "E";
  } else if (subjectGrade5 >= 0 && subjectGrade5 <= 49) {
    displayGrade5.textContent = "Grade: " + "F";
  } else {
    displayGrade5.innerText = "Invalid Marks! Marks must be between 0 and 100";
  }
});

// To calculate Final Marks
calFinalMarks.addEventListener("click", () => {
  let subject1 = parseFloat(subMark1.value);
  let subject2 = parseFloat(subMark2.value);
  let subject3 = parseFloat(subMark3.value);
  let subject4 = parseFloat(subMark4.value);
  let subject5 = parseFloat(subMark5.value);

  // validate to input

  if (
    (!dropDown1.value && !subMark1.value) ||
    (!dropDown2.value && !subMark2.value) ||
    (!dropDown3.value && !subMark3.value) ||
    (!dropDown4.value && !subMark4.value) ||
    (!dropDown5.value && !subMark5.value)
  ) {
    displayFinalMarks.innerText =
      "Please choose your subjects and enter your marks";
    return;
  }

  if (
    !dropDown1.value ||
    !dropDown2.value ||
    !dropDown3.value ||
    !dropDown4.value ||
    !dropDown5.value
  ) {
    displayFinalMarks.innerText = "Please choose all subjects";
    return;
  }

  if (
    !subMark1.value ||
    !subMark2.value ||
    !subMark3.value ||
    !subMark4.value ||
    !subMark5
  ) {
    displayFinalMarks.innerText = "Please Enter all Marks";
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
    displayFinalMarks.innerText =
      "Invalid Marks! Marks must be between 0 and 100";
    return;
  }

  let finalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

  displayFinalMarks.textContent = `Your final marks is: ${finalMarks} out of 500`;
});

// To calculate the final Percentage
calFinalPercentage.addEventListener("click", () => {
  let sub1 = parseFloat(subMark1.value);
  let sub2 = parseFloat(subMark2.value);
  let sub3 = parseFloat(subMark3.value);
  let sub4 = parseFloat(subMark4.value);
  let sub5 = parseFloat(subMark5.value);

  // validate to input
  if (
    (!dropDown1.value && !subMark1.value) ||
    (!dropDown2.value && !subMark2.value) ||
    (!dropDown3.value && !subMark3.value) ||
    (!dropDown4.value && !subMark4.value) ||
    (!dropDown5.value && !subMark5.value)
  ) {
    displayFinalPercentage.innerText = "Please select your subjects and marks";
    return;
  }

  if (
    !dropDown1.value ||
    !dropDown2.value ||
    !dropDown3.value ||
    !dropDown4.value ||
    !dropDown5.value
  ) {
    displayFinalPercentage.innerText = "Please select all subjects";
    return;
  }

  if (
    !subMark1.value ||
    !subMark2.value ||
    !subMark3.value ||
    !subMark4.value ||
    !subMark5
  ) {
    displayFinalPercentage.innerText = "Please Enter all Marks";
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
    displayFinalPercentage.innerText =
      "Invalid Marks! Marks must be between 0 and 100";
    return;
  }

  let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
  const perSubMark = 100;
  const totalSubMark = 500;
  let totalPercentage = (totalMarks * perSubMark) / totalSubMark;

  displayFinalPercentage.textContent = `Your final percentage is ${totalPercentage}%`;
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

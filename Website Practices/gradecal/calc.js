console.log("Grade Calculator");

let color = document
  .getElementById("colours")
  .addEventListener("mousemove", (e) => {
    document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY},256)`;
  });

setTimeout(() => {
  let gradeCal = () => {
    document.getElementById("btn").addEventListener("click", (e) => {
      let grade;
      let maths = document.getElementById("maths").value;
      let chemistry = document.getElementById("eng").value;
      let english = document.getElementById("chem").value;
      let social = document.getElementById("social").value;
      let marks =
        parseFloat(maths) +
        parseFloat(chemistry) +
        parseFloat(english) +
        parseFloat(social);
      console.log(marks);
      let percentage = parseFloat((marks / 400) * 100);
      console.log(percentage);

      if (percentage <= 100 && percentage >= 80) {
        grade = "A";
        document.getElementById(
          "message"
        ).innerHTML = `Your Percentage is ${percentage}% and Grade is ${grade}`;
        let utter = new SpeechSynthesisUtterance(
          `Your Percentage is ${percentage}% and Grade is ${grade} and congrats.. you are pass`
        );
        speechSynthesis.speak(utter);
        console.log(grade);
      } else if (percentage <= 80 && percentage >= 70) {
        grade = "B";
        document.getElementById(
          "message"
        ).innerHTML = `Your Percentage is ${percentage}% and Grade is ${grade}`;
        let utter = new SpeechSynthesisUtterance(
          `Your Percentage is ${percentage}% and Grade is ${grade} and congrats.. you are pass`
        );
        speechSynthesis.speak(utter);
        console.log(grade);
      } else if (percentage < 70 && percentage >= 55) {
        grade = "C";
        document.getElementById(
          "message"
        ).innerHTML = `Your Percentage is ${percentage}% and Grade is ${grade}`;
        let utter = new SpeechSynthesisUtterance(
          `Your Percentage is ${percentage}% and Grade is ${grade} and congrats.. you are pass`
        );
        speechSynthesis.speak(utter);
      } else if (percentage < 40 && percentage >= 20) {
        grade = "F";
        document.getElementById(
          "message"
        ).innerHTML = `Your Percentage is ${percentage}% and Grade is ${grade}`;
        let utter = new SpeechSynthesisUtterance(
          `Your Percentage is ${percentage}% and Grade is ${grade} and you are fail`
        );
        speechSynthesis.speak(utter);
      }
      e.preventDefault();
    });
  };
  gradeCal();
}, 3000);

// setTimeout(() => {
//   let gradeCal = () => {
//     return new Promise(function (resolve) {
//       document.getElementById("btn").addEventListener("click", (e) => {
//         let grade;
//         let maths = document.getElementById("maths").value;
//         let chemistry = document.getElementById("eng").value;
//         let english = document.getElementById("chem").value;
//         let social = document.getElementById("social").value;

//         let marks =
//           parseFloat(maths) +
//           parseFloat(chemistry) +
//           parseFloat(english) +
//           parseFloat(social);
//         console.log(marks);
//         let percentage = parseFloat((marks / 400) * 100);
//         console.log(percentage);

//         if (percentage <= 100 && percentage >= 80) {
//           grade = "A";
//           console.log(grade);
//         } else if (percentage <= 80 && percentage >= 70) {
//           grade = "B";
//           console.log(grade);
//         } else if (percentage < 70 && percentage >= 55) {
//           grade = "C";
//           document.getElementById(
//             "message"
//           ).innerHTML = `Your Percentage is ${percentage}% and Grade is ${grade}`;
//           console.log();
//           resolve();
//         }
//       });
//     });
//   };
//   gradeCal().then((elem) => {
//     alert("Thank you for visiting...");
//     e.preventDefault();
//     console.log(elem);
//   });
// }, 4000);

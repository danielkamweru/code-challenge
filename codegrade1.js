let marks = parseInt(prompt("Enter student marks (0 - 100):"));

    if (marks < 0 || marks > 100 || isNaN(marks)) {
    } else {
      let grade;

      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60) {
        grade = "B";
      } else if (marks >= 49) {
        grade = "C";
      } else if (marks >= 40) {
        grade = "D";
      } else {
        grade = "E";
      }

      alert("This is the grade : " + grade);
    }




function estimateChance(studentGPA, studentSAT, collegeGPA, collegeSAT) {
  const gpaWeight = 0.6;
  const satWeight = 0.4;

  const gpaScore = Math.min(studentGPA / collegeGPA, 1.2);  // Normalize and cap
  const satScore = Math.min(studentSAT / collegeSAT, 1.2);

  const weightedScore = (gpaScore * gpaWeight + satScore * satWeight) / (gpaWeight + satWeight);

  return Math.round(weightedScore * 100);
}

function calculateChance() {
  const studentGPA = parseFloat(document.getElementById("gpa").value);
  const studentSAT = parseInt(document.getElementById("sat").value, 10);

  // Example baseline averages for the college
  const collegeGPA = 3.6;
  const collegeSAT = 1250;

  const chance = estimateChance(studentGPA, studentSAT, collegeGPA, collegeSAT);

  document.getElementById("result").textContent = `Estimated Chance: ${chance}%`;
}

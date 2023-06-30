document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready!");

  const userForm = document.getElementById("user-form");
  const submitButton = document.getElementById("submit-data");
  const userTable = document.querySelector("#user-table tbody");
  const emptyButton = document.getElementById("empty-table");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const address = document.getElementById("input-address").value;
    const admin = document.getElementById("input-admin").checked;
    const image = document.getElementById("input-image").files[0];

    // Check if username already exists in the table
    const existingUser = Array.from(userTable.getElementsByTagName("tr")).find(
      (row) => row.cells[0].textContent === username
    );

    if (existingUser) {
      // Edit existing user's data
      existingUser.cells[1].textContent = email;
      existingUser.cells[2].textContent = address;
      existingUser.cells[3].textContent = admin ? "X" : "-";
      if (image) {
        existingUser.cells[4].innerHTML = `<img src="${URL.createObjectURL(
          image
        )}" alt="User Image" width="64" height="64">`;
      }
    } else {
      // Add new row to the table
      const newRow = userTable.insertRow();
      const cell1 = newRow.insertCell();
      const cell2 = newRow.insertCell();
      const cell3 = newRow.insertCell();
      const cell4 = newRow.insertCell();
      const cell5 = newRow.insertCell();

      cell1.textContent = username;
      cell2.textContent = email;
      cell3.textContent = address;
      cell4.textContent = admin ? "X" : "-";
      if (image) {
        cell5.innerHTML = `<img src="${URL.createObjectURL(
          image
        )}" alt="User Image" width="64" height="64">`;
      }
    }

    // Reset the form
    userForm.reset();
  });

  emptyButton.addEventListener("click", function () {
    // Remove all rows except the header
    const rows = userTable.getElementsByTagName("tr");
    while (rows.length > 1) {
      userTable.removeChild(rows[1]);
    }
  });
});

let students = JSON.parse(localStorage.getItem("students")) || [];

function login() {
  let pass = document.getElementById("password").value;

  if (pass === "admin4436507") {
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("main").style.display = "block";
    showStudents();
  } else {
    document.getElementById("msg").innerText = "Wrong Password";
  }
}

function addStudent() {
  let name = document.getElementById("name").value;
  let father = document.getElementById("father").value;
  let mobile = document.getElementById("mobile").value;
  let className = document.getElementById("class").value;
  let fee = document.getElementById("fee").value;
  let paid = document.getElementById("paid").value;

  if (!name || !className) {
    alert("Fill required fields");
    return;
  }

  let student = {
    name,
    father,
    mobile,
    className,
    fee,
    paid
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  showStudents();

  document.getElementById("name").value = "";
  document.getElementById("father").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("class").value = "";
  document.getElementById("fee").value = "";
  document.getElementById("paid").value = "";
}

function showStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((s, i) => {
    let balance = Number(s.fee) - Number(s.paid);

    list.innerHTML += `
      <div class="student">
        <b>${s.name}</b><br>
        Father: ${s.father}<br>
        Mobile: ${s.mobile}<br>
        Class: ${s.className}<br>
        Fee: ${s.fee} | Paid: ${s.paid} | Balance: ${balance}
      </div>
    `;
  });

  document.getElementById("totalStudents").innerText = students.length;
}

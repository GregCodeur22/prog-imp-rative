let body = document.body;
let users = [
  {
    pseudo: "greg",
    age: 22,
    langages: ["javascript", "css", "html"],
  },
  {
    pseudo: "dami",
    age: 9,
    langages: ["python", "spring", "html"],
  },
  {
    pseudo: "sully",
    age: 50,
    langages: ["c++", "php", "sql"],
  },
  {
    pseudo: "victor",
    age: 72,
    langages: ["sql", "mariadb"],
  },
];

body.innerHTML = users
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
    <ul class="liste">
        <li> ${user.pseudo} à ${user.age} ${
        user.langages.includes("sql") ? "backend" : "frontEnd"
      }</li>
    </ul>
    `
  )
  .join("");

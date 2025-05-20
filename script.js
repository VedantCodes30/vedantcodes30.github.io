const items = [
  {
    name: "GitHub",
    href: "https://github.com/vedantcodes30",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/vedantkale",
  },
];

const card = document.querySelectorAll("card");

items.map((item) => {
  const list = document.createElement("li");
  list.textContent = items.name;
  console.log(list);
});

document.body.append(items.name);

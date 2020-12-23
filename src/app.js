// Identification
// Nom :
// Prénom :
// Code permanent

// Placez votre code ici...

const showGrade = (correction) => {
  let grade = 0;
  if (correction.q1) grade += 20;
  if (correction.q2) grade += 20;
  if (correction.q3) grade += 20;
  if (correction.q4) grade += 20;
  if (correction.q5) grade += 20;

  document.querySelector('#resultat').innerHTML = `<h2>Vous avez obtenu ${grade}%</h2>`
};

const grade = async (form, data) => {
  const resp = await fetch('/correction.php', { method: 'POST', body: data });
  const correction = await resp.json();
  showGrade(correction);
};

const showErrors = (form, empty) => {
  form.querySelectorAll("p.question").forEach(e => e.classList.remove('err'));
  empty.forEach(e => form.querySelector(`#${e}`).classList.add('err'));
};

const validate = (data) => {
  const empty = [ ];
  ["q1", "q2", "q3", "q4", "q5"].forEach(q => {
    if (! data.get(q)) { empty.push(q); }
  });
  return empty;
};

const onSubmit = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const data = new FormData(form);

  const empty = validate(data);
  showErrors(form, empty);

  if (empty.length === 0) {
    grade(form, data);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', onSubmit);
});

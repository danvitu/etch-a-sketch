const container = document.querySelector('.container');

const addRow = () => {
  const content = document.createElement('div');
  content.classList.add('row');
  container.appendChild(content);
}

for (let i = 0; i < 16; i++) {
  addRow();
}

const rows = document.querySelectorAll('.row');

rows.forEach((element) => {
  for (let i = 0; i < 16; i++) {
    const newcell = document.createElement('div');
    newcell.classList.add('cell');
    element.appendChild(newcell);
  };
});

// Create rows
function addRows (gridSize) {
  const container = document.querySelector('.container');
  for (let i = 0; i < gridSize; i++) {
    const content = document.createElement('div');
    content.classList.add('row');
    container.appendChild(content);
  };
};

// Create cells
function addCells (gridSize) {
  const rows = document.querySelectorAll('.row');
  rows.forEach((element) => {
    for (let i = 0; i < gridSize; i++) {
      const newcell = document.createElement('div');
      newcell.classList.add('cell');
      element.appendChild(newcell);
    };
  });
};

const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
  clearGrid();
  let gridSize = prompt('Enter grid size < 100');
  if (gridSize > 100) {
    alert('Enter value < 100!');
    gridSize = prompt('Enter grid size < 100');
  };
  createGrid(gridSize);
});

// Create grid
function createGrid (gridSize) {
  addRows(gridSize);
  addCells(gridSize);
  hovering();
};

// Clear grid
function clearGrid () {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
}

// Create default 16x16 grid
createGrid(16);

// Add hovering effect
function hovering () {
const cells = document.querySelectorAll('.cell');
cells.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hover');
  });
});
};
const gridElement = document.getElementById('grid');
const piecesContainer = document.getElementById('pieces-container');
const scoreElement = document.getElementById('score-val');
let score = 0;

// Inicializa Grid 8x8
const grid = Array(8).fill().map(() => Array(8).fill(0));

function createGrid() {
    gridElement.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            gridElement.appendChild(cell);
        }
    }
}

// Modelos de peças (formatos simples)
const shapes = [
    [[1, 1], [1, 1]], // Quadrado
    [[1, 1, 1]],      // Linha 3
    [[1], [1], [1]],  // Coluna 3
    [[1, 0], [1, 1]]  // L pequena
];

function spawnPieces() {
    piecesContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.gridTemplateColumns = `repeat(${shape[0].length}, 32px)`;
        piece.draggable = true;

        shape.forEach(row => {
            row.forEach(cell => {
                const div = document.createElement('div');
                div.classList.add(cell ? 'piece-block' : 'empty-block');
                piece.appendChild(div);
            });
        });

        // Lógica de Drag (Simplificada para Desktop)
        piece.addEventListener('dragend', (e) => handleDrop(e, shape, piece));
        piecesContainer.appendChild(piece);
    }
}

function handleDrop(e, shape, pieceElement) {
    // Aqui entraria a lógica de detectar em qual célula do grid o mouse soltou
    // Como o DragEvent padrão é complexo com o grid, simulamos um encaixe:
    console.log("Peça solta. Para um jogo real, use coordenadas de colisão.");
    
    // Simulação de preenchimento aleatório para demonstrar visualmente
    // Em um jogo real, você calcularia offset x/y do mouse sobre o grid.
}

createGrid();
spawnPieces();

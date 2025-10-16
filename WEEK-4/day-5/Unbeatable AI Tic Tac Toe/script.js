// ====== Advanced JS Tic Tac Toe ======

// Winning combinations
const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// DOM elements
const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');
const chooseX = document.getElementById('chooseX');
const chooseO = document.getElementById('chooseO');
const easyBtn = document.getElementById('easyBtn');
const hardBtn = document.getElementById('hardBtn');
const restartBtn = document.getElementById('restartBtn');

// Game state
let board = Array(9).fill(null);
let human = 'X';
let ai = 'O';
let currentPlayer = 'human';
let isGameActive = true;
let difficulty = 'hard';

// Create board cells in DOM
const cells = Array.from({length:9}, (_,i)=>{
  const el = document.createElement('div');
  el.className = 'cell';
  el.dataset.index = i;
  boardEl.appendChild(el);
  return el;
});

// ====== Helper Functions ======
const emptyIndices = b => b.map((v,i)=>v?null:i).filter(v=>v!==null);

const checkWinner = b => {
  for(const combo of winCombos){
    const [a,bIdx,c] = combo;
    if(b[a] && b[a] === b[bIdx] && b[a] === b[c]) return { winner: b[a], combo };
  }
  return { winner:null, combo:null };
};

const isTie = b => b.every(v=>v);

// Update UI
const updateUI = () => {
  cells.forEach((cell,i)=> cell.textContent = board[i] ?? '');
};

// Make a move
const makeMove = (index,symbol) => {
  if(!isGameActive || board[index]) return false;
  board[index] = symbol;
  return true;
};

// End game
const endGame = (result, combo=null) => {
  isGameActive = false;
  statusEl.textContent = result;
  if(combo){
    combo.forEach(i=>cells[i].classList.add('win'));
  }
};

// Human click
cells.forEach(cell=>{
  cell.addEventListener('click',()=>{
    const idx = Number(cell.dataset.index);
    if(!isGameActive || board[idx] || currentPlayer!=='human') return;
    makeMove(idx,human);
    afterMove();
  });
});

// After a move
const afterMove = () => {
  const { winner, combo } = checkWinner(board);
  if(winner) { endGame(winner===human?'You won!':'AI won!', combo); updateUI(); return; }
  if(isTie(board)) { endGame('Tie game!'); updateUI(); return; }
  currentPlayer = currentPlayer==='human'?'ai':'human';
  if(currentPlayer==='ai') setTimeout(()=>aiMove(),300);
  updateUI();
};

// AI move
const aiMove = () => {
  let move;
  const empties = emptyIndices(board);
  if(difficulty==='easy'){
    move = empties[Math.floor(Math.random()*empties.length)];
  } else {
    move = bestMove(board,ai).index;
  }
  makeMove(move,ai);
  afterMove();
};

// Minimax algorithm
const bestMove = (newBoard,player)=>{
  const availSpots = emptyIndices(newBoard);
  const { winner } = checkWinner(newBoard);
  if(winner===human) return {score:-10};
  if(winner===ai) return {score:10};
  if(availSpots.length===0) return {score:0};

  const moves=[];
  for(const i of availSpots){
    const move = {index:i};
    newBoard[i]=player;
    if(player===ai) move.score = bestMove(newBoard,human).score;
    else move.score = bestMove(newBoard,ai).score;
    newBoard[i]=null;
    moves.push(move);
  }

  let bestIndex=0;
  if(player===ai){
    let bestScore=-Infinity;
    moves.forEach((m,idx)=>{ if(m.score>bestScore){ bestScore=m.score; bestIndex=idx;}});
  } else {
    let bestScore=Infinity;
    moves.forEach((m,idx)=>{ if(m.score<bestScore){ bestScore=m.score; bestIndex=idx;}});
  }
  return moves[bestIndex];
};

// ====== Controls ======
chooseX.addEventListener('click', ()=>{
  human='X'; ai='O'; setActive([chooseX,chooseO],chooseX); restartGame();
});
chooseO.addEventListener('click', ()=>{
  human='O'; ai='X'; setActive([chooseX,chooseO],chooseO); restartGame();
});
easyBtn.addEventListener('click', ()=>{
  difficulty='easy'; setActive([easyBtn,hardBtn],easyBtn); restartGame();
});
hardBtn.addEventListener('click', ()=>{
  difficulty='hard'; setActive([easyBtn,hardBtn],hardBtn); restartGame();
});
restartBtn.addEventListener('click', restartGame);

// Set active button
function setActive(group,activeBtn){
  group.forEach(btn=>btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

// Restart game
function restartGame(){
  board = Array(9).fill(null);
  isGameActive=true;
  currentPlayer=(human==='X')?'human':'ai';
  statusEl.textContent=currentPlayer==='human'?'Your turn':'AI starts';
  updateUI();
  if(currentPlayer==='ai') setTimeout(()=>aiMove(),300);
}

// Initial setup
restartGame();

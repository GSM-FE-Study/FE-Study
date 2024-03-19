const unique = (list) =>
  list.filter(
    (ar0, idx, list) =>
      list.findIndex((ar1) => ar0[0] === ar1[0] && ar0[1] === ar1[1]) === idx
  );
const nTo1 = (list) => list.reduce((a, c) => [...a, ...c], []);
const createOneValueList = (value) => (n) => new Array(n).fill(value);
const additionAll = (list) => list.reduce((a, c) => a + c, 0);
const equals = (a) => (b) => a === b;
const allPass = (...con) => con.every((e) => e);
const rotateList = (ar, n) =>
  createOneValueList(null)(n).map((e, i) => ar.map((b) => b[i]));
const isEmpty = (list) => list.join() === "";

const getBaseIndex = (fIdx, sIdx) => [fIdx, sIdx];
const getRightIndex = (fIdx, sIdx) => [fIdx + 1, sIdx];
const getBottomIndex = (fIdx, sIdx) => [fIdx, sIdx + 1];
const getDiagonalIndex = (fIdx, sIdx) => [fIdx + 1, sIdx + 1];
const getBlock = (blocks, fIdx, sIdx) => blocks[fIdx][sIdx];

const EMPTY = "0";

function* getMatchedList(blocks, fIdx, sIdx) {
  const pivotBlock = getBlock(blocks, ...getBaseIndex(fIdx, sIdx));
  const rightBlock = getBlock(blocks, ...getRightIndex(fIdx, sIdx));
  const bottomBlock = getBlock(blocks, ...getBottomIndex(fIdx, sIdx));
  const diagonalBlock = getBlock(blocks, ...getDiagonalIndex(fIdx, sIdx));

  const equalToBase = equals(pivotBlock);

  if (
    allPass(
      !equalToBase(EMPTY),
      equalToBase(rightBlock),
      equalToBase(bottomBlock),
      equalToBase(diagonalBlock)
    )
  )
    yield [
      getBaseIndex(fIdx, sIdx),
      getRightIndex(fIdx, sIdx),
      getBottomIndex(fIdx, sIdx),
      getDiagonalIndex(fIdx, sIdx),
    ];
}

function* findRight(blocks, fIdx, sIdx) {
  if (fIdx >= blocks.length - 1) return;
  yield* getMatchedList(blocks, ...getBaseIndex(fIdx, sIdx));
  yield* findRight(blocks, ...getRightIndex(fIdx, sIdx));
}

function* findBottom(blocks, fIdx, sIdx) {
  if (sIdx >= blocks[0].length - 1) return;
  yield* getMatchedList(blocks, ...getBaseIndex(fIdx, sIdx));
  yield* findBottom(blocks, ...getBottomIndex(fIdx, sIdx));
}

function* findMatchIndexList(blocks, fIdx = 0, sIdx = 0) {
  if (sIdx >= blocks[0].length - 1) return;
  if (fIdx >= blocks.length - 1) return;
  yield* findRight(blocks, ...getRightIndex(fIdx, sIdx));
  yield* findBottom(blocks, ...getBaseIndex(fIdx, sIdx));
  yield* findMatchIndexList(blocks, ...getDiagonalIndex(fIdx, sIdx));
}

const fillWithEmpty = (emptyInfo, target) => {
  const t = target.map((e) => e.slice());
  emptyInfo.forEach(([fIdx, sIdx]) => (t[fIdx][sIdx] = EMPTY));
  return t;
};

const doDrop = (ar) => {
  const list = ar.slice();
  list.forEach((e, i) => {
    if (e === EMPTY) list.unshift(list.splice(i, 1)[0]);
  });
  return list;
};

function* getMatchCountList(blocks) {
  const matchIndexList = unique(nTo1([...findMatchIndexList(blocks)]));
  if (isEmpty(matchIndexList)) return;
  yield matchIndexList.length;
  yield* getMatchCountList(fillWithEmpty(matchIndexList, blocks).map(doDrop));
}

const week6 = (mapInfo) => {};

function solution(m, n, board) {
  const blocks = rotateList(
    board.map((e) => e.split("")),
    board[0].length
  );
  return additionAll([...getMatchCountList(blocks)]);
}

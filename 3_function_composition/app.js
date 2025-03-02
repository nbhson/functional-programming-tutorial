const cua = (x) => {
  return `${x} đã cưa`;
};

const say = (x) => {
  return `${x} đã sấy`;
};

const bao = (x) => {
  return `${x} đã bào`;
};

const khoan = (x) => {
  return `${x} đã khoan`;
};

const cha = (x) => {
  return `${x} đã chà`;
};

const moc = (x) => {
  return `${x} đã gắn móc`;
};

// nhập môn
var thot1 = cua("khúc gỗ");
thot1 = say(thot1);
thot1 = bao(thot1);
thot1 = khoan(thot1);
thot1 = cha(thot1);
thot1 = moc(thot1);
console.log(thot1);

// nữa bước đại đạo
var thot2 = moc(cha(khoan(bao(say(cua("khúc gỗ"))))));
console.log(thot2);

// đại đạo cường giả
const compose = (...fns) => {
  return fns.reduce((f, g) => (x) => f(g(x)));
};

const quang_cho_tao_cai_thot = compose(moc, cha, khoan, bao, say, cua);
console.log(quang_cho_tao_cai_thot("khúc gỗ"));

/** Dán nhãn */
const nhan = (x) => {
  return `${x} đã dán nhãn`;
};

const lam_thot_de_ban = compose(nhan, moc, cha, khoan, bao, say, cua); // c1
// const lam_thot_de_ban = compose(nhãn, quăng_cho_tao_cái_thớt); // c2

const thot_ban = lam_thot_de_ban("khúc gỗ");
console.log(thot_ban);

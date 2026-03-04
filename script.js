const QUESTIONS = [
  {
    "q": "横断歩道に歩行者がいるときは車は一時停止して譲る。",
    "a": true,
    "exp": "横断歩道では歩行者優先。",
    "cat": "歩行者"
  },
  {
    "q": "横断歩道に歩行者がいても徐行だけで通過してよい。",
    "a": false,
    "exp": "横断歩道では歩行者優先。",
    "cat": "歩行者"
  },
  {
    "q": "一時停止標識がある場所では停止線直前で完全停止する。",
    "a": true,
    "exp": "一時停止は車輪を完全に止める。",
    "cat": "標識"
  },
  {
    "q": "一時停止は減速だけでもよい。",
    "a": false,
    "exp": "一時停止は車輪を完全に止める。",
    "cat": "標識"
  },
  {
    "q": "踏切の手前では一時停止して安全確認する。",
    "a": true,
    "exp": "踏切は原則一時停止。",
    "cat": "踏切"
  },
  {
    "q": "警報機が鳴っていなければ踏切で止まらなくてよい。",
    "a": false,
    "exp": "踏切は原則一時停止。",
    "cat": "踏切"
  },
  {
    "q": "黄色信号は原則停止である。",
    "a": true,
    "exp": "黄色は止まれるなら停止。",
    "cat": "信号"
  },
  {
    "q": "黄色信号は急いで進めの合図である。",
    "a": false,
    "exp": "黄色は止まれるなら停止。",
    "cat": "信号"
  },
  {
    "q": "赤信号では停止線の直前で止まる。",
    "a": true,
    "exp": "赤は停止。",
    "cat": "信号"
  },
  {
    "q": "赤信号でも左右安全なら進んでよい。",
    "a": false,
    "exp": "赤は停止。",
    "cat": "信号"
  },
  {
    "q": "進路変更時は合図と目視確認の両方が必要。",
    "a": true,
    "exp": "合図だけでは不十分。",
    "cat": "安全"
  },
  {
    "q": "進路変更は合図だけ出せば確認不要。",
    "a": false,
    "exp": "合図だけでは不十分。",
    "cat": "安全"
  },
  {
    "q": "右左折の合図は交差点手前30mまでに出す。",
    "a": true,
    "exp": "早めの合図が必要。",
    "cat": "合図"
  },
  {
    "q": "右左折の合図は曲がる直前に出せばよい。",
    "a": false,
    "exp": "早めの合図が必要。",
    "cat": "合図"
  },
  {
    "q": "進路変更の合図は約3秒前に出す。",
    "a": true,
    "exp": "進路変更前に合図。",
    "cat": "合図"
  },
  {
    "q": "進路変更の合図は変更後に出せばよい。",
    "a": false,
    "exp": "進路変更前に合図。",
    "cat": "合図"
  },
  {
    "q": "シートベルトは一般道でも高速でも着用する。",
    "a": true,
    "exp": "全席で着用が原則。",
    "cat": "安全"
  },
  {
    "q": "シートベルトは高速道路だけ着用すればよい。",
    "a": false,
    "exp": "全席で着用が原則。",
    "cat": "安全"
  },
  {
    "q": "運転中のスマホ手持ち通話は違反である。",
    "a": true,
    "exp": "ながら運転は違反。",
    "cat": "法規"
  },
  {
    "q": "運転中でもスマホを手で持って短時間なら通話可。",
    "a": false,
    "exp": "ながら運転は違反。",
    "cat": "法規"
  },
  {
    "q": "雨天時は制動距離が延びるので車間を長めに取る。",
    "a": true,
    "exp": "滑りやすく止まりにくい。",
    "cat": "安全"
  },
  {
    "q": "雨天時は晴天と同じ車間で問題ない。",
    "a": false,
    "exp": "滑りやすく止まりにくい。",
    "cat": "安全"
  },
  {
    "q": "夜間は歩行者発見が遅れやすいので速度を控える。",
    "a": true,
    "exp": "夜間は慎重に。",
    "cat": "夜間"
  },
  {
    "q": "夜間は車が少ないので速度を上げるべきだ。",
    "a": false,
    "exp": "夜間は慎重に。",
    "cat": "夜間"
  },
  {
    "q": "対向車がいるときはハイビームをロービームへ切り替える。",
    "a": true,
    "exp": "眩惑防止が必要。",
    "cat": "夜間"
  },
  {
    "q": "対向車がいてもハイビームのままでよい。",
    "a": false,
    "exp": "眩惑防止が必要。",
    "cat": "夜間"
  },
  {
    "q": "見通しの悪い交差点では徐行する。",
    "a": true,
    "exp": "見通し不良では慎重に。",
    "cat": "交差点"
  },
  {
    "q": "見通しが悪くても優先道路なら徐行不要。",
    "a": false,
    "exp": "見通し不良では慎重に。",
    "cat": "交差点"
  },
  {
    "q": "交差点内が詰まっているときは青信号でも進入を控える。",
    "a": true,
    "exp": "立ち往生を避ける。",
    "cat": "交差点"
  },
  {
    "q": "青信号なら交差点内が詰まっていても進入する。",
    "a": false,
    "exp": "立ち往生を避ける。",
    "cat": "交差点"
  },
  {
    "q": "左折時は左端に寄って徐行する。",
    "a": true,
    "exp": "巻き込み防止。",
    "cat": "交差点"
  },
  {
    "q": "左折時は道路中央から大回りしてよい。",
    "a": false,
    "exp": "巻き込み防止。",
    "cat": "交差点"
  },
  {
    "q": "右折時は中央に寄って対向直進車に注意する。",
    "a": true,
    "exp": "右折は中央寄りが原則。",
    "cat": "交差点"
  },
  {
    "q": "右折時は左端から曲がるのが正しい。",
    "a": false,
    "exp": "右折は中央寄りが原則。",
    "cat": "交差点"
  },
  {
    "q": "緊急車両が来たら左に寄って進路を譲る。",
    "a": true,
    "exp": "進路を空ける義務。",
    "cat": "緊急車両"
  },
  {
    "q": "緊急車両が来ても速度を上げて先に通過すればよい。",
    "a": false,
    "exp": "進路を空ける義務。",
    "cat": "緊急車両"
  },
  {
    "q": "黄色実線の中央線は追越しのためのはみ出し禁止。",
    "a": true,
    "exp": "黄色実線ははみ出し禁止。",
    "cat": "標示"
  },
  {
    "q": "黄色実線でも前車が遅ければはみ出して追越し可。",
    "a": false,
    "exp": "黄色実線ははみ出し禁止。",
    "cat": "標示"
  },
  {
    "q": "白破線の中央線は安全確認の上ではみ出せる場合がある。",
    "a": true,
    "exp": "標示の意味を守る。",
    "cat": "標示"
  },
  {
    "q": "白破線の中央線は絶対にはみ出してはいけない。",
    "a": false,
    "exp": "標示の意味を守る。",
    "cat": "標示"
  },
  {
    "q": "交差点から5m以内は駐車禁止場所である。",
    "a": true,
    "exp": "法定禁止場所。",
    "cat": "駐停車"
  },
  {
    "q": "交差点のすぐ近くでも短時間なら自由に駐車できる。",
    "a": false,
    "exp": "法定禁止場所。",
    "cat": "駐停車"
  },
  {
    "q": "消火栓付近は駐車禁止である。",
    "a": true,
    "exp": "消火活動の妨げになる。",
    "cat": "駐停車"
  },
  {
    "q": "消火栓の近くは夜間なら駐車してよい。",
    "a": false,
    "exp": "消火活動の妨げになる。",
    "cat": "駐停車"
  },
  {
    "q": "高速道路本線での駐停車は原則禁止。",
    "a": true,
    "exp": "PA/SA以外は不可。",
    "cat": "高速道路"
  },
  {
    "q": "高速道路本線でも短時間なら停車して休憩できる。",
    "a": false,
    "exp": "PA/SA以外は不可。",
    "cat": "高速道路"
  },
  {
    "q": "高速道路で故障停止したら停止表示器材などで後続に知らせる。",
    "a": true,
    "exp": "二次事故防止措置。",
    "cat": "高速道路"
  },
  {
    "q": "高速道路で故障したら車内で待つだけでよい。",
    "a": false,
    "exp": "二次事故防止措置。",
    "cat": "高速道路"
  },
  {
    "q": "合流時は本線の流れに合わせて加速する。",
    "a": true,
    "exp": "速度合わせが重要。",
    "cat": "高速道路"
  },
  {
    "q": "合流時は低速のまま本線に入るのが安全。",
    "a": false,
    "exp": "速度合わせが重要。",
    "cat": "高速道路"
  },
  {
    "q": "路肩は緊急時以外の通行に使わない。",
    "a": true,
    "exp": "路肩走行は原則不可。",
    "cat": "高速道路"
  },
  {
    "q": "渋滞時は路肩を走って追い越してよい。",
    "a": false,
    "exp": "路肩走行は原則不可。",
    "cat": "高速道路"
  },
  {
    "q": "徐行とはすぐ停止できる速度で進むこと。",
    "a": true,
    "exp": "定義は“直ちに停止できる速度”。",
    "cat": "法規"
  },
  {
    "q": "徐行とは時速30km程度で走ることだ。",
    "a": false,
    "exp": "定義は“直ちに停止できる速度”。",
    "cat": "法規"
  },
  {
    "q": "急ブレーキはやむを得ない場合を除き避ける。",
    "a": true,
    "exp": "追突等の危険。",
    "cat": "法規"
  },
  {
    "q": "危険がなくても急ブレーキで速度調整してよい。",
    "a": false,
    "exp": "追突等の危険。",
    "cat": "法規"
  },
  {
    "q": "飲酒運転は少量でもしてはいけない。",
    "a": true,
    "exp": "飲酒運転は重大違反。",
    "cat": "法規"
  },
  {
    "q": "少しの飲酒なら運転しても問題ない。",
    "a": false,
    "exp": "飲酒運転は重大違反。",
    "cat": "法規"
  },
  {
    "q": "睡眠不足や体調不良時は運転を控える。",
    "a": true,
    "exp": "判断力低下は危険。",
    "cat": "安全"
  },
  {
    "q": "眠気があっても窓を開ければ安全に運転できる。",
    "a": false,
    "exp": "判断力低下は危険。",
    "cat": "安全"
  },
  {
    "q": "発進前はミラーと目視で周囲確認する。",
    "a": true,
    "exp": "死角確認が必要。",
    "cat": "安全"
  },
  {
    "q": "発進時は前方だけ見れば十分だ。",
    "a": false,
    "exp": "死角確認が必要。",
    "cat": "安全"
  },
  {
    "q": "バック時は後方を目視して慎重に行う。",
    "a": true,
    "exp": "複数確認が安全。",
    "cat": "安全"
  },
  {
    "q": "バック時はモニターだけ見れば十分である。",
    "a": false,
    "exp": "複数確認が安全。",
    "cat": "安全"
  },
  {
    "q": "カーブ手前で減速してから進入する。",
    "a": true,
    "exp": "カーブ中急操作は危険。",
    "cat": "安全"
  },
  {
    "q": "カーブ中に急ブレーキして速度を落とすのがよい。",
    "a": false,
    "exp": "カーブ中急操作は危険。",
    "cat": "安全"
  },
  {
    "q": "雪道では急ハンドル・急ブレーキを避ける。",
    "a": true,
    "exp": "急操作はスリップ原因。",
    "cat": "安全"
  },
  {
    "q": "雪道では素早い急操作のほうが安定する。",
    "a": false,
    "exp": "急操作はスリップ原因。",
    "cat": "安全"
  },
  {
    "q": "ハイドロプレーニングは雨天高速時に起こりやすい。",
    "a": true,
    "exp": "水膜でタイヤが浮く現象。",
    "cat": "安全"
  },
  {
    "q": "ハイドロプレーニングは乾燥路で起こる。",
    "a": false,
    "exp": "水膜でタイヤが浮く現象。",
    "cat": "安全"
  },
  {
    "q": "トンネル内では前照灯を点灯する。",
    "a": true,
    "exp": "被視認性確保。",
    "cat": "夜間"
  },
  {
    "q": "トンネル内は明るいのでライト不要。",
    "a": false,
    "exp": "被視認性確保。",
    "cat": "夜間"
  },
  {
    "q": "点滅赤信号は一時停止して安全確認後に進む。",
    "a": true,
    "exp": "点滅赤は止まれ。",
    "cat": "信号"
  },
  {
    "q": "点滅赤信号は徐行でそのまま進める。",
    "a": false,
    "exp": "点滅赤は止まれ。",
    "cat": "信号"
  },
  {
    "q": "点滅黄信号は他の交通に注意して進行できる。",
    "a": true,
    "exp": "点滅黄は注意進行。",
    "cat": "信号"
  },
  {
    "q": "点滅黄信号は必ず停止しなければならない。",
    "a": false,
    "exp": "点滅黄は注意進行。",
    "cat": "信号"
  },
  {
    "q": "警察官の手信号は信号機より優先される。",
    "a": true,
    "exp": "現場指示に従う。",
    "cat": "信号"
  },
  {
    "q": "信号機が青なら警察官の停止合図は無視できる。",
    "a": false,
    "exp": "現場指示に従う。",
    "cat": "信号"
  },
  {
    "q": "バス停付近では路線バスの発進に配慮する。",
    "a": true,
    "exp": "安全と円滑のため配慮。",
    "cat": "思いやり"
  },
  {
    "q": "バスが発進合図を出していても進路を譲る必要はない。",
    "a": false,
    "exp": "安全と円滑のため配慮。",
    "cat": "思いやり"
  },
  {
    "q": "通学路では子どもの飛び出しを予測して減速する。",
    "a": true,
    "exp": "危険予測が重要。",
    "cat": "安全"
  },
  {
    "q": "通学路でも制限速度内なら減速不要。",
    "a": false,
    "exp": "危険予測が重要。",
    "cat": "安全"
  },
  {
    "q": "高齢者や子どもの近くでは特に注意して走る。",
    "a": true,
    "exp": "弱者保護が基本。",
    "cat": "歩行者"
  },
  {
    "q": "歩行者がいても車道外なら気にしなくてよい。",
    "a": false,
    "exp": "弱者保護が基本。",
    "cat": "歩行者"
  },
  {
    "q": "歩道を横切るときは歩行者の通行を妨げない。",
    "a": true,
    "exp": "歩行者優先。",
    "cat": "歩行者"
  },
  {
    "q": "歩道横断時は車が優先なので徐行不要。",
    "a": false,
    "exp": "歩行者優先。",
    "cat": "歩行者"
  },
  {
    "q": "運転前にタイヤや灯火類を点検するのは有効。",
    "a": true,
    "exp": "点検で故障予防。",
    "cat": "点検"
  },
  {
    "q": "車検があるので日常点検は不要。",
    "a": false,
    "exp": "点検で故障予防。",
    "cat": "点検"
  },
  {
    "q": "チャイルドシートは6歳未満の幼児に使用義務がある。",
    "a": true,
    "exp": "幼児保護の義務。",
    "cat": "安全"
  },
  {
    "q": "幼児でも大人用シートベルトだけで十分である。",
    "a": false,
    "exp": "幼児保護の義務。",
    "cat": "安全"
  },
  {
    "q": "初心者マークは周囲への注意喚起として有効。",
    "a": true,
    "exp": "初心者保護に役立つ。",
    "cat": "法規"
  },
  {
    "q": "初心者マークは好きなときだけ表示すればよい。",
    "a": false,
    "exp": "初心者保護に役立つ。",
    "cat": "法規"
  },
  {
    "q": "高齢者マーク車への幅寄せなどの妨害は違反。",
    "a": true,
    "exp": "妨害行為は禁止。",
    "cat": "法規"
  },
  {
    "q": "高齢者マーク車には強引に割り込んでも違反ではない。",
    "a": false,
    "exp": "妨害行為は禁止。",
    "cat": "法規"
  },
  {
    "q": "道路標識・標示の規制は守らなければならない。",
    "a": true,
    "exp": "規制違反になる。",
    "cat": "標識"
  },
  {
    "q": "標識は目安なので守らなくてもよい。",
    "a": false,
    "exp": "規制違反になる。",
    "cat": "標識"
  },
  {
    "q": "追越しは安全確認と十分な車間が必要。",
    "a": true,
    "exp": "無理な追越しは危険。",
    "cat": "追越し"
  },
  {
    "q": "追越し時は前車の直後まで詰めるほど安全だ。",
    "a": false,
    "exp": "無理な追越しは危険。",
    "cat": "追越し"
  },
  {
    "q": "見通しの悪い場所では早めの合図や減速で存在を知らせる。",
    "a": true,
    "exp": "被視認性と余裕が大切。",
    "cat": "安全"
  },
  {
    "q": "見通しが悪い場所ほど素早く通過するため加速する。",
    "a": false,
    "exp": "被視認性と余裕が大切。",
    "cat": "安全"
  }
];


let pool = [...QUESTIONS];
let idx = 0, score = 0, answered = 0;
let wrongPool = [];
const qCount = document.getElementById("qCount");
const catBadge = document.getElementById("catBadge");
const progress = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const qEl = document.getElementById("question");
const resultEl = document.getElementById("result");
const expEl = document.getElementById("explanation");
const btnTrue = document.getElementById("btnTrue");
const btnFalse = document.getElementById("btnFalse");
const nextBtn = document.getElementById("nextBtn");
const end = document.getElementById("end");
const finalScore = document.getElementById("finalScore");

function shuffle(arr){ for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }
function resetButtons(state){ btnTrue.disabled=state; btnFalse.disabled=state; }

function start(useWeak=false){
  const base = (useWeak && wrongPool.length) ? wrongPool : QUESTIONS;
  pool = shuffle([...base]); idx=0; score=0; answered=0;
  if(!useWeak) wrongPool = [];
  end.hidden = true;
  render();
}

function render(){
  if(idx >= pool.length){
    resetButtons(true); nextBtn.hidden = true; end.hidden = false;
    qEl.textContent = "終了！"; resultEl.textContent = ""; expEl.textContent = "";
    finalScore.textContent = `正解率: ${score} / ${answered}（${answered?Math.round(score/answered*100):0}%）`;
    return;
  }
  const item = pool[idx];
  qCount.textContent = `${idx+1} / ${pool.length}`;
  catBadge.textContent = item.cat;
  scoreEl.textContent = `正解: ${score} / ${answered}`;
  progress.style.width = `${(idx/pool.length)*100}%`;
  qEl.textContent = item.q;
  resultEl.textContent = ""; resultEl.className = "result";
  expEl.textContent = "";
  nextBtn.hidden = true;
  resetButtons(false);
}

function answer(v){
  const item = pool[idx];
  const ok = (item.a === v);
  answered++;
  if(ok){ score++; resultEl.textContent = "✅ 正解"; resultEl.classList.add("ok"); }
  else { resultEl.textContent = `❌ 不正解（正しくは ${item.a ? "○" : "×"}）`; resultEl.classList.add("ng"); wrongPool.push(item); }
  scoreEl.textContent = `正解: ${score} / ${answered}`;
  expEl.textContent = item.exp;
  progress.style.width = `${((idx+1)/pool.length)*100}%`;
  resetButtons(true); nextBtn.hidden = false;
}

btnTrue.addEventListener('click', ()=>answer(true));
btnFalse.addEventListener('click', ()=>answer(false));
nextBtn.addEventListener('click', ()=>{ idx++; render(); });
document.getElementById('retryAll').addEventListener('click', ()=>start(false));
document.getElementById('retryWeak').addEventListener('click', ()=>{
  if(!wrongPool.length) return alert('不正解がまだないから、まずは1周解いてみてな。');
  start(true);
});
start(false);

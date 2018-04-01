const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};
  
const doAsyncMagic = async () => {
  var res = [];
  for(var i =0; i < 4; i++){
    try{
      res.push(await asyncFn());
    }catch(error){
      res.push(error)  
    }
  }
  console.log(res)
}

doAsyncMagic(); // [true, true, true, true]

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

const iterateRange = async() => {
  var res = 0;
  try {
    for await( let val of rangeGen()){
      res += val;
    }
  } catch(e) {
    console.log(e);
  }
  return res;
}

iterateRange(); // Promise {<resolved>: 120}

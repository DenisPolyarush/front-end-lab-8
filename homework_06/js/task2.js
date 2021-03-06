const btnTrack = document.getElementById('btn_track');
const btnValidate = document.getElementById('btn_validate');
const noValid = document.getElementById('no_valid');
const root = document.getElementById('root');
const respons = document.getElementById('respons');
let result;

btnTrack.addEventListener('click', function(e){
  e.preventDefault();
 let ip = document.querySelector('#IP').value;
  if(validateIP(ip)){
    http.get(`https://ipapi.co/${ip}/json`)
      .then(response =>{
      result = response;
      let res = JSON.parse(response);
      res = structure(res);
      createTable(res)
    }).catch(error =>console.error(`Rejected: ${error}`));
    
    btnValidate.style.display = 'block';
    noValid.style.display = 'none'
  }else{
    if(document.getElementById('table')){
      document.getElementById('table').style.display = 'none';
    }
    btnValidate.style.display = 'none';
    noValid.style.display = 'block'
  }
})
btnValidate.addEventListener('click', function(e){
  e.preventDefault();
    http.post('https://shrouded-garden-94580.herokuapp.com/', result).then(response => {
        respons.innerHTML = '<p>' + response + '</p>';
        setTimeout(function(){
          respons.innerHTML = '';
        },5000)
      }).catch(error => console.log(error))
    
    btnValidate.style.display = 'block';
    noValid.style.display = 'none'
})

function structure(obj){
  for(var key in obj){
    return {
      IP : obj.ip,
      city : obj.city,
      region: obj.region,
      country : obj.country_name,
      latitude : obj.latitude,
      longitude: obj.longitude
    }
  }
}

function createTable(obj){
  let table = document.createElement('table');
  table.setAttribute('id', 'table')
  
  for(let key in obj){
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    let td = document.createElement('td')
    
    th.innerHTML = key;
    tr.appendChild(th);
    td.innerHTML = obj[key];
    tr.appendChild(td);
    table.appendChild(tr);
  }
  root.innerHTML = '';
  root.appendChild(table)
}


function validateIP(ip){
  let a = ip.split('.');
  if(a.length === 4){
    for(let i = 0; i < a.length; i++) {
        if(isNaN(a[i]) || !a[i] || a[i] > 255){
          return false;
       } 
    }
  }
  return true;
}


















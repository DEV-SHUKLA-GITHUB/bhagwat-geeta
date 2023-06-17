const inputElement = document.getElementById('chapter');
const firstDiv = document.getElementById('first');
const secondDiv = document.getElementById('second');
const dropdownElement = document.getElementById('myDropdown');
var fetchButton = document.getElementById('fetchButton');

fetchButton.addEventListener('click', function() {
  var value = inputElement.value;
  var dropdownValue = dropdownElement.value;
  console.log(dropdownValue);
  const array = value.split('.');
  var site = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/'+array[0]+'/verses/'+array[1]+'/';
  console.log(site);
  const options = {
    method: 'GET',
    url: site,
    headers: {
      'X-RapidAPI-Key': 'cbb342b88dmshb3d1d98867ac6b6p13c981jsn3ef9d1a06d5c',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };
  fetchData(options,dropdownValue);
  
});

async function fetchData(options, language){
  try {
    let response = await axios.request(options);
    console.log(response.data);
    response.data.text = response.data.text.replace(/\n/g, ' ');
    firstDiv.innerHTML = JSON.stringify(response.data.text);
    if(language === "English"){
      secondDiv.innerHTML = JSON.stringify(response.data.translations[0].description.replace(/\n/g, ' '));
    }
    else{
      secondDiv.innerHTML = JSON.stringify(response.data.translations[5].description.replace(/\n/g, ' '));
    }

  } catch (error) {
    console.error(error);
  }
}



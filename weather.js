const apiKey = '125b133ef0c8481daece58171809bb18';
const city = 'Bangkok';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}`)
   .then(res => res.json())
   .then(data => {
    console.log(data);
   })
   .catch(err => {
    console.log(err);
   });
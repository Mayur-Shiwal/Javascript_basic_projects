const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); //to stop the data sending to the server
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `${height} not a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight} not a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the res
    if (bmi < 18.6) results.innerHTML = `<span>bmi = ${bmi} you are under weight</span>`;
    else if (bmi >= 18.6 && bmi < 24.9) results.innerHTML = `<span>bmi = ${bmi} you are in normal range`;
    else results.innerHTML = `<span>bmi = ${bmi} you are Overweight</span>`;
  }
});

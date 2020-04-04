// State Data
const sbody = document.querySelector(".state-body");
const cbody = document.querySelector(".country-body");
const stime = document.querySelector(".india-update");
const ctime = document.querySelector(".world-update");
const dSConfirmed = document.querySelector("#stateC");
const dSRecovered = document.querySelector("#stateR");
const dSDeceased = document.querySelector("#stateD");
getData().then(data => {
  console.log(data);
  if (data.key_values[0].confirmeddelta > 0) {
    dSConfirmed.textContent = `(+${data.key_values[0].confirmeddelta})`;
    dSRecovered.textContent = `(+${data.key_values[0].recovereddelta})`;
    dSDeceased.textContent = `(+${data.key_values[0].deceaseddelta})`;
  }
  stime.textContent = data.key_values[0].lastupdatedtime;
  data.statewise.forEach((element, index) => {
    stateTemplate(element, index);
  });
});
const html = "";
const stateTemplate = state => {
  const html = `<tr>
  <td id="name">${state.state}</td>
  <td>${state.confirmed}</td>
  <td>${state.recovered}</td>
  <td>${state.deaths}</td>
</tr>`;
  sbody.innerHTML += html;
};
const chtml = "";
const countryTemplate = country => {
  const chtml = `<tr>
  <td id="name">${country.country_name}</td>
  <td>${country.cases}</td>
  <td>${country.total_recovered}</td>
  <td>${country.deaths}</td>
</tr>`;
  cbody.innerHTML += chtml;
};

// World Data
countryData().then(data => {
  ctime.textContent = data.statistic_taken_at;
  data.countries_stat.forEach(country => countryTemplate(country));
});

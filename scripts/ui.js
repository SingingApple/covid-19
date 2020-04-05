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
  if (JSON.parse(data.statewise[0].deltaconfirmed) > 0) {
    dSConfirmed.textContent = `(+${data.statewise[0].deltaconfirmed})`;
    dSRecovered.textContent = `(+${data.statewise[0].deltarecovered})`;
    dSDeceased.textContent = `(+${data.statewise[0].deltadeaths})`;
  }
  stime.textContent = data.statewise[0].lastupdatedtime;
  data.statewise.forEach(element => {
    stateTemplate(element);
  });
});
const html = "";
const stateTemplate = state => {
  const html = `<tr>
  <td id="name">${state.state} <span class="showing" id="tc">+(${state.deltaconfirmed})</span></td>
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

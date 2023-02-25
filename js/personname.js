const bal =  {
    "found": 2,
    "message": "Found 2 persons",
    "result": [
      {
        "name": {
          "common": "John",
          "fullName": [
            "John",
            "Doe"
          ]
        },
        "age": 32,
        "isMale": false,
        "address": {
          "street": "13/A St Joseph",
          "house": 10
        }
      },
      {
        "name": {
          "common": "Humayoun",
          "fullName": [
            "Humayoun",
            "Kabir"
          ]
        },
        "age": 33,
        "isMale": false,
        "address": {
          "street": "13/A St Lucia",
          "house": 11
        }
      }
    ]
  }
//   const nam = JSON.parse(bal)

//   console.log(bal)
const balish = document.getElementById('personCOntainer').innerHTML = `

<div class="card" style="width: 18rem;">
<div id="personCOntainer" class="card-body">
  <h5 id="name" class="card-title">Person Name: ${bal.result[0].name.fullName}</h5>
  <h6 id="age" class="card-subtitle mb-2 text-muted">Age: ${bal.result[0].age}</h6>
  <p class="card-text">Street: ${bal.result[0].address.street}</p>
</div>
</div>

<div class="card" style="width: 18rem;">
<div id="personCOntainer" class="card-body">
  <h5  class="card-title">Person Name: ${bal.result[1].name.fullName}</h5>
  <h6 class="card-subtitle mb-2 text-muted">Age: ${bal.result[0].age}</h6>
  <p class="card-text">Street: ${bal.result[0].address.street}</p>
</div>
</div>

`;
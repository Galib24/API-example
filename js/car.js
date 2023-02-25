const car = [
    {
      "_id": "60795d4e0489a32f948c4167",
      "name": "Honda Sedan",
      "price": "132",
      "description": "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      "imageURL": "https://i.ibb.co/54WzQjR/Honda.png"
    },
    {
      "_id": "60795e440489a32f948c4168",
      "name": "MitoSedan",
      "price": "221",
      "description": "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      "imageURL": "https://i.ibb.co/802Rwsq/Mito.png"
    },
    {
      "_id": "60795fc20489a32f948c4169",
      "name": "Isuzu Tacoma",
      "price": "105",
      "description": "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      "imageURL": "https://i.ibb.co/SJK7QYs/isuzu.png"
    },
    {
      "_id": "6079615d0489a32f948c416a",
      "name": "Chevrolet Crossover",
      "price": "434",
      "description": "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic"
    }
  ]

  const galib = document.getElementById('car-container').innerHTML =`
  
  <div class="card" style="width: 18rem;">
        <img src="${car[0].imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Car Name: ${car[0].name}</h5>
          <p class="card-text">Car Details: ${car[0].description}</p>
          <a href="#" class="btn btn-primary">Car Price: 132</a>
        </div>
      </div>


      <div class="card" style="width: 18rem;">
        <img src="${car[1].imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Car Name: ${car[1].name}</h5>
        <p class="card-text">Car Details: ${car[1].description}</p>
          <a href="#" class="btn btn-primary">Car Price: 221</a>
        </div>
      </div>


      <div class="card" style="width: 18rem;">
        <img src="${car[2].imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Car Name: ${car[2].name}</h5>
        <p class="card-text">Car Details: ${car[2].description}</p>
        <a href="#" class="btn btn-primary">Car Price: 241</a>
        </div>
      </div>
  
  
  
  `;
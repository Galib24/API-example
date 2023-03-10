const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}
const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;


    const name = user.results[0].name.title+ ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
    console.log(user.results[0].picture.medium);
    
    const image = document.getElementById('image');
    image.innerHTML = `
    <img src = "${user.results[0].picture.large}"/>
    <h1>Location latitude: ${user.results[0].location.coordinates.latitude
    }</h1>
    <h1>Location latitude: ${user.results[0].location.country}</h1>

    
    `;
}
loadUser()
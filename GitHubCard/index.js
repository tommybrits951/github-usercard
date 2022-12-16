import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector(".cards");
function gitFunction() {
  axios.get("https://api.github.com/users/tommybrits951")
.then(res => {
  makeDom(res.data);
  console.log(res.data)
})
.catch(err => {
  console.log(err);
})
.finally(() => console.log("Finally Finished"))
}
gitFunction()
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeDom(obj) {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  const cardName = document.createElement("h3");
  cardName.classList.add("name");
  cardName.textContent = obj.name;
  cardInfo.append(cardName);
  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.innerText = obj.login;
  cardInfo.appendChild(userName);
  const location = document.createElement("p");
  location.textContent = `Location: ${obj.location}`;
  const profile = document.createElement("p");
  const anchor = document.createElement("a");
  profile.innerHTML = `<a href="${obj.url}">${obj.url}</a>`
  cardInfo.append(profile);
  const followers = document.createElement("p");
  followers.textContent = `Followers: ${obj.followers}`
  cardInfo.append(followers);
  const following = document.createElement("p");
  following.textContent = `Following: ${obj.following}`;
  cardInfo.appendChild(following);
  const bio = document.createElement("p");
  bio.textContent = `Bio: ${obj.bio}`;
  cardInfo.append(bio);
  cards.appendChild(cardInfo);
  return cardInfo;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

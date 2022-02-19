// for border
document.getElementById('add-border').addEventListener('click',function () {
   const container = document.getElementById('friend-container');
   container.style.border = "3px solid orange"
})

// for background color
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
         friend.style.backgroundColor = 'coral'
    } 
}
// add friend
document.getElementById('add-friend').addEventListener('click',function () {
    const container = document.getElementById('friend-container');
    const friendsDiv = document.createElement('div');
    friendsDiv.classList.add('friend');
    friendsDiv.innerHTML=` 
    <h3 class="friend-name">Friend-2</h3>
    <p>Amet, error.</p>
    `;
    container.appendChild(friendsDiv);
})

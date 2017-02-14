/**
 * Created by HP Pavilion 17 on 10.2.2017 г..
 */

function flowUp(id){
    document.getElementById(id).style.animation = "flow-up 0.2s 1 forwards";
}
function flowDown(id){
    document.getElementById(id).style.animation = "flow-down 0.2s 1 forwards";
}
function changeWall(nameOfImage) {
    document.getElementById('wall').setAttribute('src', 'assets/images/' + nameOfImage);
    if (nameOfImage == 'fightclub.jpg'){
        document.getElementById('image-heading').innerHTML = "Fight club";
        document.getElementById('image-description').innerHTML = "&lt;&lt;The story of a man with personality disorder&gt;&gt;";
    } else if (nameOfImage == 'frozen.jpg'){
        document.getElementById('image-heading').innerHTML = "FrozeN with fear of power";
        document.getElementById('image-description').innerHTML = "&lt;&lt;Nothing stands on the way of love. Even it's the love of two sisters.&gt;&gt;";
    } else if (nameOfImage == 'mario.jpg'){
        document.getElementById('image-heading').innerHTML = "Supper Mario Bros.";
        document.getElementById('image-description').innerHTML = "&lt;&lt;Brave as always, they save their queen every time.&gt;&gt;";
    }
}
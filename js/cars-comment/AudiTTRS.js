let comments = [];

document.getElementById('comment-add').onclick = function() {
    event.preventDefault();
    let commentText = document.getElementById('comment-input');

    let comment = {
        text : commentText.value
    }

    commentText.value = '';
    comments.push(comment);
    console.log(comment);

    SaveCommnets();
    ShowComments();
}

function SaveCommnets() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function ShowComments() {
    let commentBlock = document.getElementById('comment-block');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="comment-nick">Женя</p>`;
        out += `<p class="comment-text">${item.text}</p>`;
    });
    commentBlock.innerHTML = out;
}
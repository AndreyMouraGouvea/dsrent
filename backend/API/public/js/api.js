var url = "https://chere.com.br/api"

function newUser(){
    var name = document.getElementById("nm_user").value;
    var email = document.getElementById("ds_email").value;
    var password = document.getElementById("ds_password").value;

    let body  = new FormData();

    body.append('nm_user', name);
    body.append('ds_email', email);
    body.append('ds_password', password);

    fetch(`${url}/user`, {
        body,
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then(response => {
        console.log(response);
    }) 
}
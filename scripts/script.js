let user = {
    email: "bond@gmail.com",
    password: "how I met your mother"
};

let head = {
    method: 'POST',
    body: user,
    headers: {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/json"
    }
}

loginUser = async () => {

    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk1MTExZDZiNTRmMzAwMjIzZjAxMWEiLCJpYXQiOjE2MjAzODE5ODF9.qkKFJjCrV7X8RjPxeO8qu9ytBknce2aS4OpcrjLtv5c";
    try{
        let req = await fetch('https://portfolio-api-2200.herokuapp.com/auth/login', {
            method: 'POST',
            mode: "no-cors",
            body: {
                "email": "bond@gmail.com",
                "password": "how I met your mother"
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        // let res = await req.json();
        console.log(req)
    }
    catch(err){
        console.log(err)
    }
    

    
}

inputData = (name, value) => { 
    user[name] = value;

    console.log(user)
}

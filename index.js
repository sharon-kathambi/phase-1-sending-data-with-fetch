// Add your code here
/*const userObject = {
    name: "Steve",
    email: "steve@steve.com",*/


function submitData(name, email){
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({name, email})
    })
        .then(res => res.json())

        .then( function ( object ) {
            document.body.innerHTML = object[ "id" ]
          } )
         // let message = 'Unauthorized Access'

          .catch( function ( error ) {
        
            document.body.innerHTML = `<p>${error.message}</p>`
          } )
       /* .then(user => {
            console.log(user)
        })
    }*/

}
console.log(submitData())
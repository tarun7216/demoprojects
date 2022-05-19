import axios from "axios";


function Data (){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( Response => {
        Data(Response.data);
        console.log(Response.data);
    });


}


export default Data;
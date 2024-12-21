import axios from "axios";

export default function jeweler(){
    var jewes=axios.get("http://localhost:3000/categories_jewelery ");
    return jewes;
}
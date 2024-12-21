import axios from "axios";


export default function womenclothing(){
    var xcc=axios.get("http://localhost:3000/categories_womensclothing");
    return xcc;
}
import axios from "axios";
export default function electronicgadjects(){
    var gadjects=axios.get("http://localhost:3000/categories_electronics")
    return gadjects;
}
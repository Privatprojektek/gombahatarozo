import GombaTabla from "../Komponensek/Admin/GombaTabla.js";
import {gombaAdat} from "../Modell/gombaadat.js"


export default function Admin() {
  return (
    <main className="Admin">
    <h2>Admin felület</h2>
   
      <article>
      <GombaTabla lista={gombaAdat}/>
       </article>
    </main>
  );
}
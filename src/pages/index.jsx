import CardRazaPerros from "components/CardRazaPerros";
import borderCollier from 'media/borderCollier.jpg';
import rodhesian from 'media/rodesian.jpg';
import frenchPoddle from "media/frenchPoddle.jpg";


function Index() {
    return (
        <main>
            <section>
                <h2>Razas de perros</h2>
                <ul className="breedCardContainer">
                    <CardRazaPerros nombreRaza='Border Collie' imagenRaza={borderCollier} color='breedCardRojo' likes="150" comentarios="60" vista="1500" link="/bordercollie" />
                    <CardRazaPerros nombreRaza='Rhodesian' imagenRaza={rodhesian} color='breedCardVerde' likes="150" comentarios="80" vista="800" link= "/rhodesian"/>
                    <CardRazaPerros nombreRaza='French Poddle' imagenRaza={frenchPoddle} color='breedCardVerde' likes="150" comentarios="80" vista="800" link= "/frenchpoddle"/>
                </ul>
            </section>
        </main>
    );
}

export default Index;
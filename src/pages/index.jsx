import CardRazaPerros from "components/CardRazaPerros";
import borderCollier from 'media/borderCollier.jpg';
import rodhesian from 'media/rodesian.jpg';
import Header from "components/Header";
import Footer from "components/Footer";


function Index() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <h2>Razas de perros</h2>
                    <ul className="breedCardContainer">
                        <CardRazaPerros nombreRaza='Border Collie' imagenRaza={borderCollier} color='breedCardRojo' likes="150" comentarios="60" vista="1500" />
                        <CardRazaPerros nombreRaza='Rhodesian' imagenRaza={rodhesian} color='breedCardVerde' likes="150" comentarios="80" vista="800" />
                    </ul>
                </section>
                <section></section>
            </main>
            <Footer />
        </div>
    );
}

export default Index;
import { useNavigate } from "react-router-dom";
import boasVindasImg from "../assets/home.png";
import sobreImg from "../assets/sobre.png";
import PetListLine from '../components/PetListLine';

export default function Home() {
    const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center m-12 p-10 rounded-lg h-[500px] shadow-lg">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-extrabold mb-6">
            Bem-vindo ao Resgate 2.0!
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            Aqui, acreditamos que todo pet merece um lar cheio de amor e
            carinho. Nossa plataforma conecta pessoas apaixonadas por animais a
            bichinhos que aguardam uma nova chance. Adote. Ame. Transforme. 💖
          </p>
          <button
            onClick={() => navigate("/adoption")}
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow hover:bg-blue-100 transition duration-300"
          >
            Quero adotar um pet
          </button>
        </div>
        <div className="ml-10">
          <img
            src={boasVindasImg}
            alt="Adote um Pet"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

            <PetListLine title="Quer Adotar?" subTitle="Confira Nossos Pets" />

      <div className="m-12 ">
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="font-bold text-xs ">Quer Adotar?</h1>
            <span className="font-bold text-2xl text-sky-950">
              Confira Nossos Pets
            </span>
          </div>
          <button
            onClick={() => navigate("/pet")}
            className="border border-sky-950 text-sky-950 font-semibold py-2 px-4 rounded-full hover:bg-sky-950 hover:text-white transition duration-300"
          >
            {"Ver mais >"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 m-12 p-10 rounded-lg shadow-lg grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
            Sobre o Resgate
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            O Resgate 2.0 nasceu do sonho de conectar animais em busca de um lar
            a pessoas dispostas a oferecer amor, cuidado e uma nova
            oportunidade. Com uma plataforma simples e acessível, acreditamos
            que cada história pode ter um final feliz.
          </p>
        </div>
        <div>
          <img
            src={sobreImg}
            alt="Sobre o Resgate"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="bg-blue-100 m-12 p-10 rounded-lg shadow-lg">
  <h1 className="text-3xl font-extrabold text-blue-600 mb-6">
    📞 Entre em Contato
  </h1>
  <p className="text-gray-700 text-lg mb-6">
    Tem dúvidas ou quer ajudar nossos pets? Estamos aqui para você!
  </p>
  <ul className="text-gray-600 space-y-4">
    <li>
      ✉️ <strong>Email:</strong> contato@resgate20.com
    </li>
    <li>
      📱 <strong>WhatsApp:</strong> (xx) xxxx-xxxx
    </li>
    <li>
      📍 <strong>Endereço:</strong> Rua Amor aos Animais, nº 123, Sua Cidade, Seu Estado
    </li>
  </ul>
</div>
    </>
  );
}

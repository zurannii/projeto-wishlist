import { useRef } from 'react';
import { Hero } from '../sections/Hero';
import { AboutThis } from '../sections/AboutThis';
import { TheList } from '../sections/TheList';
import { OneMinute } from '../sections/OneMinute';
import { Footer } from '../sections/Footer';
import "./App.css";

const bookItems = [
  { 
    id: 1, 
    image: "/assets/alice_pesadelo_loja_2.png", 
    title: "Alice: Edição de Luxo", 
    description: "Porque cair na toca do coelho é pouco, eu preciso dessa versão dark e maravilhosa na minha estante.", 
    link: "https://www.amazon.com.br/Alice-Pa%C3%ADs-Maravilhas-Atrav%C3%A9s-Espelho/dp/6588218966/ref=sr_1_5?dib=eyJ2IjoiMSJ9.nkGlXsJJbQThRCZw-z_hkvzRE1Ic2ql7ogT9hT3X1aOYPpFyYZ-167I_YIlHBCX3PaQGdt_iIsiyCoSMeZY3MzPovT6RBQ06j6nIugfQJRMDgqULWmuqFNwGpqlPNG_OVy6Kmqw4DDGYKkenhHW3pinYMwBho-8o7Gpm9KxJn1qDuFUtvYuJ77brnNTkU4MzH4bOFOT-jwxBsMz7yRY5scH38OntBPFAx6jmHmn2v2HrCHdKbNXbfwswUWebo6wSSoHPyX4OCLnU5HRkL0bLEEQg2qxNA3C0eYq-aMnMtTA.VhTm2wEHlpLfVFko9Hb0Z5O6iMeGkACROEDuTSUlmWU&dib_tag=se&keywords=alice+atrav%C3%A9s+do+espelho&qid=1763252965&sr=8-5" 
  },
  { 
    id: 2, 
    image: "/assets/coracao_satanico_loja_2.png", 
    title: "Coração Satânico", 
    description: "Para ler com a luz acesa e fingir que não estou com medo de fazer pacto sem querer.", 
    link: "https://www.amazon.com.br/Cora%C3%A7%C3%A3o-Sat%C3%A2nico-William-Hjortsberg/dp/8594540078/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3H8PAG1DAA60C&dib=eyJ2IjoiMSJ9.3kYwldmEbhnFF-WUo036oGP01HGdMIZczmsZbHSMkxCOdwc0AmtLVq8jgOTXU3x66STILc7_ngGPgiE0sqxLA5iLZr3VNBIv5wMrbttlMpqjuuk4pX7G5Sz0tyXlEkgeq-c7jMXfjiio_lqlIOMTlIrGRUM1WzxB3q2fiXTsoxsJXqYVelSYYtAsVHXCKkttuBJwobJMKPukC-fpF-7tlvOsTKjFWzH-Uv7W-r7pghYk2LzVxI2eAs5b2Ty4DeIuHnupbKFLaFlxPpkDHTwCyE2wbSA7i-LVjFqj6Y1esl0.Nld_lPA-jPfwUzFzPEcOHfVs8UNleV8O27sPdomSd48&dib_tag=se&keywords=Cora%C3%A7%C3%A3o+Sat%C3%A2nico&qid=1763253023&sprefix=cora%C3%A7%C3%A3o+sat%C3%A2nico%2Caps%2C264&sr=8-1" 
  },
  { 
    id: 3, 
    image: "/assets/DarkSide-2023-®-Reino-das-Bruxas-vol.2---Natureza-Sombria-2.png", 
    title: "Reino das Bruxas Vol. 2", 
    description: "Mais bruxaria, por favor. O coven precisa crescer e minha coleção também.", 
    link: "https://www.amazon.com.br/Reino-das-Bruxas-Natureza-Sombria/dp/6555982489/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30W3SKO9A5F6G&dib=eyJ2IjoiMSJ9.4fS9_FH5Q6Hbabra9p_iZBZZSwh87-6eLzTIUZJzLmk.2VAF51kssxe_rtF-Fzx53XnH4a7X74ZgyrE6_bqv6j4&dib_tag=se&keywords=Reino+das+Bruxas+Vol.+2%3A+Natureza+Sombria&qid=1763253077&sprefix=reino+das+bruxas+vol.+2+natureza+sombria%2Caps%2C256&sr=8-1" 
  },
  { 
    id: 4, 
    image: "/assets/grimorio-das-bruxas-2.png", 
    title: "Grimório das Bruxas", 
    description: "Basicamente meu manual de instruções. Não mexa ou posso te transformar num sapinho!", 
    link: "https://www.darksidebooks.com.br/grimorio-das-bruxas-moon-edition--brinde-exclusivo/p" 
  },
  { 
    id: 5, 
    image: "/assets/o-reino-das-bruxas-1.png", 
    title: "Reino das Bruxas: Vol 1", 
    description: "Onde tudo começou. Leitura obrigatória para manter minha carteirinha de bruxa em dia.", 
    link: "https://www.amazon.com.br/Reino-das-Bruxas-Irmandade-M%C3%ADstica/dp/6555982098/ref=pd_bxgy_d_sccl_2/134-5424879-0869154?pd_rd_w=B3szp&content-id=amzn1.sym.ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_p=ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_r=EXHQT6F6FEVPZ015FFFW&pd_rd_wg=lheqL&pd_rd_r=7eb6b6fe-1b15-4b51-8cc3-7631da9f5e5e&pd_rd_i=6555982098&psc=1" 
  },
  { 
    id: 6, 
    image: "/assets/pacto_de_sangue_loja_4.png", 
    title: "Carmilla: Pacto de Sangue", 
    description: "Vampiras góticas antes de Drácula ser modinha. Respeita a matriarca, caramba!", 
    link: "https://www.amazon.com.br/Pacto-Sangue-S-T-Gibson/dp/6555983337/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Y5MFXGWKSQ7J&dib=eyJ2IjoiMSJ9.N92tzZhRQC5Px6bi-LdC-qHdn59LmTk7wyLCbuBZ85opQc-s4CJTF8npvEY8bKCySL-SuUdZPVzkf3EMZRgCVcZvsr4OU1ca1JrF1q6MBDbz0mGYYRSogpJTUSrKqsLvET6S3iBjfQOFAF8Y2yhpYyF74RT3J5bG69o6p-XxXquGR2io606YNJ2YtwskAKramp3GOjjfux572Uw_z9KJKVwqvtQT2v4bc1ITO42jL50.Jk1LjBUeXjCPgbv-QROPaHUE-JSQN6JL4DKJI7-AeUs&dib_tag=se&keywords=Pacto+de+Sangue&qid=1763253523&s=books&sprefix=carmilla+pacto+de+sangue%2Cstripbooks%2C518&sr=1-1" 
  },
  { 
    id: 7, 
    image: "/assets/reino_das_bruxas_3_loja_02.png", 
    title: "Reino das Bruxas Vol. 3", 
    description: "O desfecho épico. Se eu chorar lendo isso, finja que não viu.", 
    link: "https://www.amazon.com.br/Reino-das-Bruxas-Poder-Arcano/dp/6555983620/ref=pd_bxgy_d_sccl_1/134-5424879-0869154?pd_rd_w=PgK5l&content-id=amzn1.sym.ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_p=ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_r=HB501H28Y8S7E05VDQBV&pd_rd_wg=N2Gvr&pd_rd_r=1375f046-3e03-4b2f-9783-3c73b338219a&pd_rd_i=6555983620&psc=1" 
  },
  {
    id: 8, 
    image: "/assets/a-noiva.png", 
    title: "A Noiva (Ali Hazelwood)", 
    description: "Ali Hazelwood com vampiros e lobisomens? Sim, eu preciso desse romance caótico imediatamente.", 
    link: "https://www.amazon.com.br/Noiva-Ali-Hazelwood/dp/6555656034/ref=rvi_d_sccl_10/134-5424879-0869154?pd_rd_w=PYj9r&content-id=amzn1.sym.5a5fdb9d-0c9f-4ef8-98d5-3da45c0cade0&pf_rd_p=5a5fdb9d-0c9f-4ef8-98d5-3da45c0cade0&pf_rd_r=K6629NPGNM5Z4M2VCTD0&pd_rd_wg=t0EhG&pd_rd_r=ac735f6f-1590-4379-a33d-a0a3012a6483&pd_rd_i=6555656034&psc=1"
  },
  {
    id: 9, 
    image: "/assets/fallen.jpg", 
    title: "Fallen", 
    description: "Anjos caídos, drama adolescente e roupas pretas. Minha adolescência gótica gritando por isso.", 
    link: "https://www.amazon.com.br/Fallen-Vol-1-Lauren-Kate/dp/8501089621/ref=sr_1_2?dib=eyJ2IjoiMSJ9.LmNKHfi-u23r0VwyuVs4rVJs2tzlBZxfDmv8OTBw61RVV5pgJ6mSbUT74e8bbkLwbZUz6di12LAtxL2IvO-RZFzfy7qeMCyGRB7WaZ0KIq3VUpT5M8MEjLt7fbMZRsetIxNNkTfW5LHJkmqHLMYytW1Lask-3xVXHAILj5vietv44P7hzP0r34x1iKLUf7GGFMLjbZ5LXslBF-ZQsWE5qUam8QPKoG9SRKvNv1efWKOYqZjSQ1Md2lFLbQH53H2_04djLauwutS-qSVABvDv4nyPoU7ohHCigW0VQnmzrZI.i79IpMPc-dmkVUh1CMOau7Rc885S4UmraahIWHVoRPI&dib_tag=se&keywords=fallen&qid=1763341836&sr=8-2"
  }
];

const socksItems = [
  {
    id: 101,
    image: "/assets/meia-riot.png", 
    title: "Meia Riot Estrelas",
    description: "Rebelde, mas com os pés quentinhos. Porque a revolução começa com conforto.",
    link: "https://www.lojasrenner.com.br/p/meia-cano-longo-em-algodao-estampa-riot-estrelas/-/A-930502040-br.lr?sku=930502058"
  },
  {
    id: 102,
    image: "/assets/meia-hello-kitty.webp",
    title: "Meia Hello Kitty",
    description: "Gótica suave. A Hello Kitty combina com tudo, inclusive com minha alma trevosa.",
    link: "https://www.lojasrenner.com.br/p/meia-cano-alto-em-algodao-com-estampa-hello-kitty/-/A-929196920-br.lr?sku=929196938"
  },
   {
    id: 103,
    image: "/assets/meia-patrick.webp",
    title: "Meia Patrick Estrela",
    description: "Pra usar nos dias em que meu cérebro simplesmente desconecta do Wi-Fi, abre um sorriso e fala: 'pera... quê?'",
    link: "https://www.lojasrenner.com.br/p/meia-cano-longo-em-algodao-patrick/-/A-550198912-br.lr?sku=550198921"
  },
  {
    id: 104,
    image: "/assets/mcquenn.webp",
    title: "Meia Relâmpago McQueen",
    description: "KATCHAU! Para fugir dos meus problemas na velocidade da luz.",
    link: "https://www.lojasrenner.com.br/p/meia-cano-longo-com-estampa-do-relampago-mcqueen/-/A-927993036-br.lr?sku=927993052"
  },
  {
    id: 105,
    image: "/assets/scooby-doo.webp",
    title: "Meia Scooby Doo",
    description: "A meia perfeita para investigar mistérios (ou só investigar as fofocas por aí).",
    link: "https://www.lojasrenner.com.br/p/meia-em-algodao-com-cano-alto-e-estampa-scooby-doo/-/A-928603909-br.lr?sku=928603917"
  },
  {
    id: 106,
    image: "/assets/lindinha.webp",
    title: "Meia Lindinha",
    description: "A parte doce e gentil da minha personalidade",
    link: "https://www.lojasrenner.com.br/p/meia-cano-alto-em-algodao-com-estampa-lindinha/-/A-929047908-br.lr?sku=929047916"
  },
];

const miscItems = [
  {
    id: 201,
    image: "/assets/galaxy.webp",
    title: "Luminária Globo Galáxia",
    description: "Um pequeno universo particular para quando a realidade deste mundo se tornar insuportável.",
    link: "https://shopee.com.br/Lumin%C3%A1ria-Decorativa-Globo-LED-Lua-Gal%C3%A1xia-Sistema-Solar-Astronauta-Bola-De-Cristal-i.1107305320.23594184455?extraParams=%7B%22display_model_id%22%3A229424217285%2C%22model_selection_logic%22%3A3%7D&xptdk=25c08a7a-8b05-4f93-af3f-125ef2663a90"
  },
  {
    id: 202,
    image: "/assets/saturno-led.webp",
    title: "Luminária de Saturno",
    description: "Ter o meu planeta favorito brilhando no escuro traz a paz cósmica é tudo que eu preciso.",
    link: "https://shopee.com.br/Lumin%C3%A1ria-Abajur-3d-Touch-Rgb-16cm-Rgb-Planeta-Saturno-i.293490585.23596282928?extraParams=%7B%22display_model_id%22%3A219163979253%2C%22model_selection_logic%22%3A3%7D&sp_atk=fdae2bd2-5551-4cba-bd91-830f30eca26b&xptdk=fdae2bd2-5551-4cba-bd91-830f30eca26b"
  },
  {
    id: 203,
    image: "/assets/morceguinho.webp",
    title: "Pelúcia de Morcego Fofo",
    description: "Olha essa carinha. Olha essas asinhas. É minha necessidade emocional número 1.",
    link: "https://shopee.com.br/JAMXUN-Brinquedo-de-Pel%C3%BAcia-de-Morcego-Fofo-de-45cm-Brinquedo-de-Pel%C3%BAcia-de-Coelho-Voador-Cauda-Longa-Boneca-Rosa-e-Pr-i.1594303396.57950245227?extraParams=%7B%22display_model_id%22%3A435021563598%2C%22model_selection_logic%22%3A3%7D&sp_atk=80e332af-ce86-4e6f-8d65-49523fb1d4cb&xptdk=80e332af-ce86-4e6f-8d65-49523fb1d4cb"
  }
];

export default function App() {
  const wishlistRef = useRef<HTMLDivElement>(null);

  const scrollToWishlist = () => {
    wishlistRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Hero onScrollToWishlist={scrollToWishlist} />
      <AboutThis />
      
      <TheList 
        ref={wishlistRef} 
        books={bookItems} 
        socks={socksItems}
        misc={miscItems}
      />
      
      <OneMinute />
      <Footer />
    </div>
  );
}
import { useRef } from 'react';
import { Hero } from '../sections/Hero';
import { AboutThis } from '../sections/AboutThis';
import { TheList } from '../sections/TheList';
import { Footer } from '../sections/Footer';
import "./App.css";

const wishlistItems = [
  { 
    id: 1, 
    image: "/assets/alice_pesadelo_brinde_ok_2.webp", 
    title: "Alice no País das Maravilhas e Através do Espelho", 
    description: "A clássica aventura de Lewis Carroll em uma edição sombria e especial.", 
    link: "https://www.amazon.com.br/Alice-Pa%C3%ADs-Maravilhas-Atrav%C3%A9s-Espelho/dp/6588218966/ref=sr_1_5?dib=eyJ2IjoiMSJ9.nkGlXsJJbQThRCZw-z_hkvzRE1Ic2ql7ogT9hT3X1aOYPpFyYZ-167I_YIlHBCX3PaQGdt_iIsiyCoSMeZY3MzPovT6RBQ06j6nIugfQJRMDgqULWmuqFNwGpqlPNG_OVy6Kmqw4DDGYKkenhHW3pinYMwBho-8o7Gpm9KxJn1qDuFUtvYuJ77brnNTkU4MzH4bOFOT-jwxBsMz7yRY5scH38OntBPFAx6jmHmn2v2HrCHdKbNXbfwswUWebo6wSSoHPyX4OCLnU5HRkL0bLEEQg2qxNA3C0eYq-aMnMtTA.VhTm2wEHlpLfVFko9Hb0Z5O6iMeGkACROEDuTSUlmWU&dib_tag=se&keywords=alice+atrav%C3%A9s+do+espelho&qid=1763252965&sr=8-5" 
  },
  { 
    id: 2, 
    image: "/assets/coracao_satanico_loja_2.png", 
    title: "Coração Satânico", 
    description: "O suspense sobrenatural de William Hjortsberg que inspirou o filme Angel Heart.", 
    link: "https://www.amazon.com.br/Cora%C3%A7%C3%A3o-Sat%C3%A2nico-William-Hjortsberg/dp/8594540078/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3H8PAG1DAA60C&dib=eyJ2IjoiMSJ9.3kYwldmEbhnFF-WUo036oGP01HGdMIZczmsZbHSMkxCOdwc0AmtLVq8jgOTXU3x66STILc7_ngGPgiE0sqxLA5iLZr3VNBIv5wMrbttlMpqjuuk4pX7G5Sz0tyXlEkgeq-c7jMXfjiio_lqlIOMTlIrGRUM1WzxB3q2fiXTsoxsJXqYVelSYYtAsVHXCKkttuBJwobJMKPukC-fpF-7tlvOsTKjFWzH-Uv7W-r7pghYk2LzVxI2eAs5b2Ty4DeIuHnupbKFLaFlxPpkDHTwCyE2wbSA7i-LVjFqj6Y1esl0.Nld_lPA-jPfwUzFzPEcOHfVs8UNleV8O27sPdomSd48&dib_tag=se&keywords=Cora%C3%A7%C3%A3o+Sat%C3%A2nico&qid=1763253023&sprefix=cora%C3%A7%C3%A3o+sat%C3%A2nico%2Caps%2C264&sr=8-1" 
  },
  { 
    id: 3, 
    image: "/assets/DarkSide-2023-®-Reino-das-Bruxas-vol.2---Natureza-Sombria-2.png", 
    title: "Reino das Bruxas Vol. 2: Natureza Sombria", 
    description: "O segundo volume da antologia de terror e fantasia sombria, editado por Livia C. Costa.", 
    link: "https://www.amazon.com.br/Reino-das-Bruxas-Natureza-Sombria/dp/6555982489/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30W3SKO9A5F6G&dib=eyJ2IjoiMSJ9.4fS9_FH5Q6Hbabra9p_iZBZZSwh87-6eLzTIUZJzLmk.2VAF51kssxe_rtF-Fzx53XnH4a7X74ZgyrE6_bqv6j4&dib_tag=se&keywords=Reino+das+Bruxas+Vol.+2%3A+Natureza+Sombria&qid=1763253077&sprefix=reino+das+bruxas+vol.+2+natureza+sombria%2Caps%2C256&sr=8-1" 
  },
  { 
    id: 4, 
    image: "/assets/grimorio-das-bruxas-2.png", 
    title: "Grimório das Bruxas", 
    description: "Um guia sobre a arte da bruxaria, feitiços e rituais por Kim M. M. Costa.", 
    link: "https://www.darksidebooks.com.br/grimorio-das-bruxas-moon-edition--brinde-exclusivo/p" 
  },
  { 
    id: 5, 
    image: "/assets/o-reino-das-bruxas-1.png", 
    title: "Reino das Bruxas: Irmandade Mística", 
    description: "O primeiro volume da antologia de contos sombrios sobre bruxaria, editado por Livia C. Costa.", 
    link: "https://www.amazon.com.br/Reino-das-Bruxas-Irmandade-M%C3%ADstica/dp/6555982098/ref=pd_bxgy_d_sccl_2/134-5424879-0869154?pd_rd_w=B3szp&content-id=amzn1.sym.ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_p=ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_r=EXHQT6F6FEVPZ015FFFW&pd_rd_wg=lheqL&pd_rd_r=7eb6b6fe-1b15-4b51-8cc3-7631da9f5e5e&pd_rd_i=6555982098&psc=1" 
  },
  { 
    id: 6, 
    image: "/assets/pacto_de_sangue_loja_4.png", 
    title: "Carmilla: Pacto de Sangue", 
    description: "A clássica novela gótica de vampiros de Sheridan Le Fanu, que inspirou Drácula.", 
    link: "https://www.amazon.com.br/Pacto-Sangue-S-T-Gibson/dp/6555983337/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Y5MFXGWKSQ7J&dib=eyJ2IjoiMSJ9.N92tzZhRQC5Px6bi-LdC-qHdn59LmTk7wyLCbuBZ85opQc-s4CJTF8npvEY8bKCySL-SuUdZPVzkf3EMZRgCVcZvsr4OU1ca1JrF1q6MBDbz0mGYYRSogpJTUSrKqsLvET6S3iBjfQOFAF8Y2yhpYyF74RT3J5bG69o6p-XxXquGR2io606YNJ2YtwskAKramp3GOjjfux572Uw_z9KJKVwqvtQT2v4bc1ITO42jL50.Jk1LjBUeXjCPgbv-QROPaHUE-JSQN6JL4DKJI7-AeUs&dib_tag=se&keywords=Pacto+de+Sangue&qid=1763253523&s=books&sprefix=carmilla+pacto+de+sangue%2Cstripbooks%2C518&sr=1-1" 
  },
  { 
    id: 7, 
    image: "/assets/reino_das_bruxas_3_loja_02.png", 
    title: "Reino das Bruxas: Poder Arcano", 
    description: "Desfecho épico da trilogia Reino das Bruxas por Kim M. M. Costa.", 
    link: "https://www.amazon.com.br/Reino-das-Bruxas-Poder-Arcano/dp/6555983620/ref=pd_bxgy_d_sccl_1/134-5424879-0869154?pd_rd_w=PgK5l&content-id=amzn1.sym.ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_p=ea5263f5-901f-4a74-9b73-3fc0e530788d&pf_rd_r=HB501H28Y8S7E05VDQBV&pd_rd_wg=N2Gvr&pd_rd_r=1375f046-3e03-4b2f-9783-3c73b338219a&pd_rd_i=6555983620&psc=1" 
  },
  {
    id: 8, 
    image: "/assets/a-noiva.png", 
    title: "Reino das Bruxas: Poder Arcano", 
    description: "Desfecho épico da trilogia Reino das Bruxas por Kim M. M. Costa.", 
    link: "https://www.amazon.com.br/Noiva-Ali-Hazelwood/dp/6555656034/ref=rvi_d_sccl_10/134-5424879-0869154?pd_rd_w=PYj9r&content-id=amzn1.sym.5a5fdb9d-0c9f-4ef8-98d5-3da45c0cade0&pf_rd_p=5a5fdb9d-0c9f-4ef8-98d5-3da45c0cade0&pf_rd_r=K6629NPGNM5Z4M2VCTD0&pd_rd_wg=t0EhG&pd_rd_r=ac735f6f-1590-4379-a33d-a0a3012a6483&pd_rd_i=6555656034&psc=1"
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
      <TheList ref={wishlistRef} items={wishlistItems} />
      <Footer />
    </div>
  );
}
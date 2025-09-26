const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sobre <span className="text-primary">Nós</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A YG Entertainment é uma das principais empresas de entretenimento da Coreia do Sul, 
              fundada em 1996 por Yang Hyun-suk. Somos conhecidos por criar alguns dos artistas 
              mais influentes e inovadores da indústria musical mundial.
            </p>
            <p>
              Com uma filosofia única que combina música, moda e cultura, a YG Family continua 
              a redefinir os padrões da indústria do entretenimento, produzindo artistas que 
              conquistam não apenas a Coreia, mas o mundo inteiro.
            </p>
            <p>
              Desde BIGBANG até BLACKPINK, TREASURE e BABYMONSTER, cada artista da YG Family 
              representa a excelência artística e a inovação que nos distingue no panorama 
              musical global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
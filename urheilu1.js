// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  getKokoNimi() {
    return `${this.etunimet} ${this.sukunimi}`;
  }
}

// Aliluokka Urheilija, joka perii Henkilo-luokan
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset = []
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = Array.isArray(saavutukset) ? saavutukset : [saavutukset];
  }

  // Getterit ja setterit
  get kuva() {
    return this.linkkiKuvaan;
  }
  set kuva(url) {
    this.linkkiKuvaan = url;
  }

  get paino() {
    return this.omapaino;
  }
  set paino(kg) {
    this.omapaino = kg;
  }

  get urheilulaji() {
    return this.laji;
  }
  set urheilulaji(laji) {
    this.laji = laji;
  }

  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(saavutukset) {
    this._saavutukset = Array.isArray(saavutukset)
      ? saavutukset
      : [saavutukset];
  }

  // Esimerkki funktio, joka tulostaa urheilijan tiedot
  tulostaTiedot() {
    console.log(
      `\nUrheilija: ${this.getKokoNimi()} (${this.kutsumanimi})\nLaji: ${
        this.laji
      }\nPaino: ${this.omapaino} kg\nSaavutukset: ${this.saavutukset.join(
        ", "
      )}\nKuva: ${this.linkkiKuvaan}`
    );
  }
}

// Esimerkkejä Urheilija-olioista
const kristofMilak = new Urheilija(
  "Kristóf",
  "Milák",
  "Kristóf",
  2000,
  "https://upload.wikimedia.org/wikipedia/commons/4/42/Krist%C3%B3f_Mil%C3%A1k.jpg",
  83,
  "Uinti",
  [
    "Olympiakulta 2021 (200m perhonen)",
    "MM-kulta 2019",
    "Euroopan mestaruus 2021",
  ]
);

const katinkaHosszu = new Urheilija(
  "Katinka",
  "Hosszú",
  "Iron Lady",
  1989,
  "https://upload.wikimedia.org/wikipedia/commons/d/db/Katinka_Hossz%C3%BA_2016c.jpg",
  68,
  "Uinti",
  ["3x Olympiakultaa 2016", "9x MM-kultaa", "6x Euroopan mestaruus"]
);

const ferencPuskas = new Urheilija(
  "Ferenc",
  "Puskás",
  "Öcsi",
  1927,
  "https://upload.wikimedia.org/wikipedia/commons/4/40/Ferenc_Pusk%C3%A1s_%281952%29.jpg",
  72,
  "Jalkapallo",
  ["Olympiakulta 1952", "MM-hopea 1954", "Real Madridin legenda"]
);

// Tulostetaan tietoja
kristofMilak.tulostaTiedot();
katinkaHosszu.tulostaTiedot();
ferencPuskas.tulostaTiedot();

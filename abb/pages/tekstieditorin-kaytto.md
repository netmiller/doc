# Tekstieditorin käyttäminen


Tekstieditori on se työkalu/ikkuna jossa kaikki uutiset ja muutkin artikkelit kirjoitetaan.

Se toimii selaimen sisällä ja muistuttaa aika lailla tekstinkäsittelytyökaluja (Word tai OpenOffice).

Teksti kirjoitetaan kuten tekstinkäsittelyssäkin, ja suurin osa muotoiluista on samanlaisia.

Mutta on siinä paljon erojakin, joten sitä kannattaa hieman harjoitella.


## 1. Sivun (=artikkelin) perustiedot

Perustiedot löytyvät ruudun yläreunasta, ja niille on hieman erilaisia käytäntöjä riippuen mitä
artikkelia ollaan tekemässä.

Tarkempaa tietoa sivuilla [Tiedotteiden tekeminen][21] ja [Muiden sivujen lisääminen][22].



## 2. Artikkelin tekstiosa

Varsinainen tekstiosa  (=sisältö) tehdään alempana samassa ikkunassa :

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption>Kuva31: ruutumalli tekstieditorista</figcaption>
</figure>


Yläärivissä on paljon "perustyökaluja" joita on jokaisessa tekstinkäsittelyssä;
kuten leikkaa-liimaa, lihavointi, kursivointi, alleviivaus jne.

Tekstin fontteja on käytössä muutamia, ja ne on niitä joita yleensä www-sivuilla voi käyttää turvallisesti;
eli kaikki erilaiset selaimet löytävät nämä fontit.

Fontteja ei välttämättä tarvitse käyttää ellei ole erityistä syytä; parempi on käyttää
erityisesti HTML-kieleen sovitettuja muotoiluja ("kappale", "Otsikko1", "Otsikko2", ym.).

Perusteksti kannattaa laittaa ylärivin "Kappale" -tyylillä. Se tarkoittaa ns. leipätekstiä
ja auttaa siinä että se käyttää aina sivustolle määriteltyä perusfonttia ja on samanlainen kuin sivujen muutkin tekstit.
Ja kun muutetaan CSS-asetusten perusfonttia, niin se vaikuttaa heti kaikille sivuille, ja tyylit pysyvät valitussa
linjassa automaattisesti.

Otsikoille ja väliotsikoille voi ottaa samasta valikosta tyyli "Otsikko 1" tai "Otsikko 2" tai "Otsikko 3" jne.
Ykkönen on suurin otsikko kirjasinkoko ja siitä alaspäin hieman pienemmällä fontilla.
Tässäkin on se etu että ne on yleensä etukäteen määritelty sivuston CSS-asetuksissa, ja näkyvät siis kaikilla
sivuilla samanlaisina eikä nihin tarvitse niin paljon itse kiinnittää huomiota.

Kokeilemalla näkee aika hyvin mikä sopii mihinkin paikkaan.

Tekstin lihavointia, kursivointia ja alleviivausta voi käyttää kuten tekstinkäsittelyssä.

Myös tekstille voi valita värin (oletus musta) ja myös taustavärin (oletus valkoinen) jos haluaa korostaa
jotain asiaa erityisesti.

Myös vastaavat listamerkinnät kuin tekstinkäsittelyohjelmistakin (numerot tai pallukat) löytyy valikosta.


## 3. Kuvien lisääminen

Kuvia voi lisätä ruudun alareunassa olevasta "Kuva" -nappulasta.

<figure class="fig-n" style="margin:0 0 20px 0">
![2][]
</figure>

Kuvien käsittelystä on tarkemmin sivulla [Kuvien käyttö artikkeleissa][24].


## 4. Sivukatko

<figure class="fig-n" style="margin:0 0 20px 0">
![3][]
</figure>


Alareuna "Sivukatko" -nappulalla ei ole paljoakaan käyttöä, se tekee vain tulostusta varten sivukatkon,
mutta www-sivut on tarkoitettu ruudulla katseltaviksi joten sillä ei sen takia ole paljon käyttöä.

PDF-tulosteet on eri asia, siinä tällä nappulalla ei ole mitään merkitystä,
koska PDF itse määrittää miten tulostus menee ja missä sivukatkot tehdään.


## 5. "Lue lisää" -toiminto

Uutiselle voidaan antaa tekstiosassa ns. johdanto tai ingressi.
Se on lyhyt tiivistelmä kuten sanomalehden ingressi, ja myös se näytetään etusivulla (vihreällä värillä).

Ingressi tehdään ruudun alareunan toiminnolla __"Lue lisää"__.

<figure class="fig-n" style="margin:0 0 20px 0">
![4][]
</figure>

Tätä kannattaa käyttää vain **Uutisissa**, koska muualla sitä ei ole hyödynnetty eikä se näy muualla millään tavalla.

Asiasta tarkemmin sivulla [Uutisten otsikointi ja sisältö][23].



## 6. Editorin tila -toiminto (HTML-muoto)

Hieman harvemmin käytetty toiminto joka on "Vaihda editorin tilaa".

Se näyttää koko sisällön puhtaassa HTML-muodossa.

<figure class="fig-n" style="margin:0 0 20px 0">
![5][]
</figure>

<figure class="fig-n" style="margin:0 0 20px 0">
![6][]
</figure>

Jos on hyvä tuntemus miten HTML kirjoitetaan ns. "raakana", niin tästä voi olla paljonkin hyötyä,
mutta muuten ei kannata käyttää.

HTML-muodossa voi myös tehdä muutoksia, mikäli tuntee hallitsevansa merkinnät riittävän hyvin.

Takaisin visuaaliseen editointiin päästään painamalla samaa toimintoa uudelleen.


## 7. Artikkelin talletus

Kun artikkeli on valmis ja se halutaan tallettaa, niin käytössä on useitakin vaihtoehtoja.

<figure class="fig-n" style="margin:0 0 20px 0">
![7][]
</figure>

__Tallenna__

*   Tallenna-toiminto vie artikkelin tietokantaan, mutta ei sulje ikkunaa vielä

__Tallenna & Sulje__

*   vie artikkelin tietokantaan, ja sulkee ikkunan jolloin päästään palaamaan edelliselle ruudulle

__Tallenna & Uusi__

*   vie artikkelin tietokantaan, ja tyhjentää ruudun jolloin voidaan alkaa kirjoittamaan ihan uutta artikkelia

__Tallenna kopiona__

*   vie artikkelin tietokantaan toiselle nimelle
*   voidaan käyttää kopioitaessa artikkelia pohjaksi jollekin toiselle/uudelle artikkelille

__Sulje__

*   Sulje-toiminto sulkee tekstieditorin
*   jos artikkeliin oli tehty muutoksia, niin ne peruuntuvat samalla
*   mikäli muutokset oli talletettu käyttäen __Tallenna__ -toimintoa, niin tämä vaan sulkee tekstieditorin



[1]: kuvat/kuva31.png "Ruutumalli tekstieditorista"
[2]: kuvat/kuva32.png "Ruutumalli"
[3]: kuvat/kuva33.png "Ruutumalli"
[4]: kuvat/kuva34.png "Ruutumalli"
[5]: kuvat/kuva35.png "Ruutumalli"
[6]: kuvat/kuva37.png "Ruutumalli"
[7]: kuvat/kuva38.png "Ruutumalli"
[21]: pages/uutisten-lisaaminen.md
[22]: pages/sivujen-lisaaminen.md
[23]: pages/uutisten-otsikointi.md
[24]: pages/kuvien-kaytto.md

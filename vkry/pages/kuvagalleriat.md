# Kuvagalleriat

Tarvittaessa voidaan __jäsensivustolle__ tehdä uusi kohta jonne kootaan __Kuvagalleriat__.

Sinne on mahdollista viedä kuvia, jotka järjestetään kansioittain (esim. tapahtumittain, aiheittain tms.).

    Toistaiseksi kuvagalleria on otettu pois käytöstä, mutta se on melko
    helppo ottaa käyttöön sitten kun sille tulee tarvetta.



## 1. Jäsenen toiminnot

__Kuvagalleria__ on tällä hetkellä määriteltynä niin että se tulee __Jäsenen toimintoihin__
(mikäli se aktivoidaan käyttöön).

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption></figcaption>
</figure>

Sijoituspaikka valikossa voidaan muuttaa Valikoiden hallinnan (__MenuManager__) kautta.
Kuvagalleriat voidaan myös sijoittaa kaikille näkyvään ylävalikkoon, mikäli niin halutaan.


## 2. Kuvagallerian valikkonäkymä

Kun __Kuvagalleriat__ valitaan Jäsenen toimintovalikosta, niin se näyttää
ensin kaikki kansiot joihin kuvat on järjestetty.

Kansioiden käyttö selkeyttää kuvien järjestelyä, eikä tämän komponentin avulla
kuvia voi muilla kriteereillä järjestelläkään.

<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
<figcaption></figcaption>
</figure>

Kansiota klikkaamalla saadaan se auki, ja nähdään sisältöä.


## 3. Kuvagallerian yleisnäkymä

Kun kuvagallerian kansio avataan, niin se generoi sisällöstä __pienennetyt kuvat__,
joista näkee yleissilmäyksen galleriaan, ja sieltä voi tiettyä kuvaa klikkaamalla
avata sen suurempaan kokoon ruudulle.

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption></figcaption>
</figure>



## 4. Uuden gallerian perustaminen

Ensimmäinen vaihe tässä on viedä kaikki halutut kuvat serverille __MediaManager__:n avulla.

Sitä varten on perustettu valmiiksi oma __pääkansio__ nimeltä __"kuvagalleriat"__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![4][]
</figure>

Pääkansion alle tulevat sitten varsinaiset kuvagalleriat kansioittain järjestettynä.

Tällä hetkellä siellä ei ole mitään, mutta ne voidaan perustaa __CreateNewFolder__ toiminnolla.

Kansioita voidaan perustaa tarpeellinen määrä, ja niiden avulla saadaan pidettyä kokonaisuudet hallussa.



## 5. Kuvakansio mukaan Kuvagalleriat-valikkoon

Jokaiselle kansiolle perustetaan yksi sivu __ArticleManager__ avulla.
Esim. __Content >> ArticleManager >> Add new Article__.

Ohessa malli miltä kuvakansion sivu pitäisi suurin piirtein näyttää.

<figure class="fig-n border" style="margin:0 0 20px 0;">
![6][]
<figcaption></figcaption>
</figure>

Artikkelissa muut asetukset tulee olla :

* __Status__ : Published (mikäli halutaan julkaista)
* __Category__ : Kuvagalleriat
* __Featured__ : No
* __Access__ : Registered

----

Sivulle voidaan antaa alkuun otsikkoa ja yleiskuvausta sisällöstä.

Varsinaiset kuvat sijoitetaan sen jälkeen seuraavaksi.


## 6. Määritys kuvien hakuun

Varsinainen tärkein sisältö, eli __kuvat__ otetaan mukaan seuraavanlaisella määrityksellä,
joka kirjoitetaan sivulle tekstieditorilla.

    {gallery}kuvagalleriat/kuvat-2015-01-01{/gallery}

Tämä määritys täytyy olla merkin tarkkuudella oikein (mallin mukaan).
Ainoastaan kansion nimi vaihtuu riippuen minkä kansion kuvasisältö halutaan tähän hakea.

__Määrityksen muoto :__

* alkuun tulee __{gallery}__  (pakollinen)
* seuraavaksi __pääkansion nimi__ joka meidän tapauksessa on __kuvagalleriat__
* kauttaviivalla erotettuna alikansion nimi (esimerkissä __kuvat-2015-01-01__)
* loppuun tulee __{/gallery}__  (pakollinen, ja sulkee gallerian määrityksen

Myös pienien ja isojen kirjainten täytyy olla oikein :

* alku/loppumääritys pienillä kirjaimilla
* pääkansio pienillä kirjaimilla (ainakin toistaseksi on nimetty näin)
* alikansion nimi samalla tavalla kuin se on nimetty (voi olla isoja ja pieniä kirjaimiä; pääasia että kirjoitetaan samalla tavalla MediaManager:ssa ja tässä yhteydessä)


__Galleriamääritys__ toimii automaattisesti niin että se hakee kansion sisällön siihen kohtaan missä
määritys on sivulle kirjoitettu.

Ja kuvista muodostetaan myös automaattisesti pienennetyt versiot, eikä niitä tarvi itse
erikseen alkaa tekemään.

Oikeitten kuvien kokoon kannattaa kiinnittää huomiota koska nykyiset digikamerat pyrkivät
tekemään todella suuria kuvatiedostoja, ja ne ovat tässä tarkoituksessa ylimitoitettuja.
Suuret kuvatiedostot vaan turhaan hidastavat käsittelyä ja katselua jos linjayhteys ei ole
huippuluokkaa.

Varsinaisten kuvien resoluution suositus voisi olla n. 1200 pikseliä
(joko leveys tai korkeus riippuen onko vaaka- vai pystykuva; joka tapauksessa pidempi reuna kuvassa).

----

Mikäli kuvagalleriat tulevat ajankohtaisiksi, niin kuvien käsittelyyn ja siihen saataviin
apuohjelmiin voidaan palata tarkemmin. Niillä voidaan kuvia pienentää ym. käsittelyä tarvittaessa.
Mutta se on oma aihealueensa sitten jos tulee ajankohtaiseksi.

----


[1]: kuvat/kuva190.png "Ruutumalli"
[2]: kuvat/kuva191.png "Ruutumalli"
[3]: kuvat/kuva192.png "Ruutumalli"
[4]: kuvat/kuva193.png "Ruutumalli"
[5]: kuvat/kuva194.png "Ruutumalli"
[6]: kuvat/kuva195.png "Ruutumalli"

# Muiden sivujen lisääminen

Kaikki artikkelit (myös tiedotteet) tehdään periaatteessa hyvin samalla tavalla.

Ainoat merkittävät erot on __Kategorian__ valinnassa.

Artikkeleita voidaan valikoiden sijasta linkata myös jonkin toisen artikkelin sisään,
jolloin niistä aukeaa esim. tarkentavia tai muuten aiheeseen liittyviä sivuja,
joita ei välttämättä ole lainkaan valikossa. Tai myös sekä että.


## 1.a Artikkelin lisääminen ohjauspaneelista

Lisääminen voidaan tehdä ohjauspaneelin painikkeesta: **Lisää uusi artikkeli**.

<figure class="fig-n" style="margin:0 0 20px 0">
![1][]
</figure>


## 1.b Lisääminen ruudun ylävalikosta

Toinen vaihtoehto on mennä ylhäällä olevan valikon kautta (Artikkelit) :

(1) **Artikkeli** -> (2) **Artikkeleiden hallinta** -> (3) **Lisää uusi artikkeli**

<figure class="fig-n border" style="margin:0 0 30px 0">
![2][]
</figure>


## 2. Artikkelin perustiedot

Artikkelin alussa annetaan perustiedot; esimerkin avulla vaikkapa seuraavasti:

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Kuva120: Ruutumalli artikkelin lisäämisestä (otsikkotiedot)</figcaption>
</figure>


__Otsikko__

*   näkyy yleensä aina sivun alussa, joten laitetaan haluttu teksti otsikoksi

__Alias__

*   ei tarvitse antaa (jätetään vaikka tyhjäksi).
*   ei ole meidän tapauksessa paljon käyttöä, koska järjestelmä muodostaa sen automaattisesti mikäli ei anneta erikseen

__Kategoria__

*   valitaan sopiva Kategoria vaihtoehdoista, jotka saa auki ao.valikosta
*   kategoria nimeltä "Tiedotteet" on varattu pelkästään tiedotteille, joten sitä ei voi käyttää muissa sivuissa

__Tila__

 * onko artikkeli suoraan julkaisukelpoinen
 * oletuksena järjestelmä asettaa Tila-koodiksi __Julkaistu__
 * tämän voi vaihtaa alasvetovalikosta jos ei halua heti laittaa esille
 * myöhemmin __Tila__-koodin voi vaihtaa esim. __"Artikkelien hallinta"__ -ikkunassa suoraan

__Nostettu__

 * tähän valitaan aina __EI__ vaihtoehto mikäli ollaan tekemässä jotain muuta kuin uutisia

__Muut asetukset__

 * muut asetukset (käyttöoikeus/käyttöoikeudet) kannattaa antaa olla oletusarvoina tässä vaiheessa


## 3. Artikkelin tekstiosa

Varsinainen tekstiosa tehdään alempana samassa ikkunassa, ja siinä on käytössä seuraava näkymä :

<figure class="fig-n border" style="margin:0 0 20px 0">
![4][]
<figcaption>Kuva22: Ruutumalli artikkelin tekemisestä</figcaption>
</figure>

Tämä alue on se jossa __varsinainen sisältö__ kirjoitetaan, ja myös korjaillaan jos siihen tulee muutoksia.

Kaikissa artikkeleissa on tämä sama näkymä käytössä (__tekstieditori__), ja se muistuttaa
aika paljon tekstinkäsittelyä ja siinä on paljon samoja toimintoja
(mm. lihavoinnit,kursivoinnit,värit,luettelot,leikkaa-liimaa-toiminnot jne).

Toiminnoista on tarkempi ohje sivulla [Tekstieditorin käyttäminen][21].

## 4. Tallettaminen

Kun artikkeli on kirjoitettu niin ruudun yläosassa on muutamia toimintoja joilla se voidaan tallettaa tai perua.

Jos talletuksen jälkeen huomaa vielä jotain korjattavaa, niin artikkeliin pääsee toki käsiksi ja
sen voi korjailla kuntoon kuten tekstinkäsittelyssä muutenkin.


<figure class="fig-n border" style="margin:0 0 20px 0">
![6][]
<figcaption>Kuva14: Ruutumalli toiminnoista</figcaption>
</figure>

__Tallenna__

*   Talleta-toiminto vie artikkelin tietokantaan
*   jos se on asetettu julkaistavaksi, niin se pitäisi heti näkyä oikeassa paikassaan (Kategoria)
*   tämä toiminto sulje ikkunaa vielä

__Tallenna & Sulje__

*   vie artikkelin tietokantaan, ja sulkee ikkunan jolloin päästään palaamaan edelliselle ruudulle

__Tallenna & Uusi__

*   vie artikkelin tietokantaan, ja tyhjentää ruudun jolloin voidaan alkaa kirjoittamaan toista artikkelia

__Peru__

*   Peru-toiminto sulkee tekstieditorin
*   jos oli tehty muutoksia, niin ne peruuntuvat samalla
*   mikäli muutokset oli talletettu käyttäen __Tallenna__ -toimintoa, niin näitä muutoksia ei enää peruta




## 5. Artikkelin julkaisupäivien asettaminen

Jos halutaan antaa tietylle artikkelille julkaisemisen alku- ja loppupäivä, jolloin se näkyy yleisölle,
niin se onnistuu ruudun oikeassa reunassa olevassa ikkunassa nimeltä __Julkaisuasetukset__.

Siitä on oma ohjeensa, joka löytyy valikosta tai suoraan [tästä linkistä][22].

Jos aloita- ja lopeta julkaisu jätetään tyhjäksi, niin artikkeli on näkyvissä kunnes se kokonaan
poistetaan tai otetaan __Julkaistu__ ohjaus pois päältä.


<figure class="fig-n border" style="margin:20px 0">
![7][]
<figcaption>Kuva15: Ruutumalli julkaisuasetuksista</figcaption>
</figure>




[1]: kuvat/kuva112.png "Ruutumalli toiminnosta"
[2]: kuvat/kuva113.png "Ruutumalli valikoiden kautta"
[3]: kuvat/kuva120.png "Ruutumalli otsikkotiedoista"
[4]: kuvat/kuva121.png "Ruutumalli sisällön tekemisestä"
[6]: kuvat/kuva117.png "Ruutumalli toiminnoista"
[7]: kuvat/kuva122.png "Ruutumalli julkaisuasetuksista"
[21]: pages/tekstieditorin-kaytto.md
[22]: pages/julkaisupvm.md


# Muiden sivujen (artikkelien) lisääminen

Muut sivut kuin uutiset tehdään periaatteessa hyvin samalla tavalla kuin uutisetkin.

Ainoat merkittävät erot on __Kategorian__ valinnassa ja sillä näkyykö artikkeli etusivulla.

Muut kuin uutiset eivät yleensä mene etusivulle, vaan ne kytketään jonnekin valikoihin
josta ne saadaan esiin. Myös uutisissa hyödynnetty johdanto/ingressi ei ole normaalisti tarpeen muilla sivuilla.

Artikkeleita voidaan valikoiden sijasta linkata myös jonkin toisen artikkelin sisään,
jolloin niistä aukeaa esim. tarkentavia tai muuten aiheeseen liittyviä sivuja,
joita ei välttämättä ole lainkaan valikossa. Tai myös sekä että.


## 1.a Artikkelin lisääminen ohjauspaneelista

Lisääminen voidaan tehdä ohjauspaneelin painikkeesta: **Lisää uusi artikkeli**.

<figure class="fig-n" style="margin:0 0 20px 0">
![1][]
<figcaption></figcaption>
</figure>


## 1.b Lisääminen ruudun ylävalikosta

Toinen vaihtoehto on mennä ylhäällä olevan valikon kautta (Artikkelit) :

(1) **Artikkeli** -> (2) **Artikkeleiden hallinta** -> (3) **Uusi**

<figure class="fig-n border" style="margin:0 0 30px 0">
![2][]
<figcaption></figcaption>
</figure>


## 2. Artikkelin perustiedot

Artikkelin alussa annetaan perustiedot; esimerkin avulla vaikkapa seuraavasti:

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Kuva21: Ruutumalli artikkelin lisäämisestä (otsikkotiedot)</figcaption>
</figure>


__Otsikko__

*   näkyy yleensä aina sivun alussa, joten laitetaan haluttu teksti otsikoksi.

__Alias__

*   ei tarvitse antaa (jätetään vaikka tyhjäksi).
*   ei ole meidän tapauksessa paljon käyttöä, koska järjestelmä muodostaa sen automaattisesti mikäli ei anneta erikseen

__Kategoria__

*   valitaan sopiva Kategoria vaihtoehdoista, jotka saa auki ao.valikosta
*   kategoria nimeltä "Uutiset" on varattu pelkästään uutisille, joten sitä ei voi käyttää muissa sivuissa
*   Mallisäännöt ja Muut aineistot** käyttäytyvät niin etä kaikki artikkelit jotka noihin ryhmiin tehdään,
    näkyvät ko. valikon takana luettelona. Luettelon voi sitten järjestää haluamaansa järjestykseen
*   eli tällä tavalla voi noihin valikoihin lisätä uusia sivuja jos tulee tarvetta
*   jos uusi sivu liittyy johonkin muuhun kuin em.kaksi pääryhmää, niin ne voi liittää vaikkapa
    **Yleistiedot** ryhmään jolle ei ole sovittu mitään erityistä ulkoasua

__Tila__

 * onko artikkeli suoraan julkaisukelpoinen
 * oletuksena järjestelmä asettaa Tila-koodiksi __Julkaistu__
 * tämän voi vaihtaa alasvetovalikosta jos ei halua heti laittaa esille
 * myöhemmin __Tila__-koodin voi vaihtaa esim. Artikkelien hallinta-ikkunassa suoraan

__Nostettu__

 * tähän valitaan aina __EI__ vaihtoehto
 * vain uutiset otetaan suoraan etusivulle, muuta artikkelit menevät omien valikoiden taakse

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

Kun artikkeli on kirjoitettu niin ruudun yläosassa (oikealla) on muutamia toimintoja joilla se voidaan tallettaa tai perua.

Jos talletuksen jälkeen huomaa vielä jotain korjattavaa, niin artikkeliin pääsee toki käsiksi ja
sen voi korjailla kuntoon kuten tekstinkäsittelyssä muutenkin.

__Talleta__

*   Talleta-toiminto vie artikkelin tietokantaan


__Sulje__

*   Sulje-toiminto peruu kaikki muutokset ja sulkee tekstieditorin

__Käytä__

*   tämä toiminto on myös hyödyllinen, koska se tallettaa tiedot kuten varsinainen "Talleta" -toimintokin,
    mutta jättää editorin silti auki jatkomuutoksia varten.
*   silloin voi selaimen toisessa ikkunassa tai välilehdessä käydä katsomassa miltä muutokset näyttävät ulospäin,
    ja jos jotain vielä pitää korjata niin palaa vaan takaisin tähän samaan ikkunaan ja jatkaa muutoksia ja
    ottaa vaikka uudelleen "Käytä" -toiminnon ja katsoo joko nyt on OK.

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

__Tallenna kopiona__

*   vie artikkelin tietokantaan toiselle nimelle
*   voidaan käyttää kopioitaessa artikkelia pohjaksi jollekin toiselle/uudelle artikkelille

__Sulje__

*   Sulje-toiminto sulkee tekstieditorin
*   jos oli tehty muutoksia, niin ne peruuntuvat samalla
*   mikäli muutokset oli talletettu käyttäen __Tallenna__ -toimintoa, niin tämä vaan sulkee tekstieditorin



## 5. Artikkelin julkaisupäivien asettaminen

Jos halutaan antaa tietylle artikkelille julkaisemisen alku- ja loppupäivä, jolloin se näkyy yleisölle,
niin se onnistuu ruudun oikeassa reunassa olevassa ikkunassa nimeltä __Julkaisuasetukset__.

Siitä on oma ohjeensa, joka löytyy valikosta tai suoraan [tästä linkistä][22].

<figure class="fig-n border" style="margin:0 0 20px 0">
![7][]
<figcaption>Kuva15: Ruutumalli julkaisuasetuksista</figcaption>
</figure>




[1]: kuvat/kuva10.png "Ruutumalli toiminnosta"
[2]: kuvat/kuva11.png "Ruutumalli valikoiden kautta"
[3]: kuvat/kuva21.png "Ruutumalli otsikkotiedoista"
[4]: kuvat/kuva22.png "Ruutumalli sisällön tekemisestä"
[6]: kuvat/kuva14.png "Ruutumalli toiminnoista"
[7]: kuvat/kuva15.png "Ruutumalli julkaisuasetuksista"
[21]: pages/tekstieditorin-kaytto.md
[22]: pages/julkaisupvm.md


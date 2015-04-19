# Tiedotteiden tekeminen

Tiedotteet ovat Joomlan terminologiassa artikkeleita, ja ne tehdään samalla tavalla kuin muutkin artikkelit.

Tässä ohjesivussa keskitytään vain __tiedotteisiin__, ja muiden artikkeleiden/sivujen osalta on olemassa vastaava ohje.


## 1.a Lisääminen ohjauspaneelista

Lisääminen voidaan tehdä ohjauspaneelin painikkeesta: **Lisää uusi artikkeli**.

<figure class="fig-n" style="margin:0 0 20px 0">
![1][]
</figure>


## 1.b Lisääminen ruudun ylävalikosta

Toinen vaihtoehto on mennä ylhäällä olevan valikon kautta (Artikkelit) :

(1) **Artikkeli** -> (2) **Artikkeleiden hallinta** -> (3) **Uusi**

<figure class="fig-n border" style="margin:0 0 30px 0">
![2][]
</figure>



## 2. Tiedotteen perustiedot

Uuden tiedotteen alussa annetaan perustiedot (seuraavassa esimerkki ja selityksiä) :

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Kuva12: Ruutumalli tiedotteen lisäämisestä (otsikkotiedot)</figcaption>
</figure>


__Otsikko__

 * näkyy __Tiedotteet__ -sivulla otsikkotekstinä

__Alias__

 * ei tarvitse antaa (jätetään vaikka tyhjäksi).
 * ei ole meidän tapauksessa paljon käyttöä, koska järjestelmä muodostaa sen automaattisesti mikäli ei anneta erikseen
 * voi myös antaa itse, mutta täytyy varmistaa ettei millään muulla artikkelilla ole samaa __alias__-tunnusta

__Kategoria__

 * jos ollaan tekemässä tiedotetta, niin kategoriaksi valitaan vaihtoehdoista aina __Uutiset__
 * oletuksena tässä on jotain muuta, __joten tämä täytyy muistaa vaihtaa tiedotteita tehdessä__

__Tila__

 * onko tiedote suoraan julkaisukelpoinen
 * oletuksena järjestelmä asettaa Tila-koodiksi __Julkaistu__
 * tämän voi vaihtaa alasvetovalikosta jos ei halua heti laittaa esille.

__Nostettu__

 * uutisissa tämä laitetaan normaalisti päälle (__=Kyllä__)
 * oletuksena ei ole päällä, joten __tämäkin täytyy muistaa vaihtaa__

__Muut asetukset__

 * muut asetukset (käyttöoikeus/käyttöoikeudet) kannattaa antaa olla oletusarvoina tässä vaiheessa



## 3. Tiedotteen tekstiosa

Tiedotteen sisältö tehdään alempana samassa ikkunassa, ja siinä on käytössä seuraava näkymä :

<figure class="fig-n border" style="margin:0 0 20px 0">
![5][]
<figcaption>Kuva13: Ruutumalli tiedotteen sisällöstä<figcaption>
</figure>

Tämä alue on se jossa __varsinainen tekstisisältö__ kirjoitetaan, ja myös korjaillaan jos siihen tulee muutoksia.

Kaikissa artikkeleissa on tämä sama näkymä käytössä (__tekstieditori__), ja se muistuttaa
aika paljon tekstinkäsittelyä ja siinä on paljon samoja toimintoja
(mm. lihavoinnit,kursivoinnit,värit,luettelot,leikkaa-liimaa-toiminnot jne).

Toiminnoista on tarkempi ohje sivulla [Tekstieditorin käyttäminen][21], mutta tässä muutama
oleellinen asia lähinnä tiedotteen laadintaa varten.

. . . . .

Teksti kirjoitetaan kuten tekstinkäsittelyssäkin, ja suurin osa muotoiluista on samanlaisia.

"Format" -valikosta kannattaa hyödyntää ainakin muutamaa HTML-kieleen liittyvää määritystä.

<figure class="fig-r border" style="margin:0 0 20px 0">
![8][]
</figure>


Esim. "Kappale/Paragraph" tarkoittaa ns. leipätekstiä ja se käyttää aina sivustolle määriteltyä perusfonttia,
ja on aina samanlainen kuin sivujen muutkin tekstit.

Samasta valikosta löytyvät "Otsikko 1, Otsikko 2, Otsikko 3..jne"  tekevät helposti otsikot tekstiin,
ja ne tulevat hieman isommalla fonttikoolla.

Tässäkin on se etu että ne on yleensä etukäteen määritelty sivuston CSS-asetuksissa, ja näkyvät siis kaikilla
sivuilla samanlaisina eikä nihin tarvitse niin paljon itse kiinnittää huomiota.

Fonteista on käytössä ne joita yleensä www-sivuilla voi käyttää turvallisesti;
eli kaikki erilaiset selaimet löytävät nämä fontit. Tässä on hieman poikkeusta tekstinkäsittelyyn verraten,
mutta onneksi fonttivalikoimassa on kaikki yleisimmät fontit joten niillä tulee hyvin toimeen.

Tämä rajoitus on kaikilla HTML-sivuilla samanlainen, eikä liity erityisesti Joomlaan eikä www-sivujen toteutukseen.

Sensijaan lihavointia ja kursivointia voi käyttää kuten tekstinkäsittelyssä.

Myös tekstille voi valita värin (oletus musta) ja myös taustavärin (oletus valkoinen) jos haluaa korostaa
jotain asiaa erityisesti.

Kaikkia valikossa olevia kannattaa kokeilla ja harjoitella, niin ne oppii samalla tavalla kuin tekstinkäsittelyssäkin.

Editointitilassa teksti ei kuitenkaan näy ihan samalla tavalla kuin varsinaisella sivustolla,
joten kannattaa aina tarkistaa lopputulos muuta kautta.

Testiympäristössä voi kokeilla kaikkea vapaasti.

Kaikille artikkeleille (myös tiedotteelle) voidaan lisätä myös kuvia ruudun alaosassa olevalla
toimintopainikkeella __Kuva__.

Kuvien käsittelystä on tarkemmin sivulla [Kuvien käyttö artikkeleissa][22].

Ruudun alareunassa on myös toimintokuvake __Sivukatko__, jolla voisi pakottaa tekstiin sivunvaihdon,
mutta sillä ei ole vaikutusta eikä merkitystä muualla kuin tulostettaessa. Ei juurikaan kannata käyttää koska nämä
sivut on tarkoitettu esitettäväksi näytöllä, ja jos haluaa hyvin tarkasti muotoilla asiansa tulostusta varten,
niin silloin kannattaa käyttää pdf-liitettä, joka tulostuu juuri samanlaisena kuin se on tehty.



## 4. Tallettaminen

Kun tiedote on kirjoitettu niin ruudun yläosassa on muutamia toimintoja joilla se voidaan tallettaa tai perua.

Jos talletuksen jälkeen huomaa vielä jotain korjattavaa, niin tekstiin pääsee toki käsiksi ja
sen voi korjailla kuntoon kuten tekstinkäsittelyssä muutenkin.

<figure class="fig-n border" style="margin:0 0 20px 0">
![6][]
<figcaption>Kuva117: Ruutumalli toiminnoista</figcaption>
</figure>

__Tallenna__

*   Talleta-toiminto vie tiedotteen tietokantaan ja jos se on asetettu julkaistavaksi ja vielä etusivulle suoraan,
    niin se pitäisi heti näkyä kaikille etusivulla
*   tämä toiminto sulje ikkunaa vielä

__Tallenna & Sulje__

*   vie tiedotteen tietokantaan, ja sulkee ikkunan jolloin päästään palaamaan edelliselle ruudulle

__Tallenna & Uusi__

*   vie tiedotteen tietokantaan, ja tyhjentää ruudun jolloin voidaan alkaa kirjoittamaan toista tiedotetta


__Peru__

*   Peru-toiminto sulkee tekstieditorin
*   jos oli tehty muutoksia, niin ne peruuntuvat samalla
*   mikäli muutokset oli talletettu käyttäen __Tallenna__ -toimintoa, niin tämä vaan sulkee tekstieditorin, eikä peru enää erikseen talletettuja muutoksia



## 5. Tiedotteen julkaisupäivien asettaminen

Jos halutaan antaa tietylle tiedotteelle julkaisemisen alku- ja loppupäivä, jolloin se näkyy yleisölle,
niin se onnistuu myös.

Siitä on oma ohjeensa, joka löytyy valikosta tai suoraan [tästä linkistä][23].

<figure class="fig-n border" style="margin:20px 0">
![7][]
<figcaption>Kuva15: Ruutumalli julkaisuasetuksista</figcaption>
</figure>



[1]: kuvat/kuva112.png "Ruutumalli toiminnosta"
[2]: kuvat/kuva113.png "Ruutumalli valikoiden kautta"
[3]: kuvat/kuva114.png "Ruutumalli otsikkotiedoista"
[5]: kuvat/kuva115.png "Ruutumalli tiedotteen tekstistä"
[6]: kuvat/kuva117.png "Ruutumalli toiminnoista"
[7]: kuvat/kuva118.png "Ruutumalli julkaisuasetuksista"
[8]: kuvat/kuva116.png "Ruutumalli kappale/otsikko -valinnoista"
[21]: pages/tekstieditorin-kaytto.md
[22]: pages/kuvien-kaytto.md
[23]: pages/julkaisupvm.md

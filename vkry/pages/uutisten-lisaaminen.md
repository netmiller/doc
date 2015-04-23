# Uutisten lisääminen

Etusivulle tulevat uutiset tehdään samalla tavalla kuin muutkin artikkelit.

Tässä ohjeessa keskitytään vain uutisiin, ja muiden artikkeleiden/sivujen osalta on olemassa vastaava ohje.

## 1.Uusi uutinen (Add New Article)

Lisääminen voidaan tehdä __ControlPanel__:n kautta tai ylävalikon __Content__ toimintojen kautta.

Molemmissa varsinainen toiminto on nimetty __Add New Article__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption></figcaption>
</figure>



## 2. Uutisen (=artikkelin) perustiedot

Uuden uutisen Content-välilehdellä annetaan uutisen sisältö ja perusasetukset (seuraavassa esimerkki ja selityksiä) :

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Kuva12: Ruutumalli uutisen lisäämisestä</figcaption>
</figure>


__Title__

 * otsikko joka näkyy automaattisesti etusivulla uutisen otsikkona
 * otsikon ja johdannon käytännöstä on tarkemmin sivulla [Uutisten otsikointi ja sisältö][20] .

__Alias__

 * ei tarvitse antaa (jätetään vaikka tyhjäksi).
 * ohjelmisto generoi sen automaattisesti mutta voi halutessaan antaa itse

__Status__ (1)

 * onko uutinen/artikkeli suoraan julkaisukelpoinen
 * oletuksena järjestelmä asettaa arvoksi __Published__
 * tämän voi vaihtaa alasvetovalikosta jos ei halua heti laittaa esille.

__Category__

 * jos ollaan tekemässä uutisia, niin kategoriaksi valitaan vaihtoehdoista aina **Uutiset**

__Featured__ (2)

 * näkyykö uutinen etusivulla
 * oletuksena järjestelmä tarjoaa No-vaihtoehtoa, joka täytyy vaihtaa jos ollaan tekemässä  etusivun uutista
 * ArticleManagerissa sen voi myös vaihtaa myöhemminkin, jolloin alkuvaiheessa sen voi halutessaan laittaa arvoon __No__
 * muissa kuin uutisissa yleensä käytetään tässä kohtaa Ei-vaihtoehtoa

__Muut asetukset__

 * muut asetukset (Access/Language/Tags) kannattaa antaa olla oletusarvoina tässä vaiheessa


## 3. Tekstiosa

Varsinainen tekstiosa tehdään vas.reunan ikkunassa, joka näyttää suurin piirtein seuraavalta :

<figure class="fig-n border" style="margin:0 0 20px 0">
![5][]
<figcaption>Kuva13: Ruutumalli uutisen tekemisestä</figcaption>
</figure>

Tämä alue on se jossa __varsinainen sisältö__ kirjoitetaan, ja myös korjaillaan jos siihen tulee muutoksia.

Kaikissa artikkeleissa on tämä sama näkymä käytössä (__tekstieditori__), ja se muistuttaa
aika paljon tekstinkäsittelyä ja siinä on paljon samoja toimintoja
(mm. lihavoinnit,kursivoinnit,värit,luettelot,leikkaa-liimaa-toiminnot jne).

Toiminnoista on tarkempi ohje sivulla [Tekstieditorin käyttäminen][21].

Sisällön alkuun voi uutisissa laittaa ns. ingressin, joka otetaan automaattisesti mukaan etusivulle,
mutta uutisen koko sisältö saadaan näkymään avaamalla uutinen etusivulta (tai Ajankohtaista-valikosta _> Lue lisää -toiminto).
Tämä toiminto saadaan tehtyä ruudun alareunassa olevan __Read More__ painikkeen avulla, joka tekee editointi-ikkunaan
punaisen pisteviivan jonka alla on loput artikkelin sisällöstä.

Tästä löytyy tarkempi ohje sivulta [Uutisten otsikointi ja sisältö][24].

Kaikille artikkeleille (myös uutisille) voidaan lisätä myös kuvia ruudun alaosassa olevalla
toimintopainikkeella __Image__.

Kuvien käsittelystä on tarkemmin sivulla [Kuvien käyttö artikkeleissa][22].


## 4. Tallettaminen

Kun uutinen on kirjoitettu niin ruudun yläosassa on muutamia toimintoja joilla se voidaan tallettaa tai perua.

Jos talletuksen jälkeen huomaa vielä jotain korjattavaa, niin uutiseen pääsee toki käsiksi ja
sen voi korjailla kuntoon kuten tekstinkäsittelyssä muutenkin.

<figure class="fig-n border" style="margin:0 0 20px 0">
![6][]
<figcaption>Kuva14: Ruutumalli toiminnoista</figcaption>
</figure>

__Save__

*   Save-toiminto vie uutisen tietokantaan ja jos se on asetettu julkaistavaksi ja vielä etusivulle suoraan,
    niin se pitäisi heti näkyä kaikille etusivulla
*   tämä toiminto ei sulje ikkunaa vielä

__Save & Close__

*   vie uutisen tietokantaan, ja sulkee ikkunan jolloin päästään palaamaan edelliselle ruudulle

__Save & New__

*   vie uutisen tietokantaan, ja tyhjentää ruudun jolloin voidaan alkaa kirjoittamaan toista uutista

__Save as Copy__

*   vie uutisen tietokantaan toiselle nimelle
*   voidaan käyttää kopioitaessa uutista pohjaksi jollekin toiselle/uudelle uutiselle

__Close__

*   Close-toiminto sulkee tekstieditorin
*   jos oli tehty muutoksia, niin ne peruuntuvat samalla
*   mikäli muutokset oli talletettu käyttäen __Save__ -toimintoa, niin tämä vaan sulkee tekstieditorin



## 5. Uutisen julkaisupäivien asettaminen

Jos halutaan antaa tietylle uutiselle julkaisemisen alku- ja loppupäivä, jolloin se näkyy yleisölle,
niin se onnistuu myös. Päivämääräasetukset voidaan antaa välilehdellä __Publishing__.

Siitä on oma ohjeensa, joka löytyy valikosta tai suoraan [tästä linkistä][23].

<figure class="fig-n border" style="margin:0 0 20px 0">
![7][]
<figcaption>Kuva15: Ruutumalli julkaisuasetuksista</figcaption>
</figure>



[1]: kuvat/kuva115.png 
[3]: kuvat/kuva116.png 
[5]: kuvat/kuva117.png "Ruutumalli sisällön tekemisestä"
[6]: kuvat/kuva118.png "Ruutumalli toiminnoista"
[7]: kuvat/kuva119.png "Ruutumalli julkaisuasetuksista"
[20]: pages/uutisten-otsikointi.md
[21]: pages/tekstieditorin-kaytto.md
[22]: pages/kuvien-kaytto.md
[23]: pages/julkaisupvm.md
[24]: pages/uutisten-otsikointi.md




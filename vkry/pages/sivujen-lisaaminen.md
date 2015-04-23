# Muiden sivujen lisääminen

Muut sivut kuin uutiset tehdään periaatteessa hyvin samalla tavalla kuin uutisetkin.

Ainoat merkittävät erot on __Kategorian__ valinnassa ja sillä näkyykö artikkeli etusivulla.

Muut kuin uutiset eivät yleensä mene etusivulle, vaan ne kytketään jonnekin valikoihin
josta ne saadaan esiin. Myös uutisissa hyödynnetty johdanto/ingressi ei ole normaalisti tarpeen muilla sivuilla.

Artikkeleita voidaan valikoiden sijasta linkata myös jonkin toisen artikkelin sisään,
jolloin niistä aukeaa esim. tarkentavia tai muuten aiheeseen liittyviä sivuja,
joita ei välttämättä ole lainkaan valikossa. Tai myös sekä-että.


## 1.Artikkelin lisääminen (Add New Article)

Lisääminen voidaan tehdä __ControlPanel__:n kautta tai ylävalikon __Content__ toimintojen kautta.

Molemmissa varsinainen toiminto on nimetty __Add New Article__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption></figcaption>
</figure>




## 2. Artikkelin perustiedot

Artikkelin sisältö ja tärkeimmät asetukset/ohjaustiedot annetaan ensimmäisellä välilehdellä __Content__,
esimerkissä vaikkapa seuraavasti:

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Kuva21: Ruutumalli artikkelin lisäämisestä (otsikkotiedot)</figcaption>
</figure>


__Title__

*   näkyy yleensä aina sivun alussa, joten laitetaan haluttu teksti otsikoksi.

__Alias__

*   ei tarvitse antaa (jätetään vaikka tyhjäksi).
*   ei ole yleensä paljon käyttöä, koska järjestelmä muodostaa sen automaattisesti mikäli ei anneta erikseen

__Status__

 * onko artikkeli suoraan julkaisukelpoinen
 * oletuksena järjestelmä asettaa Tila-koodiksi __Published__
 * tämän voi vaihtaa alasvetovalikosta jos ei halua heti laittaa esille

__Category__

*   valitaan sopiva Kategoria vaihtoehdoista, jotka saa auki ao.valikosta
*   kategoria nimeltä "Uutiset" on varattu pelkästään uutisille, joten sitä ei voi käyttää muissa sivuissa
*   kategoria-asetus ohjaa artikkelin automaattisesti näkymään oikeassa asiayhteydessä, varsinkin
*   __Jäsenen näkymän__  monet valikot muodostetaan automaattisesti kategorian perusteella

__Featured__

 * tähän valitaan aina __No__ vaihtoehto
 * vain uutiset otetaan suoraan etusivulle, muuta artikkelit menevät omien valikoiden taakse, eikä tällä asetuksella ole niihin vaikutusta

__Access__

 * asetetaan joko __Public__ tai __Registered__ riippuen siitä mihin osioon artikkeli on tarkoitettu
 * kannattaa laittaa oikein, vaikka valikot myöskin ohjaavat artikklien näkymistä



## 3. Artikkelin tekstiosa

Varsinainen tekstiosa tehdään Content-välilehden ikkunassa, ja siinä on käytössä seuraava näkymä :

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

<figure class="fig-n border" style="margin:0 0 20px 0">
![6][]
<figcaption>Kuva14: Ruutumalli toiminnoista</figcaption>
</figure>

__Save__

*   Save-toiminto vie artikkelin tietokantaan ja jos se on asetettu julkaistavaksi niin se pitäisi näkyä oikeassa valikossa heti
*   tämä toiminto ei sulje ikkunaa vielä

__Save & Close__

*   vie artikkelin tietokantaan, ja sulkee ikkunan jolloin päästään palaamaan edelliselle ruudulle

__Save & New__

*   vie artikkelin tietokantaan, ja tyhjentää ruudun jolloin voidaan alkaa kirjoittamaan toista

__Save as Copy__

*   vie artikkelin tietokantaan toiselle nimelle
*   voidaan käyttää kopioitaessa artikkelia pohjaksi jollekin toiselle/uudelle artikkelille

__Close__

*   Close-toiminto sulkee tekstieditorin
*   jos oli tehty muutoksia, niin ne peruuntuvat samalla
*   mikäli muutokset oli talletettu käyttäen __Save__ -toimintoa, niin tämä vaan sulkee tekstieditorin





## 5. Artikkelin julkaisupäivien asettaminen

Jos halutaan antaa tietylle artikkelille julkaisemisen alku- ja loppupäivä, jolloin se näkyy ulospäin,
niin se onnistuu myös. Päivämääräasetukset voidaan antaa välilehdellä __Publishing__.

Siitä on oma ohjeensa, joka löytyy valikosta tai suoraan [tästä linkistä][22].

<figure class="fig-n border" style="margin:0 0 20px 0">
![7][]
<figcaption>Kuva15: Ruutumalli julkaisuasetuksista</figcaption>
</figure>




[1]: kuvat/kuva115.png "Ruutumalli toiminnosta"
[3]: kuvat/kuva122.png "Ruutumalli"
[4]: kuvat/kuva123.png "Ruutumalli sisällön tekemisestä"
[6]: kuvat/kuva118.png "Ruutumalli toiminnoista"
[7]: kuvat/kuva124.png "Ruutumalli julkaisuasetuksista"
[21]: pages/tekstieditorin-kaytto.md
[22]: pages/julkaisupvm.md


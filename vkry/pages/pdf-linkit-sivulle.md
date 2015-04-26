# PDF-tiedostojen linkittäminen sisältöön

Tekstisivulle (tekstin sisältöön) voi linkittää myös PDF-muotoisen tiedoston.


## 1. Siirretään pdf-tiedosto serverille

Että pdf-tiedosto voidaan liittää ja linkitää muuhun sisältöön, täytyy se ensin saada mukaan serverille.

Tämä tehdään __Media Manager__:n kautta, jonka avulla tiedosto viedään sopivaan kansioon odottamaan.
Kansiona voi käyttää esim. valmiina olevia kansioita __pdf-tiedostot__ tai __PDF__.

Media Manager:n käytöstä löytyy [oma ohje täältä][11].

Kun pdf-tiedoston on mukana ja näkyy Media Manager:n jossain kansiossa, niin päästään linkittämään se mukaan.



## 2. Avataan sivu jolle tehdään pdf-linkki

Sivu voi olla jo olemassa, tai tehdään tätä varten oma sivu.

Ohjeita löytyy seuraavista :

- [Muiden sivujen lisääminen][12]
- [Sivujen muuttaminen][13].


## 3. Linkin lisäys sivulle

Sivun sisältöeditorilla (lisätietoja [Tekstieditorin käyttäminen][14]) voidaan lisätä
linkki mihin kohtaan tekstiä halutaan.

Sitä varten on valittava joku tekstin sana/otsikko/tms. johon linkki muodostuu.

Valitaan editorissa (=valaistaan) haluttu sana (esimerkissä __pdf-dokumentti 2__).


<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
</figure>

Sitten etsitään yläpalkista pieni ketjun kuvake  (esimerkissä toiminto __Insert/edit link__).

Nyt jos haluttu sana on edelleen valittuna/valaistuna niin linkki muodostuu ko.sanasta tai tekstistä, eli linkki on siellä takana mutta teksti pysyy ennallaan.

Seuraavassa vielä miten linkki määritellään.


## 4. Linkin osoite

Linkin lisäys (Insert tai edit) avaa pienen ikkunan joka näyttää seuraavanlaiselta :

<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
</figure>

Kenttä __Url__ on tässä tapauksessa se tärkein, ja täytyy antaa oikeassa muodossa että varsinainen sivu (HTML) löytää sen serveriltä.

Toistaiseksi URL-osoite menee niin että osoite alkaa aina __/images/__  osalla, ja jatkuu sen kansion nimellä jonne
pdf-tiedosto on aiemmin viety.

Esimerkissä se voisi olla __/images/pdf-tiedostot/testidokumentti2.pdf__


<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
</figure>


Eli URL-osoitteen muoto:

* vakioalku __/images__  + kansion nimi (__pdf-tiedostot__) + tiedoston nimi (__testidokumentti2.pdf__).

Ja kauttaviivat alkuun ja osien väliin (=ovat tärkeitä ja täytyy olla oikein, muuten serveri ei löydä tiedostoa).

----

Linkin osoitteessa muut kentät ovat :

* __Text to display__: valittu teksti johon linkki muodostuu
* __Title__: avaa tämän tekstin pieneen ikkunaan jos kursori viedään linkin päälle ja pidetään hetken paikallaan
* __Rel__: ei juurikaan käyttöä
* __Target__: None=pdf avautuu samaan selaimen välilehteen; New Window=avataan uuteen välilehteen


----

[1]: kuvat/kuva170.png "Ruutumalli"
[2]: kuvat/kuva171.png "Ruutumalli"
[3]: kuvat/kuva172.png "Ruutumalli"
[11]: pages/mediatiedostot.md
[12]: pages/sivujen-lisaaminen.md
[13]: pages/sivujen-muuttaminen.md
[14]: pages/tekstieditorin-kaytto.md

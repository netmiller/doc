# Lomakkeen liittäminen valikkoon

Tarvittavat lomakkeet täytyy vielä liittää johonkin valikkoon, että ne saadaan mukaan sivustolle.
Automaattisesti ne eivät tule mukaan mihinkään valikkoon, vaan vaativat vielä tässä selostetut
toimenpiteet.

Normaalitilanteessa ne määritellään __Jäsentoimintojen__ alla olevaan __Lomakkeet__ valikkoon/laatikkoon.


<div class='msg msg-warn'>
Laajemmat muutokset Lomakkeisiin kannattaa neuvotella ja testata yhteistyössä Netmillerin kanssa
</div>

----

## 1. Valikoiden hallintanäkymä

Hallintanäkymä avataan joko ControlPanel:n kautta tai ylävalikon __Menus__ toimintojen kautta.

Ylävalikon kautta toiminnot avautuvat __Menus -> Manage__ .

<figure class="fig-n border" style="margin:0 0 20px 20px">
![1][]
</figure>


Tästä voidaan valita käsittelyyn __Lomakkeet__ valikko.

Teoriassa lomakkeet voi liittää mihin tahansa muuhunkin valikkoon, mutta varsinkin
jäsenkassoille tarkoitetut lomakkeet on hyvä koota yhteen paikkaan, joka on toistaiseksi 
__Lomakkeet__ laatikko Jäsensivujen oik.reunassa.

<figure class="fig-n" style="margin:0 0 20px 20px">
![2][]
</figure>



----

## 2. Valikon rivit

Olemassaolevia lomakkeita voi ylläpitää klikkaamalla ao.rivin otsikkoa (esim. __Lähetä kassan säännöt__)


<figure class="fig-n border" style="margin:0 0 20px 20px">
![4][]
<figcaption>Ruutumalli valikon riveistä</figcaption>
</figure>

Valikkoon voidaan tehdä myös uusia rivejä/lomakkeita __New__ toiminnolla.

__Rivien järjestystä__ voidaan myös tarvittaessa muuttaa.

* jokaisen rivin vas.reunassa näkyy pieni sarake (nuolet)
* tarttumalla rivin edessä olevaan merkkiin voidaan _"vetää"_  haluttu rivi ylös/alaspäin, jolloin se määrää myös sen missä järjestyksessä ne näkyvät Lomakkeet-laatikossa
* ts. rivejä voidaan siirtää alas tai ylöspäin hiirellä raahaamalla.

Tässä näkymässä voidaan myös __Status__ kentän avulla määritellä jotkut rivit __Unpublished__ tilaan, joka näkyy punaisena ruksina.

* sen etuna on että jos lomake ei ole juuri nyt aktiivinen, niin se saadaan piilotettua
* tarvittaessa ko.lomake voidaan muuttaa tarkoitukseen sopivaksi, ja ottaa käyttöön vaihtamalla __Status__ arvoa



----

## 3. Varsinaisen lomakkeen kytkeminen

Ylläpitoon avautuvassa ikkunassa voidaan valita varsinaisista __Lomakkeista__ joku joka halutaan liittään
tähän valikon riviin.

__Form__ alasvetovalikosta saadaan esiin kaikki määritellyt lomakkeet.

<figure class="fig-n border" style="margin:0 0 20px 20px">
![5][]
</figure>


## 4. Kokonaan uusi lomake

<div class='msg msg-warn'>
Kokonaan uudet lomakkeet voidaan tehdä Netmilerin kanssa yhdessä, jolloin sen määritykset on helpompi
sopia tapauskohtaisesti. Ja samalla testata testiympäristössä ensin kuntoon.
</div>



----


[1]: kuvat/kuva151.png "Ruutumalli"
[2]: kuvat/kuva216.png "Ruutumalli"
[4]: kuvat/kuva217.png "Ruutumalli"
[5]: kuvat/kuva218.png "Ruutumalli"
[99]: pages/mediatiedostot.md


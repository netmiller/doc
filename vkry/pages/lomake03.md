# Lomakkeen yleistiedot - Forms

Lomakkeiden perustiedoissa voidaan ylläpitää muita tähän lomakkeeseen liittyviä tietoja,
mutta varsinaisten kenttien ylläpidolle on oma kohtansa.

----

Ensimmäisenä on tärkeimmät lomakkeeseen liittyvät ohjaustiedot, ja sen ruutumalli on seuraavanlainen :


<figure class="fig" style="margin:0 0 0 20px">
![1][]
</figure>


* __Name__ ja __TopText__ voidaan laittaa kuvaamaan lomaketta yleisesti (tähän vaikuttaa myös Menu-valikon ohjaukset)

* __PreText__ on tärkeä asia, ja se näkyy lopullisen lomakkeen alussa (Otsikon alla)
* sillä voidaan ohjeistaa lähettäjälle lomakkeen tarkoitus ja käyttö tarkemmin
* PreText ohjauksessa voidaan käyttää myös HTML-ohjauskoodeja, joilla saadaan kappaleet ja rivinvaihdot mukaan alkutekstiin (esim. \<p\> ...... \</p\> pitää sisällään yhden kappaleen ja pekkkä \<br\> ohjaus tekee rivinvaihdon jne.)

* muiden ohjaustietojen käyttö on aika selkeä, ja __Template__ valinta kannattaa pitää oletusarvossa eli "__White Template 1__" joka sopii parhaiten www-sivuston yleisilmeeseen

* __Status__ tiedolla voidaan laittaa joku lomake esim. Unpublished-tilaan, vaikkakin tällä ei ole paljon merkitystä koska sama asia on parempi hoitaa varsinaisen __Menu__ valikon avulla (jossa lomakkeet kytketään oik.reunan valikkoon)

----

Toinen osio tällä ruudulla ohjaa mihin sähköpostiin lomake lähetetään :

<figure class="fig" style="margin:0 0 0 20px">
![2][]
</figure>


* tärkein ohjaus lienee __Email to__ johon voi antaa vastaanottajan sähköpostiosoitteen (normaalisti siihen tulee __info__-laatikon osoite)

* __Email Subject__ on hyvä myös antaa, ja siihen tulee sähköpostin otsikko jolla haluaa lomakkeen näkyvän tulevassa postissa

* muilla tiedoilla ei ole oleellista merkitystä, mutta niitä voi käyttää tarvittaessa

----

Kolmannessa osiossa ohjataan mitä tapahtuu kun jäsenkassa on lähettänyt lomakkeen onnistuneesti.

<figure class="fig" style="margin:0 0 0 20px">
![3][]
</figure>

* __Enable Redirect__ kannattaa yleensä olla päällä (yes)
* muuten lomake jää ruudulle näkyviin, mikä ei ole sinänsä väärin mutta käyttäjä saattaa epähuomiossa painaa uudelleen lähetys-toimintoa jolloin lomake tulee perille kahteen kertaan

* paras paikka siirtyä pois lomakkeelta (lähetyksen jälkeen) on ehkä "__Jäsenen etusivu__" joka voidaan valita tähän alasvetovalikosta

* __Redirect Delay__ vielä hidastaa uudelleenohjausta siten että siirtyminen tapahtuu annetun aiajn jälkeen
* Huom! aika on millisekunteja, jolloin arvo 5000 tarkoittaa 5 sek. ja esim. arvo 3000 taas 3 sekunnin jälkeen siirrytään uudelleenohjatulle sivulle
* tällä tavalla lomake on pienen hetken näkyvissä lähetyksen jälkeen, mutta sitten selain menee automaattisesti esim. Jäsenen etusivulle (mikäli valittuna)

----


????? jatko puuttuu vielä ?????



----

[1]: kuvat/kuva203.png
[2]: kuvat/kuva204.png
[3]: kuvat/kuva205.png
[4]: kuvat/kuva206.png

# Kuvien käsittely artikkeleissa

Kaikkiin artikkeleihin voidaan lisätä tarvittaessa kuvia.

Mutta koska kuvien käsittely HTML-pohjaisessa dokumentissa on hieman erilaista kuin tekstinkäsittelyssä,
niin sitä hieman käsitellään tässä.


## Kuvat serverille valmiiksi

Kuvat on ensin vietävä serverille, jolloin ne voidaan liittää mukaan artikkeliin.
Pelkkä "copy/paste" ei riitä kuten tekstinkäsittelyssä.

Kuvien viemisestä serverille on oma ohjeensa sivulla [Mediatiedostojen lisääminen][21].


## Kuvan lisääminen tekstieditorissa

Kuvia voi lisätä ruudun alareunassa olevasta __"Kuva"__ -painikkeesta.

<figure class="fig-n" style="margin:0 0 20px 0">
![1][]
</figure>


## Kuvan poiminta mediatiedostoista

Toiminto avaa ikkunan, jossa näytetään serverillä olevat kuvat, ja niistä voidaan valita tarvittava kuva mukaan.

Aluksi näytetään kaikki mediatiedostoissa olevat kansiot, joista kuvia voi etsiä.
Esimerkissä avataan kansio __kuvat__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
</figure>

<figure class="fig-n border" style="margin:0 0 20px 0">
![4][]
</figure>


Lisääminen menee seuraavasti:

__(1)__ valitaan haluttu kuva; esimerkissä "cookies.png"

__(2)__ valitun kuvan HTML-muotoinen URL-osoite ilmestyy alareunaan

__(3)__ tarvittaessa kuvan sijoitus jompaan kumpaan reunaan (oletus on vasen reuna)

<figure class="fig-n border" style="margin:0 0 20px 0">
![5][]
</figure>

__(4)__ ruudun oik. ylänurkassa on __"Lisää"__ toiminto, jolla kuva otetaan mukaan artikkeliin ja suljetaan tämä ikkuna.

"Peru" -toiminnolla voidaan keskeyttää.


<figure class="fig-n border" style="margin:0 0 20px 0">
![6][]
</figure>


Kuvan poimintaikkunassa on myös mahdollista tuoda uusi kuva palvelimelle, mikäli sitä ei ennestään siellä ole.

Idea on sama kuin ohjeessa jossa kuvat lisätään etukäteen serverille;
kts. sivulta [Mediatiedostojen lisääminen][21].


## Kuvan asetukset

Kuva sijoitetaan sille riville, jolla tekstieditorin kursori oli poimintaa aloitettaessa,
ja se viedään oletuksena vasempaan reunaan sivua.

Poiminnassa on kuitenkin valinta jolla se voidaan sijoittaa esim oikeaan reunaan, kts. mallissa kohta (3).



## Kuvan poistaminen

Kuva voidaan poistaa tekstieditorissa valitsemalla se aktiiviseksi ja painamalla "Del" -näppäintä.

Jos kuva halutaan vaihtaa, niin suoraviivaisin tapa on poistaa vanha kuva, ja lisätä samaan kohtaan uusi kuva.
Vaihtoehto on tehdä se kuvan lisäasetusten kautta.


## Kuvan asetusten muokkaaminen

Kuvalle voidaan tehdä myös hieman enemmän muotoilua, ja varsinkin pienentää kokoa tarvittaessa.

Se onnistuu niin että valitaan haluttu kuva aktiiviseksi, ja etsitään työkalupalkista pieni kuvake,
joka on merkattu oheisessa ruutukaappauksessa.

<figure class="fig-n border" style="margin:0 0 20px 0">
![7][]
<figcaption>Kuva49: ruutumalli työkalupalkista</figcaption>
</figure>

Jos kursori viedään kuvakkeen päälle, niin tekstinä pitäisi näkyä __"Lisää/muokkaa kuvaa"__.

Toiminnosta aukeaa ikkuna joka on seuraavannäköinen :

<figure class="fig-n border" style="margin:0 0 20px 0">
![8][]
<figcaption>Kuva50: ruutumalli kuvan muokkausikkunasta</figcaption>
</figure>


Ikkunassa on useita välilehtiä, joissa on useita kuvan ulkoasuun ja sijoitteluun vaikuttavia parametreja.
Kaikki liittyvät HTML-kielen määrityksiin, ja vaativat hieman sen tuntemusta jotta niiden asetuksilla
saa halutun lopputuloksen. Mutta kannattaa aina kokeilla.

Tässä on selitetty vain muutamia ehkä oleellisimpia asetuksia, joita saattaa tarvita :

__(a)__ Ensimmäisellä välilehdellä on tärkein asia kuvan URL-osoite ("Image URL").
Jos joku tarvittava kuva on jo valmiina serverillä, ja muistaa sen nimen, niin tässä voi vaihtaa suoraan
kuvan nimeksi toisen, jolloin säästyy siltä että ensin poistaa vanhan kuvan ja sitten lisää tarvittavan uutena.
Esimerkissä voisi URL-osoitteessa vaihtaa lopussa olevan "cookies.jpg" :n tilalle vaikka
"kuva-tapahtumasta-2012-01-05.png" mikäli semmoisen kuva on aiemmin ladattu serverille.

__(b)__ Kuvan kokoa voi muuttaa alkuperöiseen nähden; lähinnä järkevää on käyttää pienentämistä
jolloin se näyttää lopullisella sivulla usein sopivammalta. Jos tietää kuvan alkuperäisen koon (pikseleissä)
niin tässä voi helposti muuttaa sitä.

__(c)__ Kuvalle voisi myös asettaa reunaviivan (__Kehys__), jolle annetaan numeroarvo.
Se kuvaa reunaviivan paksuutta. Numero 1 on käytetyin arvo, eli 1 pikselin vahvuinen reunaviiva mustalla värillä,
joten kuva saattaa erottua paremmin ympäristöstään.


Kuvan asetusten muut välilehdet määrittävät pidemmälle vietyjä HTML-asetuksia,
ja HTML-kielen tunteminen on tarpeellista. Ym. asetukset ovat kuitenkin helposti muutettavissa,
ja kuvan ulkoasun saa yleensä näillä halutunlaiseksi.



[1]: kuvat/kuva32.png "Ruutumalli"
[3]: kuvat/kuva76.png "Ruutumalli"
[4]: kuvat/kuva77.png "Ruutumalli"
[5]: kuvat/kuva47.png "Ruutumalli"
[6]: kuvat/kuva48.png "Ruutumalli"
[7]: kuvat/kuva49.png "Ruutumalli"
[8]: kuvat/kuva50.png "Ruutumalli"
[21]: pages/mediatiedostot.md


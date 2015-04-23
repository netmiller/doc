# Kuvien käsittely artikkeleissa

Kaikkiin artikkeleihin voidaan lisätä tarvittaessa kuvia.

Mutta koska kuvien käsittely HTML-pohjaisessa dokumentissa on hieman erilaista kuin tekstinkäsittelyssä,
niin sitä hieman käsitellään tässä.


## 1. Kuvat serverille valmiiksi

Kuvat on ensin vietävä serverille, jolloin ne voidaan liittää mukaan artikkeliin.
Pelkkä "copy/paste" ei riitä kuten tekstinkäsittelyssä.

Kuvien viemisestä serverille on oma ohjeensa sivulla [Mediatiedostojen lisääminen][21].


## 2. Kuvan lisääminen tekstieditorissa

Kuvia voi lisätä ruudun alareunassa olevasta __"Image"__ -painikkeesta.

<figure class="fig-n" style="margin:0 0 20px 0">
![2][]
</figure>


## 3. Kuvan poiminta mediatiedostoista

Toiminto avaa ikkunan, jossa näytetään serverillä olevat kuvat, ja niistä voidaan valita tarvittava kuva mukaan.

Aluksi näytetään kaikki mediatiedostoissa olevat kansiot, joista kuvia voi etsiä.

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
</figure>

Esimerkissä avataan kansio __kuvat__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![4][]
</figure>


Lisääminen menee seuraavasti:

__(1)__ valitaan haluttu kuva; esimerkissä __"kuva26.png"__

__(2)__ valitun kuvan HTML-muotoinen URL-osoite ilmestyy alareunaan

__(3)__ tarvittaessa kuvan sijoitus jompaan kumpaan reunaan (oletus on vasen reuna). Esimerkissä siirretty kuva oikeaan reunaan.

<figure class="fig-n border" style="margin:0 0 20px 0">
![5][]
</figure>

__(4)__ ruudun oik. ylänurkassa on __"Insert"__ toiminto, jolla kuva otetaan mukaan artikkeliin ja suljetaan poimintaikkuna.

__"Cancel"__-toiminnolla voidaan keskeyttää.


<figure class="fig-n border" style="margin:0 0 20px 0">
![6][]
</figure>


Poimintaikkunassa on myös mahdollista tuoda uusi kuva palvelimelle, mikäli sitä ei ennestään siellä ole.
Poiminna alareunasta löytyy kohta __Image upload__.

Idea on sama kuin ohjeessa jossa kuvat lisätään etukäteen serverille;
kts. sivulta [Mediatiedostojen lisääminen][21].


## 4. Kuvan asetukset

Kuva sijoitetaan sille riville, jolla tekstieditorin kursori oli poimintaa aloitettaessa,
ja se viedään oletuksena sivun vasempaan reunaan.

Poiminnassa on kuitenkin valinta jolla se voidaan sijoittaa esim. oikeaan reunaan, kts. mallissa kohta (3).



## 5. Kuvan poistaminen

Kuva voidaan poistaa tekstieditorissa valitsemalla se aktiiviseksi ja painamalla "Del" -näppäintä.

Jos kuva halutaan vaihtaa, niin suoraviivaisin tapa on poistaa vanha kuva, ja lisätä samaan kohtaan uusi kuva.
Vaihtoehto on tehdä se kuvan lisäasetusten kautta.


## 6. Kuvan asetusten muokkaaminen

Kuvalle voidaan tehdä myös hieman enemmän muotoilua, ja varsinkin pienentää kokoa tarvittaessa.

Se onnistuu niin että valitaan haluttu kuva aktiiviseksi, ja etsitään työkalupalkista pieni kuvake,
joka on merkattu oheisessa ruutukaappauksessa.

Jos kursori viedään kuvakkeen päälle, niin tekstinä pitäisi näkyä __"Insert/edit image"__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![7][]
<figcaption>Kuva49: ruutumalli työkalupalkista</figcaption>
</figure>



Toiminnosta aukeaa ikkuna jossa on kaksi välilehteä, joista perusasetuksia voi muuttaa.

Kaikki liittyvät HTML-kielen määrityksiin, ja vaativat hieman sen tuntemusta jotta niiden asetuksilla
saa halutun lopputuloksen. Mutta kannattaa aina kokeilla.

<figure class="fig-n border" style="margin:0 0 20px 0">
![8][]
</figure>

<figure class="fig-n border" style="margin:0 0 20px 0">
![9][]
</figure>


Tässä on selitetty vain muutamia ehkä oleellisimpia asetuksia, joita saattaa tarvita :

__(a)__ Ensimmäisellä välilehdellä on tärkein asia kuvan URL-osoite ("Image URL").
Jos joku tarvittava kuva on jo valmiina serverillä, ja muistaa sen nimen, niin tässä voi vaihtaa suoraan
kuvan nimeksi toisen, jolloin säästyy siltä että ensin poistaa vanhan kuvan ja sitten lisää tarvittavan uutena.

__(b)__ Kuvan kokoa voi muuttaa alkuperöiseen nähden; lähinnä järkevää on käyttää pienentämistä
jolloin se näyttää lopullisella sivulla usein sopivammalta. Jos tietää kuvan alkuperäisen koon (pikseleissä)
niin tässä voi helposti muuttaa sitä.

__(c)__ Kuvalle voisi myös asettaa reunaviivan (__Kehys__), jolle annetaan numeroarvo.
Se kuvaa reunaviivan paksuutta. Numero 1 on käytetyin arvo, eli 1 pikselin vahvuinen reunaviiva mustalla värillä,
joten kuva saattaa erottua paremmin ympäristöstään.


Kuvan asetusten muut välilehdet määrittävät pidemmälle vietyjä HTML-asetuksia,
ja HTML-kielen tunteminen on tarpeellista. Ym. asetukset ovat kuitenkin helposti muutettavissa,
ja kuvan ulkoasun saa yleensä näillä halutunlaiseksi.




[2]: kuvat/kuva142.png "Ruutumalli"
[3]: kuvat/kuva144.png "Ruutumalli"
[4]: kuvat/kuva145.png "Ruutumalli"
[5]: kuvat/kuva146.png "Ruutumalli"
[6]: kuvat/kuva147.png "Ruutumalli"
[7]: kuvat/kuva148.png "Ruutumalli"
[8]: kuvat/kuva149.png "Ruutumalli"
[9]: kuvat/kuva150.png "Ruutumalli"
[21]: pages/mediatiedostot.md


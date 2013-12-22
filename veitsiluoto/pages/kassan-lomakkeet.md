# Kassan lomakkeiden ylläpitäminen

Kassan omat lomakkeet löytyvät __Valikoiden hallinta__ -ikkunasta, ja niiden
ylläpito menee seuraavasti. Valikoiden hallintanäkymän ohje löytyy [täältä][10].

## 1. Kassan lomakkeet

Kun "Kassan lomakkeet" avataan valikoiden hallintaikkunassa (klikkaamalla otsikkoa),
niin pitäisi avautua seuraavannäköinen ruutu :

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption>Ruutumalli "Kassan lomakkeet" valikosta</figcaption>
</figure>


## 2. Valikon järjestys

__"Järjestys"__ -sarakkeen avulla valikon sisäistä järjestystä voidaan tarvittaessa muuttaa.

Sarakkeessa olevien pienten nuolten avulla niitä voidaa siirtää alas tai ylöspäin,
tai kirjoittamalla numerojärjestys uudestaan ja painamalla sarakkeen otsikossa olevaa talletuskuvaketta.

Järjestystä muutettaessa on tärkeää tallettaa muutokset tuolla pienellä __talletuskuvakkeella__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
</figure>



## 3. Valikon rivien ylläpito

Näkymä sisältää kaikki kyseisen valikon rivit, ja jokaista päästään käsittelemään yksitellen.

Klikkaamalla Otsikko-sarakkeen kenttää päästään ruudulle jossa voidaan ylläpitää valikon riviä.

Esimerkkinä valikon kohta __Eläkeläisjäsenen ilmoitus__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Ruutumalli yhden lomakkeen ylläpidosta</figcaption>
</figure>

__(1)__ __Otsikko__ kenttää voidaan helposti muuttaa.

__(2)__ Lomakkeissa valitaan nimikkeen tyypiksi  __URL__

__(3)__  __haluttu PDF-tiedosto__ kytketään mukaan kirjoittamalla sen linkki ao.kenttään

* lomake tehdään etukäteen esim. tekstinkäsittelyohjelmalla, ja talletetaan PDF-muotoon omalle koneelle,
mutta joka sitten täytyy tuoda erikseen [Mediatiedostojen hallinnan][11] kautta serverille.

* Mediatiedostoissa se viedään selvyyden vuoksi lomakkeille varattuun kansioon.

* linkki muodostuu tekstistä __"/tiedostot/lomakkeet/pdf-tiedoston-nimi"__.

* nimessä alkuosa __/tiedostot__ on vakio, ja seuraava osa __/lomakkeet__ on sen kansion nimi jonne lomakkeet
 on viety. Ja loppuosa on tiedoston nimi; esimerkissä siis __"elakejatko.pdf"__.

Linkki kirjoitetaan suoraan kenttään (3), eikä sille ole Joomlassa poimintatoimintoa.

* jos ei toimi, niin kannattaa tarkistaa että linkki alkaa __kauttaviivalla__
ja kaikki nimet ja kansiot on kirjoitettu oikein.


````
Valikon muut yksityiskohtaisten määritykset tarvitsevat jonkin verran
Joomlan teknistä tuntemusta, ja muutosten osalta kannattaa ottaa
varmuuden vuoksi yhteyttä Netmilleriin.
````



## 4. Tallettaminen

Tiedot talletetaan oik.ylänurkassa olevilla toiminnoilla.

<figure class="fig-n border" style="margin:0 0 20px 0">
![5][]
</figure>

__Tallenna__

*   vie muutokset tietokantaan (ei sulje ruutua)

__Tallenna ja Sulje__

*   vie muutokset tietokantaan ja sulkee ruudun.

__Sulje__

*   sulkee ruudun ja jos ei ole erikseen tallennettu, niin hylkää muutokset

----

[1]: kuvat/kuva86.png "Ruutumalli"
[2]: kuvat/kuva70.png "Ruutumalli"
[3]: kuvat/kuva87.png "Ruutumalli"
[5]: kuvat/kuva56.png "Ruutumalli"
[10]: pages/valikot.md
[11]: pages/mediatiedostot.md

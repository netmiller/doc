# Muiden lomakkeiden ylläpitäminen

Muut lomakkeet löytyvät __Valikoiden hallinta__ -ikkunasta, ja niiden
ylläpito menee seuraavasti.

Valikoiden hallintanäkymän ohje löytyy [täältä][10].

Muiden lomakkeiden ylläpito on pääosin samanlaista kuin [Kassan lomakkeiden][12] ylläpito,
ero on lähinnä siinä miten __URL-osoite annetaan__.

## 1. Muut lomakkeet

Kun "Kassan lomakkeet" avataan valikoiden hallintaikkunaan, niin pitäisi avautua seuraavannäköinen ruutu :

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption>Ruutumalli "Muut lomakkeet" valikosta</figcaption>
</figure>



## 2. Valikon rivien järjestys

__"Järjestys"__ -sarakkeen avulla valikon sisäistä järjestystä voidaan tarvittaessa muuttaa.

Sarakkeessa olevien pienten nuolten avulla niitä voidaa siirtää alas tai ylöspäin.


<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
</figure>



## 3. Valikon rivien ylläpito

Näkymä sisältää kaikki kyseisen valikon rivit, ja jokaista päästään käsittelemään yksitellen.

Klikkaamalla Otsikko-sarakkeen kenttää päästään ruudulle jossa voidaan ylläpitää valikon riviä.

Esimerkkinä valikon kohta __KELA - sairauspäiväraha__.

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Ruutumalli yhden lomakkeen ylläpidosta</figcaption>
</figure>

__(1)__ __Otsikko__ kenttää voidaan helposti muuttaa

__(2)__ Lomakkeissa valitaan nimikkeen tyypiksi  __URL__

__(3)__  __Haluttu PDF-tiedosto__ kytketään mukaan kirjoittamalla sen URL-osoite __Linkki-kenttään__

* KELA:n lomakkeiden tapauksessa PDF-tiedostot on jo valmiina KELA:n serverillä, joten ne voidaan
linkata sieltä suoraan käyttöön kunhan vaan selvitetään tarkka URL-osoite.

* linkki kirjoittaan suoraan kenttään (3).

* tässä voidaan käyttää __"Copy/Paste"__ toimintoa jolla ko.linkki on ehkä helpointa ottaa
selaimesta talteen, ja liittää se tähän kenttään.

* esimerkissä tarkka URL-osoite on : </br> http://lomake.kansanelakelaitos.fi/kela/kela.fi/fi/tiedostot/21188/SV8_W.pdf

````
HUOM! ruudulla Linkki-kenttä on liian lyhyt pitkille osoitteille, mutta kyllä
se silti sinne mahtuu vaikka ruutu ei näytäkään kokonaan. Loppuosa jää piiloon.
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


[1]: kuvat/kuva157.png "Ruutumalli"
[2]: kuvat/kuva151.png "Ruutumalli"
[3]: kuvat/kuva158.png "Ruutumalli"
[5]: kuvat/kuva154.png "Ruutumalli"
[10]: pages/valikot.md
[11]: pages/mediatiedostot.md
[12]: pages/kassan-lomakkeet.md

# Sopimuspaikkojen ylläpito

Sopimuspaikat kattaa tällä hetkellä apteekit, lääkäriasemat, hoitolaitokset, yms.

* luettelo sopimusapteekeista on koottu yhdeksi sivuksi, jossa tietoja voidaan ylläpitää taulukkomuodossa.
* toiselle sivulle on koottu sopimuksen tehneet lääkäriasemat ja hoitolaitokset.
Myös hammaslääkäriasemat on tässä luettelossa.

## Artikkelien hallintanäkymä

Molemmat sivut löytyvät Artikkelien hallinta -näkymän kautta, ja sieltä ne voidaan ottaa ylläpidettäviksi.

Kts. kuvaruutumallin kohta (1).

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption>Ruutumalli artikkelien hallintaruudusta (sopimuspaikat)</figcaption>
</figure>

## Luettelon ylläpito

Sivu avataan ylläpitoon otsikkoa klikkaamalla.

Siitä avautuu ruutu joka näyttää suurin piirtein seuraavanlaiselta :

<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
<figcaption>Ruutumalli artikkelien hallintaruudusta (sopimuspaikat)</figcaption>
</figure>


Sivun yläreunassa on muutaman rivin alue, joka on merkattu __"ÄLÄ POISTA TÄTÄ OSAA..."__.

Se pitää sisällään muutaman HTML-määrityksen, jonka avulla saadaan lopulliselle sivulle kaunis
"seepraraidoitus" eli joka toinen rivi on hieman tummemmalla. Se parantaa listan luettavuutta.

Muuten sivun tietoja voidaan vapaasti muokata sopivaksi.

## Taulukon ylläpito

Sopimuspaikkojen luettelo on editorin taulukkomuodossa, joka on aika pitkälti samanlainen kuin
esim. tekstinkäsittelyohjelmissa tehtävät taulukot.

Taulukossa rivejä voidaan muokata ottamalla kursorilla halutun solun tiedot,
ja muuttamalla/lisäämällä/poistamalla siitä tekstiä.

Taulukkoon voidaan lisätä rivejä hiiren oikealla painikeella.

Eli mennään halutun rivin kohdalle ja painetaan hiiren ns. "väärää nappulaa".
Slloin pitäisi avautua pieni toimintoikkuna, jossa voidaan taulukkoa käsitellä.

Alla esimerkki jossa on "Itäkeskuksen apteekin" kohdalla painettu hiiren väärää nappulaa,
ja valittu sen jälkeen toiminto "Rivi", jonka jälkeen vielä toiminto "Lisää rivi jälkeen".

Eli tässä tapauksessa lisättäisiin tyhjä rivi Itäkeskuksen apteekin jälkeen, ja sille riville voisi
sitten lisätä uuden apteekin tiedot.


<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Ruutumalli taulukon editoimisesta</figcaption>
</figure>

Rivin poisto menee samalla periaatteella, mutta nyt valitaan "Poista rivi" toiminto.

Muita toimintoja ei yleensä tarvi käyttää kuin rivin lisäyksiä ja poistoja.
Osoitemuutokset tehdään suoraan korjaamalla haluttua solua.


## Taulukon ulkoasu

Taulukon ulkoasu määräytyy sivuston omien CSS-asetusten avulla, joten ylläpidossa keskitytään
vain että tiedot ovat oikein.

Sarakkeiden leveyden tai korkeuden säätöjä ei tarvi tehdä.

Jos osoite on pitkä, niin se saattaa jakautua kahdelle riville, mutta sen annetaan mennä sitten niin.

Jos osoite on kovin pitkä niin lopullisella sivullakin se voi jakautua, mutta sille ei mahda mitään,
koska sivulla on leveyssuunnassa vain rajallinen tila käytössä.

----

[1]: kuvat/kuva78.png "Ruutumalli"
[2]: kuvat/kuva79.png "Ruutumalli"
[3]: kuvat/kuva80.png "Ruutumalli"
[10]: pages/tekstieditorin-kaytto.md

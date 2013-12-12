# KELA:n lomakkeiden linkit

ABB:n __"Lomakkeet"-sivuilla__ on käytetty suoraa linkkiä, jolloin käytössä olevat
__KELA:n pdf-lomakkeet__ linkataan suoraan KELA:n sivuilta käyttöön.

Siten käyttäjän ei tarvitse itse etsiä niitä KELA:n sivustolta, vaan tulevat suoraan tätä kautta.

## Linkkien vaihtaminen

Linkit voidaan muuttaa jos KELA vaihtaa esim. niiden nimeä tai jos ne muuttuvat jollain muulla tavalla.

Mahdollisesti muuttuneet KELA:n lomakkeiden linkit täytyy ensin käydä tarkistamassa suoraan
KELA:n sivuilta, ja ottaa URL-osoite sieltä talteen (esim. copy/paste -toiminnoilla) tai vaikka kirjoittaa itse.

Muutos onnistuu tekstieditorissa, mutta on hieman hankalampi tehdä kuin  muut asiat, joten
siitä on tässä hieman tarkennuksia.

## Linkit tekstieditorissa

Tekstieditorissa linkit eivät näy suoraan, vaan niiden URL-osoite löytyy seuraavasti.

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
<figcaption>Ruutumalli lomakkeen tekstieditorista</figcaption>
</figure>

* __(1)__ klikataan vaikka sana "pdf-lomake" aktiiviseksi

* __(2)__ nyt pitäisi muuttua editorin työkalurivillä kaksi työkalua hieman eri värisiksi, joka
ilmaisee että sanan takana olevaa linkkiä voidaan ylläpitää

* työkaluista oik.puolella oleva "katkennut linkki" näköinen toiminto poistaa koko linkin,
mutta vas.puolella oleva toiminto avaa linkin ylläpitotilaan (oma ikkuna)

## Linkin ylläpitoikkuna

Yllä oleva toiminto avaa oman ikkunan tekstiedorin päälle, ja siinä voidaan muuttaa linkin
ominaisuuksia; myös URL-osoitetta.

<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
<figcaption>Ruutumalli linkin ylläpitoikkunasta</figcaption>
</figure>

Kentässä __"Linkin URL"__ voidaan nyt vaihtaa suoraan oikea linkkiosoite, tai esim. muuttaa lopussa olevaa nimeä
mikäli KELA sattuu vaihtamaan sitä tai on joku muu syy muuttaa se toiseksi.

Ruudun alareunassa oleva __"Päivitä"__ nappula korjaa nyt linkin paikalleen, ja kun lopuksi talletetaan koko
dokumentti, niin se pitäisi tulla voimaan sivustolle heti.


## Korjaaminen suoraan HTML-tekstiin

Hyvin suoraviivainen tapa korjata muuttunut linkki, on editoida se suoraan HTML-tekstiin (ns. raakamuodossa).

Se onnistuu siten että kun ollaan tekstieditorin ikkunassa, niin valitaankin ruudun alareunasta
toiminto __"Vaihda editorin tilaa"__. Tästä on hieman tietoa sivulla [Tekstiedorin käyttäminen][10].

Nyt pitäisi ruudulle tulla pelkkä HTML-muotoinen data, josta kyllä löytyy varsin helposti
linkin URL-osoite. Kuvamalli esimerkkinä.

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
<figcaption>Ruutumalli HTML-editoinnista</figcaption>
</figure>

Nyt nähdään tekstissä linkki joka on esim.

````
 href="http://lomake.kansanelakelaitos.fi/kela/kela.fi/fi/tiedostot/21664/SV127_W.pdf
````

Korjaamalla tuon linkin osoitetta, ja painamalla oik.ylänurkassa __"Tallenna"__ painiketta,
saadaan URL-osoite muutettua hyvin suoraviivaisellaa tavalla.

Kirjoitusasussa on oltava tarkkana, koska HTML-syntaksi vaatii sen juuri oikein eikä melkein oikein.


----

[1]: kuvat/kuva71.png "Ruutumalli"
[2]: kuvat/kuva72.png "Ruutumalli"
[3]: kuvat/kuva73.png "Ruutumalli HTML-muotoisesta editoinnista"
[10]: pages/tekstieditorin-kaytto.md




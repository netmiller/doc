# Lomakkeen kentät - Fields

Jokaiseen lomakkeeseen voidaan määritellä riittävä määrä kenttiä, ja nimetä ne tarkoitukseen sopivaksi.

Lisäksi kentille voi määritellä tarkemman tietotyypin, mitä kenttään voidaan tallettaa (tekstiä,numeroita,sähköpostiosoite tms.).

----

__Kenttien ylläpitoon__ on montakin reittiä mistä sinne pääsee, mutta tietyn lomakkeen kentät aukeavat ainakin
__Forms__ näkymästä kohdasta __Manage Fields__.

Kts. ruutumalli ohessa.


<figure class="fig-n border" style="margin:0 0 0 20px">
![1][]
</figure>

Myös lomakkeen ylläpitoruudulta pääsee kenttiin linkistä: __go to fieds page__ .

----

__Kenttien ylläpidon__ päänäkymä on seuraavan kuvamallin mukainen :

<figure class="fig-n border" style="margin:0 0 0 20px">
![2][]
</figure>


Ruudulla on paljon toimintoja ja mahdollisuuksia, mutta seuraavassa käydään yleisimmät toimenpiteet läpi.

----

Uusia kenttiä lisätään yläreunan valikosta __New__ (vihreä toimintonappula).

Kenttä voidaan valitsemalla ko.kenttä (ruksataan) ja painamalla yläreuna valikosta __Delete__.

Yksittäisen kentän editointiin/ylläpitoon pääsee painamalla kentän nimeä (=linkki); esim. __Vapaamuotoinen viesti__.

----

Yksittäisen kentän ylläpito : ruutumalli

<figure class="fig-n border" style="margin:0 0 0 20px">
![3][]
</figure>


* __Name__ on lomakkeella näkyvä syöttökentän nimi/kuvaus

* __Tooltip Text__ näkyy pienessä apuikkunassa kun mennään syöttämään ao.kenttään tietoja
* tähän kannattaa laittaa pieni ohje (tarvittaessa)

* __Form__ voidaan yleensä antaa olla oletuksena, mikäli tähän näyttöön on tultu Forms-näkymän kautta (vrt. sivun alussa oleva ohje)

* __Field Type__ voidaan valita syöttökentän tietotyyppi
* vaihtoehtoja on aika paljon, mutta yleisimmin käytössä on seuraavat :
	* __Text Input__  - normaali yhden rivin vapaamuotoinen tekstikenttä
	* __Text Area__ - vastaava mutta antaa kirjoittaa useita rivejä
	* __Number__ kenttä on yhden rivin syöttökenttä jolle kelpaa vain numeerinen arvo
	* __E-mail__ kenttään kelpaa vain sähköpostiosoitteen mukainen tieto (tarkistaa vain syntaksin)
	* __checkbox__ antaa ruksausvalinnan (kyllä/ei)
	* __radio__ valinnalla annetaan useita vaihtoehtoja, joista on valittava vain yksi
	* __File Upload__ antaa mahdollisuuden ottaa mukaan liitetiedosto (voidaan käyttää ainakin kassan sääntöjen yhteydessä jolloin jäsenkassa saa liitettyä säännöt esim. pdf-tiedostona mukaan)
* muitakin valintoja on mahdollista käyttää, ja niitä voi kokeilemalla katsoa sopivatko tarkoitukseen; esim. __DatePicker__ antaa poimia päivämäärän kalenteri-ikkunasta

* __Columns Wrapping__ on yleensä oletusarvossa : Both Columns

* __Required__ on oletuksena __Yes__, eli kenttä on pakollinen, mutta sen voi laittaa arvoon __No__ mikäli vapaaehtoinen tieto tällä lomakkeella

* __Status__ kentän avulla voidaan ottaa väliaikaisesti pois joitain kenttiä lomakkeelta, mikäli ne halutaan säilyttää mahdollista tulevaa tarvetta varten
* kentän voi toki poistaa __Delete__ toiminnolla, mutta myös __Status = Unpublished__ ohjaus jättää tämän kentän pois lopulliselta lomakkeelta

----


__Ylävalikon toiminnoilla__ voidaan tallettaa kentän tiedot 

<figure class="fig-n" style="margin:0 0 0 20px">
![4][]
</figure>


* __Save__ tallettaa muutokset mutta jättää ruudun auki/ennalleen
* __Save & Close__ tallettaa ja sulkee ruudun ja palaa kenttien yleisnäkymään (lista)
* __Save & New__ tallettaa tiedot ja avaa tyhjän ruudun jolla voidaan syöttää kokonaan uusi kenttä
* __Save as Copy__ on hyödyllinen toiminto, jolla voidaan kopioida joku kenttä pohjaksi uudelle kentälle (uutta kenttää voidaan sitten ylläpitää itsenäisesti)
* __Close__ sulkee ruudun eikä talleta muutoksia (mikäli jotain muutettu)


----

[1]: kuvat/kuva210.png
[2]: kuvat/kuva211.png
[3]: kuvat/kuva212.png
[4]: kuvat/kuva213.png


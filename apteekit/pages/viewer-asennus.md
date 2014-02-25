# MS Office Viewer-ohjelmien asentaminen

<div class='paivitys'>
sivu päivitetty 20.2.2014 - esa.laitila@netmiller.fi
</div>


__Microsoftin Viewer-ohjelmien__ asentamiseen täytyy hakea kolme asennuspakettia.

Ne löytyvät myös Microsoftin sivuilta, mutta olen ottanut ne Netmillerin omalle
palvelimelle, josta ne löytyvät helpommin. Linkkien takana on myös uusimmat versiot,
jotka yleensä toimivat parhaiten.

## 1. Asennusohjelmien lataus

Tarvittavat ohjelma kannattaa hakea itselle, ja laittaa esim. USB-tikulle, josta
ne on helppo asentaa halutuille koneille.

__Huom!__ tässä asennetaan vain __Word- ja Excel-katseluohjelmat__, ja PowerPoint
ohjelmaa ei ole otettu ohjeisiin, koska niitä on kuitenkin paljon vähemmän kuin em.

Tiedostot ovat :

1. [FileFormatConverters.exe][1]
1. [wordview_en-us.exe][2]
1. [ExcelViewer.exe][3]

ja ne voidaan ladata ylläolevista linkeistä ensin omalle koneelle.


## 2. Asentaminen

<div class='msg msg-warn'>
Asennuksessa kannattaa laittaa listan ensimmäinen paketti ennen kahta muuta.
</div>

Sen nimi on __FileFormatConverters.exe__, ja muut ohjelmat käyttävät sitä apuna
muunnettaessa Office-formaattien eri variaatioita esitettävään muotoon.

Muut kaksi paketti (__wordview_en-us.exe__  ja __ExcelViewer.exe__) asennetaan sen jälkeen.


## 3. Asennuksen kulku

Yleensä asennus voidaan tehdä hyväksymällä oletukset ja klikkaamalla ne eteenpäin.

Jos niihin tarvitaan jotain poikkeavaa räätälöintiä, niin ne on katsottava tapauskohtaisesti, ja
kannattaa ottaa tarvittaessa yhteyttä vaikka [Netmilleriin][5].


Ja yleensä helpointa on siirtää edellä ladatut kolme tiedostoa USB-tikulle, josta ne
voidaan asentaa kaikille tarvittaville muille koneille. Mutta mikä tahansa tapa käy,
pääasia että asennusohjelma saadaan käynnistymään sillä koneella johon ne tulevat.


## 4. Asennuksen vaiheet

Seuraavassa muutamia ruutukuvia asennuksen vaiheista (Windows 7 englanninkielinen).

#### vaihe 1 (FileFormatConverters.exe)

<figure class="fig-n border" style="margin:10px">
![10][]
</figure>

Tässä täytyy vaan ruksata vas.alanurkassa oleva ruksi päälle (hyväksyminen).

----

<figure class="fig-n border" style="margin:10px">
![11][]
</figure>

Asennus menee nopeasti eikä kysele muuta, ja ilmoittaa kun se on valmis.

----

#### vaihe 2 (wordview_en-us.exe)

<figure class="fig-n border" style="margin:10px">
![12][]
</figure>

Tässäkin ainoa toimenpide on ruksata vas.alanurkassa ruksi päälle (hyväksyminen)

----

<figure class="fig-n border" style="margin:10px">
![13][]
</figure>

Tässä vaiheessa tulee vielä toinenkin kysymys joka täytyy hyväksyä (ruksi).

----

<figure class="fig-n border" style="margin:10px">
![14][]
</figure>

Asennus kysyy vielä asennushakemistoa, johon voi laittaa oletuksen ,
ellei nimenomaan halua sitä eri paikkaan.

__Install__ painikkeella aloitetaan asennus.

----

<figure class="fig-n border" style="margin:10px">
![15][]
</figure>

Asennus ilmoittaa kun on valmis. Menee yleensä nopeasti läpi.

----

#### vaihe 3 (ExcelViewer.exe)

<figure class="fig-n border" style="margin:10px">
![17][]
</figure>

Ruksataan vas.alanurkassa ruksi päälle (hyväksyminen)

----

<figure class="fig-n border" style="margin:10px">
![18][]
</figure>

Asennus kysyy vielä asennushakemistoa, johon voi laittaa oletuksen
ellei nimenomaan halua sitä eri paikkaan.

----

<figure class="fig-n border" style="margin:10px">
![19][]
</figure>

Asennus kysyy vielä asennushakemistoa, johon voi laittaa oletuksen
ellei nimenomaan halua sitä eri paikkaan.


## 5. Oletusohjelmat kuntoon

Varsinaisen asennuksen jälkeen kannattaa käydä tarkistamassa
__oletusohjelmien määritykset__.

Usein asennus tekee nuo määritykset itse, mutta ei aina ja joskus ne jäävät
puutteellisiksi, joten turvallisinta on käydä itse varmistamassa ne kuntoon.

Ohje löytyy sivulta [Oletusohjelmien määrittäminen][20].

----



[1]: http://fingolfin.netmiller.fi/ms-viewers/FileFormatConverters.exe
[2]: http://fingolfin.netmiller.fi/ms-viewers/wordview_en-us.exe
[3]: http://fingolfin.netmiller.fi/ms-viewers/ExcelViewer.exe
[5]: http://www.netmiller.fi
[10]: kuvat/screenshot-2014-02-20-at-20-43-41.png
[11]: kuvat/screenshot-2014-02-20-at-20-44-01.png
[12]: kuvat/screenshot-2014-02-20-at-20-54-19.png
[13]: kuvat/screenshot-2014-02-20-at-21-24-17.png
[14]: kuvat/screenshot-2014-02-20-at-21-24-34.png
[15]: kuvat/screenshot-2014-02-20-at-20-55-20.png
[17]: kuvat/screenshot-2014-02-20-at-20-53-03.png
[18]: kuvat/screenshot-2014-02-20-at-20-53-19.png
[19]: kuvat/screenshot-2014-02-20-at-20-53-36.png
[20]: pages/viewer-oletukset.md


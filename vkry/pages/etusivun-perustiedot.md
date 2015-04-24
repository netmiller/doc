# Etusivun tekstien ylläpitäminen


Etusivulla on muutama tekstilaatikko, joiden sisältöä voidaan ylläpitää kuten muitakin osioita.

Niiden muutos tapahtuu kuitenkin hieman eri paikasta, joten tässä hieman ohjeistusta siihen.


## 1. Moduulien hallinta (Module Manager)

Näiden tietojen ylläpitäminen tehdään __Module Manager::n__ avulla.

Se avataan joko Control Panel:n kautta tai ylävalikosta __Extensions -> ModuleManager__ :

<figure class="fig-n border" style="margin:0 0 20px 0">
![1][]
</figure>

Toiminto avaan näkymän jossa on paljon erilaisia Joomlan moduuleita,
ja osa niistä on vain teknisessä toteutuksessa tarvittavia, eikä niiden ylläpitoon ole tarvetta.

Seuraavat kohdat kuitenkin liittyvät sisältöön, ja ovat ylläpidettävissä.



## 2. Muutettavat moduulit

<figure class="fig-n border" style="margin:0 0 20px 0">
![2][]
</figure>


__(1) vakuutuskassat-etusivun-kuva__

*   sisältää etusivulla alussa vas.puolella olevan (ison) kuvan


__(2) vakuutuskassat-yleista__

*   tämä moduuli näyttää etusivun alussa kuvan oik.puolella olevan tekstilaatikon.

__(3) organisaatio_ja_sijainti__

*	sisältää tekstit joka muodostaa etusivun alhaalla vasemmalla olevat laatikot
*	organisaatio + sijainti
*	tämä moduuli näyttää etusivulla olevan linkin esittelyvideoon

__(4) 03_etusivun-katko__

*   tekee pienen varjostetun väliviivan etusivulle (kuvan ja alkutekstin jälkeen)

__(5) yhteystiedot-01__

*   sisältää tekstin joka tulee kaikkien sivujen alareunaan (sarake 1 - OSOITETIEDOT)

__(6) yhteystiedot-02__

*   sisältää tekstin joka tulee kaikkien sivujen alareunaan (sarake 2 - HALLITUKSEN PUHEENJOHTAJA)

__(7) yhteystiedot-03__

*	sisältää tekstin joka tulee kaikkien sivujen alareunaan (sarake 3 - TOIMINNANJOHTAJA)

__(8) Ajankohtaista__

*   moduli joka hakee __etusivulle__ 10 uusinta tiedotetta (public)

__(9) Jäsenen toiminnot__

*   moduli joka tekee __jäsensivuston valikon__ 
*   näkyy jäsensivustolla ruudun oik.reunassa

__(10) Uusimmat__

*   moduli joka hakee __jäsensivustolla__ ruudun oik.reunassa näkyvän laatikon __Uusimmat__
*   sisältää tuoreimmat muuttuneet sivut jäsensivustolla

__(11) footer__

*   sisältää tekstin joka näytetään jokaisen sivun alareunassa
*   sis. jonkun lauseen tekijänoikeuksien suojaamisesta tai muuta yleistä



## 3. Moduulien sisältö

Kaikki moduulit avataan valitsemalla nimi-tieto.

Muutosten tekeminen noudattaa samoja ohjeita jotka löytyy sivulta [Tekstieditorin käyttäminen][10].

Osa näistä moduleista on sellaisia jotka kannattaa sopia Netmillerin kanssa yhdessä, ja mahdollisesti testata
ennen käyttöönottoa.




[1]: kuvat/kuva157.png "Ruutumalli"
[2]: kuvat/kuva158.png "Ruutumalli"
[10]: pages/tekstieditorin-kaytto.md



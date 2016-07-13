# Valikoiden ylläpitäminen

Sivustolla olevat valikot on myös muutettavissa.

Valikoiden rakenne ja toiminnot vaikuttavat kuitenkin oleellisesti moneen muhunkin, joten sen kanssa
on oltava tarkempana, ja mielellään kokeiltava ensin yhteistyössä Netmillerin kanssa.

Tekstien vaihtaminen on kuitenkin helppoa tätä kautta, joten sen ohjeistukseen keskitytään tällä sivulla.

<div class='msg msg-warn'>
Laajemmat muutokset valikoihin kannattaa tehdä yhteistyössä Netmillerin kanssa,
koska valikkoihin vaikuttaa hyvin moni asia, myös sellaiset joita ei aina
Joomlan admin-näkymässä ole mahdollista ylläpitää (esim. CSS-asetukset ym)
</div>


----

## 1. Valikoiden hallintanäkymä

Hallintanäkymä avataan joko ControlPanel:n kautta tai ylävalikon __Menus__ toimintojen kautta.

Ylävalikon kautta toiminnot avautuvat __Menus -> Manage__ .

<figure class="fig-n border" style="margin:0 0 20px 20px">
![1][]
</figure>


Tällä hetkellä käytössä on useita valikoita, joista muutama on lähinnä tekninen apu, ja tarvitaan
Joomlan omien toimintojen takia.

Varsinaiset sivustolla näkyvät valikot on nimetty :

* __Sivuston ylävalikko:__ sisältää ruudun yläreunan toiminnot, jotka näkyvät kaikille (Public)
* __Jäsentoiminnot:__ sisältää kaikki jäsenkassoille (Registered) näkyvät toiminnot (oik.reuna)
* __Lomakkeet:__ sisältää jäsenkassoille (Registered) näkyvät lomakkeet (oik.reuna)

Teknisen toiminnan avustukseen on mukana pari valikkoa, joissa ei kuitenkaan ole tarvetta muutoksiin :

* __Hidden__ (sisältää lähinnä kirjautumiseen tarvittavia toimintoja)
* __Main Menu__ (Joomla-ohjelmiston sisäinen käyttö)

----


## 2. Valikot (Menus)

<figure class="fig-n border" style="margin:0 0 20px 0">
![3][]
</figure>

Haluttu valikko avataan ylläpitoa varten __Menus__ näkymästä klikkaamalla __Title__ sarakkeen nimeä (=linkki).

Se avaa esiin ko.valikon varsinaiset toiminnot ylläpitoa varten

----

## 3. Valikkojen ylläpito

Valikon yksittäiset rivit (__Menu Items__) sisältävät tarvittavat toiminnot joilla avataan haluttu
toiminto, ja samalla se tuo esiin ko.toimintoon liittyvän ruudun tai lisävalikon tms.

Valikkojen tarkempi toiminnallisuus liittyy kiinteästi Joomlan sisäiseen rakenteeseen, ja muutokset 
valikoihin kannattaa sopia Netmillerin kanssa, niin samalla ne voidaan testata esim. testiympäristössä.


<figure class="fig-n border" style="margin:0 0 20px 20px">
![4][]
<figcaption>Ruutumalli valikon riveistä</figcaption>
</figure>


Valikon tekstejä ja järjestystä voidaan kuitenkin muuttaa turvallisesti; se ei vaikuta muuhun toiminnallisuuteen.

Esimerkkikuvassa (__Jäsentoiminnot__) saadaan jokainen kohta auki ylläpitoon klikkaamalla riviä __Title__ sarakkeessa,
ja avautuvassa ruudussa voidaan vaikkapa __Title__ vaihtaa halutuksi, jolloin ulospäin näkyvät tekstit saadaan
muutettua.

Myös __järjestystä__ voidaan vaihtaa tarvittaessa muuttaa.

Vas.oleva pieni sarake (nuolet) antaa vaihtaa keskinäistä järjestystä pienten nuolten avulla,
ts. rivejä voidaan siirtää alas tai ylöspäin hiirellä raahaamalla.





[1]: kuvat/kuva151.png "Ruutumalli"
[3]: kuvat/kuva153.png "Ruutumalli"
[4]: kuvat/kuva154.png "Ruutumalli"
[5]: kuvat/kuva55.png "Ruutumalli"
[6]: kuvat/kuva56.png "Ruutumalli"
[21]: pages/mediatiedostot.md

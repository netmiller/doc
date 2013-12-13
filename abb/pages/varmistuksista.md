# Varmistukset

## Sisällön varmistaminen

Joomla-ohjelmistossa kaikki sisältö löytyy tietokannasta __(MySQL-tietokanta)__.

Tietokanta varmistetaan www-palvelun toimesta niin että levyrikon tai muun vastaavan
varalta tiedot voidaan aina palauttaa takaisin.


## Ulkoasu ja layout

Sivuston layout ja muut ulkoasuun liittyvät elementit on varmistettu Netmillerin
toimesta.

Siinä on käytössä __Git-versionhallintaohjelmisto__, joka hajauttaa tiedot usealle
eri palvelimelle, jolloin ko.tiedot on aina löydettävissä joltain koneelta.

Keskitettynä paikkana toimii tällä hetkellä [Atlassian BitBucket-palvelu][1],
jonne tiedoille on avattu __Private repository__ eli suojattu hakemisto jota pääsee hyödyntämään
vain tarvitavat henkilöt (Tällä hetkellä Netmiller ainoastaan).


[1]: https://bitbucket.org

# vl-popover
![GitHub issues](https://img.shields.io/github/issues-raw/milieuinfo/webcomponent-vl-ui-popover) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/milieuinfo/webcomponent-vl-ui-popover) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/milieuinfo/webcomponent-vl-ui-popover)
Een popover is een nieuw, meestal kleiner venster dat verschijnt bovenop andere content op het scherm. Gebruik een popover om bijkomende informatie aan de gebruiker te geven of om de gebruiker om interactie te vragen. Een popover kan gesloten worden door buiten het popover venster te klikken, of op hetzelfde icoon dat de popover opende.

## Installatie
```
npm install --save vl-ui-popover
```

## API
De [API](https://webcomponenten.omgeving.vlaanderen.be/doc/Vlpopover.html) bevat een overzicht van de ondersteunde attributen en een beschrijving van de beschikbare functies.

## Demo
De [demo](https://webcomponenten.omgeving.vlaanderen.be/demo/vl-popover.html) pagina bevat een overzicht van de mogelijkheden met code voorbeelden. Lokaal opstarten kan met onderstaand [NPM](https://www.npmjs.com) script.
```
npm run demo
```

## Testen
De webcomponent bevat verschillende unit testen die bij elke commit geautomatiseerd in Chrome en Firefox draaien. Hierdoor kunnen we bij elke release een minimum aan kwaliteit garanderen. Later zullen er ook nog UI testen toegevoegd worden zodat al de functionaliteit uitgebreid getest wordt.

De testen kunnen lokaal opgestart worden met onderstaand [NPM](https://www.npmjs.com) script.
```
npm run test
```

## Issues
Indien je nood hebt aan extra feature of een bug gevonden hebt, mag je hiervoor een issue aanmaken. Er zijn 3 issues templates beschikbaar:
1. Feature request
2. Bug
3. Task

Uiteraard is het ook toegelaten om mee te ontwikkelen door gebruik te maken van Pull Requests (PR). Gelieve volgende conventies te respecteren:
1. Bug issue best linken aan een branch met een test die het probleem illustreert zodat de bug opgelost kan worden
2. Elke commit die betrekking heeft tot een issue moet een verwijzing hiernaar hebben vb. #33 fix uitlijning header
3. Elke PR moet een issue verwijzing hebben, zodat deze automatisch opgenomen kan worden in de release notes

## Versionering
We gebruiken [Semantic Versioning](https://semver.org) en voorzien elke release van release notes, zie een overzicht van de [releases](https://github.com/milieuinfo/webcomponent-vl-ui-popover/releases).

## Browser ondersteuning
De webcomponenten zijn ontwikkeld door uitsluitend gebruik te maken van web standaarden (JavaScript, HTML, CSS). Hierdoor worden al de evergreen browser automatisch ondersteund.

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)
| --- | --- | --- | --- | --- |
| <center>Chrome</center> | <center>Firefox</center> | <center>Safari</center> | <center>Opera</center> | <center>Edge</center> |

## Credits
Zie de lijst van [ontwikkelaars](https://github.com/milieuinfo/webcomponent-vl-ui-popover/graphs/contributors) die meegewerkt hebben aan de webcomponent.

## Contact
Heb je suggesties, opmerkingen of tips? Voel je dan vrij om ons te contacteren via help@omgevingvlaanderen.be.

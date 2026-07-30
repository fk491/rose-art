# frances-rose-art.de — statische Kopie / static copy

Vollständige, eigenständige Kopie der ehemaligen Jimdo-Website
(erstellt am 2026-07-28 von der Live-Site www.frances-rose-art.de,
nachdem der Jimdo-Vertrag gekündigt wurde).

## Veröffentlichen / Deploy

Den kompletten Ordnerinhalt (alle `*/index.html`, `index.html`, `assets/`)
per FTP/SFTP in das Webroot-Verzeichnis des neuen Webspace laden — fertig.
Es gibt keinerlei Server-Anforderungen: kein PHP, keine Datenbank, kein Build.
Alle Links sind relativ, die Seite funktioniert auch in einem Unterordner.

Lokal testen: `python3 -m http.server 8123` im Projektordner,
dann http://127.0.0.1:8123 öffnen.

## Was gegenüber Jimdo geändert wurde

- Jimdo-Renderer-JavaScript, Tracking (`at.prod.jimdo.systems`) und
  Cookie-Banner entfernt. Die Seite setzt keine Cookies mehr.
- Alle Bilder (132), CSS, Schriften (Raleway, Roboto) und Icon-SVGs liegen
  lokal unter `assets/`. Pro Bild wurde die größte von Jimdo ausgelieferte
  Auflösung übernommen.
- Desktop-Navigation + Social-Icons (von Jimdo per JS erzeugt) sind fest ins
  HTML eingebaut; `assets/js/site.js` ergänzt Burger-Menü (mobil) und
  YouTube-Klick-zum-Laden (Videos laden erst nach Klick, via
  youtube-nocookie.com).
- Cloudflare-E-Mail-Verschleierung dekodiert (Impressum/Datenschutz zeigen
  wieder die echte Adresse als mailto-Link).
- Ein Bild auf der Ausstellungen-Seite war schon auf der Live-Site defekt
  (404 bei Jimdo); es ist durch einen transparenten Platzhalter ersetzt.

## Hinweise

- Die Seite `cookie-einstellungen/` ist funktionslos (es gibt keine Cookies
  mehr); Datenschutz-Text erwähnt noch Jimdo/Cloudflare — ggf. anpassen.
- YouTube-Videos benötigen Internet und laden von youtube-nocookie.com,
  aber erst nach Klick auf „Zustimmen & anzeigen".

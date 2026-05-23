# CS2 Major Tippspiel Web-App

Lokaler Prototyp fuer ein privates CS2 Major Tippspiel im Swiss-Simulator-Stil.

## Lokal starten

```powershell
C:\Users\malte\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe server.mjs
```

Dann im Browser oeffnen:

```text
http://localhost:4173
```

## Aktueller Stand

- Stage 1, Stage 2 und Stage 3 als Swiss-Board
- Spieler- und Admin-Modus
- Admin kann Team A, Team B, Gewinner und Ergebnis setzen
- Spieler tippen Gewinner und Ergebnis
- 3:0- und 0:3-Bonus pro Stage
- Leaderboard und Punkteberechnung
- Speicherung aktuell im Browser per LocalStorage

## Wichtig fuer das Teilen mit Freunden

Diese Version ist ein lokaler Prototyp. Damit mehrere Freunde ueber einen Link gemeinsam tippen koennen, braucht die App als naechsten Schritt:

- Hosting, z. B. Vercel
- gemeinsame Datenbank, z. B. Supabase
- einfache Spieler-/Admin-Identifikation

Die Oberflaeche und das Datenmodell sind so vorbereitet, dass LocalStorage spaeter durch Supabase ersetzt werden kann.

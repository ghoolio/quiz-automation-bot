# quiz-automation-bot

## Beschreibung
Dieses Projekt demonstriert die Automatisierung von Online-Quizzen mittels Webautomatisierung. Es verwendet Puppeteer für die Browser-Steuerung und integriert Google Sheets zur Verwaltung von Benutzerdaten. Dies ist ein Beispielprojekt, das die Fähigkeiten und Techniken zeigt, die in ähnlichen realen Projekten eingesetzt werden können.

## Funktionen
- Automatisiertes Ein- und Ausloggen für mehrere Benutzerkonten
- Automatisches Ausfüllen von Online-Quizzen
- Integration mit Google Sheets zur Benutzerdatenverwaltung
- Behandlung verschiedener Fragetypen (Multiple Choice, Texteingabe, Drag & Drop)
- Robuste Fehlerbehandlung und Wiederholungsmechanismen
- Handhabung von Cookie-Zustimmung und Browser-Zoom

## Verwendete Technologien
- Node.js
- Puppeteer und Puppeteer-extra für Webautomatisierung
- Google Sheets API für Datenmanagement
- Dotenv für Umgebungsvariablen-Management

## Einrichtung
1. Repository klonen
2. In das Projektverzeichnis wechseln
3. Abhängigkeiten installieren
`npm i`
4. Umgebungsvariablen einrichten
Erstellen Sie eine `.env`-Datei im Hauptverzeichnis und fügen Sie hinzu:
`GOOGLE_SHEET_ID=Ihre_Google_Sheet_ID`
5. Google Sheets API-Anmeldeinformationen einrichten
Platzieren Sie Ihre `credentials.json` im Projektverzeichnis

## Verwendung
Starten Sie das Skript mit:
`npm start`

Das Skript wird:
1. Benutzerdaten aus dem angegebenen Google Sheet lesen
2. Sich für jeden Benutzer einloggen
3. Das Quiz automatisch ausfüllen
4. Sich ausloggen und zum nächsten Benutzer übergehen

## Projektstruktur
- `index.js`: Hauptskript zur Orchestrierung des Automatisierungsprozesses
- `quizAutomation.js`: Enthält Logik zum Ausfüllen verschiedener Quizfragen
- `utils.js`: Hilfsfunktionen für häufige Aufgaben

## Herausforderungen und Lösungen
- **Herausforderung**: Umgang mit verschiedenen Fragetypen
  **Lösung**: Implementierung spezifischer Handler für jeden Fragetyp

- **Herausforderung**: Verwaltung mehrerer Benutzersitzungen
  **Lösung**: Entwicklung eines Systems zur sequenziellen Verarbeitung von Benutzern aus Google Sheets

- **Herausforderung**: Robuste Automatisierung
  **Lösung**: Verwendung von Puppeteer-extra und Stealth-Plugin für zuverlässigere Automatisierung

## Zukünftige Verbesserungen
- Unterstützung für zusätzliche Quizplattformen
- Implementierung von Multi-Threading für parallele Verarbeitung
- Erweiterung der Berichterstattungsfunktionen

## Mitwirken
Beiträge, Probleme und Feature-Anfragen sind willkommen. Schauen Sie gerne auf der [Issues-Seite](https://github.com/ghoolio/quiz-automation-bot/issues) vorbei, wenn Sie beitragen möchten.

## Lizenz
[MIT](https://choosealicense.com/licenses/mit/)

## Kontakt
ghoolio - ghoolio@abcdy.de

Projekt-Link: [https://github.com/ghoolio/quiz-automation-bot](https://github.com/IhrBenutzername/quiz-automation-bot)

## Haftungsausschluss
Dieses Projekt dient nur zu Demonstrationszwecken und sollte nicht für tatsächliche Quizmanipulationen oder andere unethische Zwecke verwendet werden. Es zeigt lediglich Techniken der Webautomatisierung und API-Integration.

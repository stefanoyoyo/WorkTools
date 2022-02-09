Questo progetto serve aisegnare automaticamente
la documentazione delle colonne di una tabella
le cui colonne sono descritte dal json che la
dovrebbe mappare.

Un esmepio di json potrebbe essere il seguente:
#region esempio di json
[
{
"field": "DatetimeStart",
"header": "REPORT.EVENTS.DATESTART",
"type": 4,
"style": {
"justify-content": "center"
},
"properties": {
"width": "250px",
"format_date": "L",
"format_time": "LTS",
"hasSeconds": true,
"hasTime": true
}
},
{
"field": "DatetimeEnd",
"header": "REPORT.EVENTS.DATEEND",
"type": 4,
"style": {
"justify-content": "center"
},
"properties": {
"width": "250px",
"format_date": "L",
"format_time": "LTS",
"hasSeconds": true,
"hasTime": true
}
},
{
"field": "Duration",
"header": "REPORT.EVENTS.DURATION",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px",
"selectables": [],
"translate_selectables": false
}
},
{
"field": "StationCode",
"header": "REPORT.EVENTS.STATIONID",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "250px",
"selectables": [],
"translate_selectables": false
}
},
{
"field": "isCorrelated",
"header": "REPORT.EVENTS.CORRELATED.TITLE",
"type": 6,
"style": {
"justify-content": "center"
},
"properties": {
"width": "180px"
}
},
{
"field": "AirportCode",
"header": "REPORT.EVENTS.AIRPORTID",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "Duration",
"header": "REPORT.EVENTS.DURATION",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "210px"
}
},
{
"field": "DayPeriod",
"header": "REPORT.EVENTS.DAY_PERIOD.TITLE",
"type": 5,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "300px",
"colorbyvalue": [
"rgba(255,145,0,1)",
"rgba(61,176,136,1)",
"rgba(0,154,217,1)"
],
"values": [
0,
1,
10
],
"i18n": "REPORT.EVENTS.DAY_PERIOD."
}
},
{
"field": "DatetimePeak",
"header": "REPORT.EVENTS.DATEPEAK",
"type": 4,
"style": {
"justify-content": "center"
},
"properties": {
"width": "250px",
"format_date": "L",
"format_time": "LTS",
"hasSeconds": true,
"hasTime": true
}
},
{
"field": "Pnltmax",
"header": "REPORT.EVENTS.PNLMAX",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "200px",
"minFractionDigits": 1,
"maxFractionDigits": 1
}
},
{
"field": "Lmax",
"header": "REPORT.EVENTS.LAFMAX",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "200px",
"minFractionDigits": 1,
"maxFractionDigits": 1
}
},
{
"field": "Leq",
"header": "REPORT.EVENTS.LEQ",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "200px",
"minFractionDigits": 1,
"maxFractionDigits": 1
}
},
{
"field": "Sel",
"header": "REPORT.EVENTS.SEL",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "200px",
"minFractionDigits": 1,
"maxFractionDigits": 1
}
},
{
"field": "Epnl",
"header": "REPORT.EVENTS.EPNL",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "200px",
"minFractionDigits": 1,
"maxFractionDigits": 1
}
},
{
"field": "Validity",
"header": "REPORT.EVENTS.VALIDITY",
"type": 6,
"style": {
"justify-content": "center"
},
"properties": {
"width": "150px"
}
},
{
"field": "FlightIcao",
"header": "REPORT.EVENTS.ICAO",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "FlightIata",
"header": "REPORT.EVENTS.IATA",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "FlightDate",
"header": "REPORT.EVENTS.FLIGHT.DATE",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "AircraftIcao",
"header": "REPORT.EVENTS.AIRCRAFT.ICAO",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "AircraftIata",
"header": "REPORT.EVENTS.AIRCRAFT.IATA",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "RunwayId",
"header": "REPORT.EVENTS.RUNWAY",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "OperationType",
"header": "REPORT.EVENTS.FLIGHT.OPERATION.TITLE",
"type": 5,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px",
"colorbyvalue": [
"rgba(255,145,0,1)",
"rgba(61,176,136,1)",
"rgba(0,154,217,1)"
],
"values": [
0,
1,
2,
10
],
"i18n": "REPORT.EVENTS.FLIGHT.OPERATION."
}
},
{
"field": "DestOrigin",
"header": "REPORT.EVENTS.DEST_ORIGIN",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "150px"
}
},
{
"field": "Temperature",
"header": "REPORT.EVENTS.TEMPERATURE",
"type": 0,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "190px"
}
},
{
"field": "Humidity",
"header": "REPORT.EVENTS.HUMIDITY",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "170px"
}
},
{
"field": "WindSpeed",
"header": "WIND.SPEED",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "170px"
}
},
{
"field": "WindDirection",
"header": "WIND.DIRECTION",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "170px"
}
},
{
"field": "Pressure",
"header": "PRESSURE",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "170px"
}
},
{
"field": "Rain",
"header": "REPORT.EVENTS.RAIN",
"type": 1,
"style": {
"justify-content": "flex-end"
},
"properties": {
"width": "170px"
}
}
]

#endregion esempio di json

09-02-2022
Al momento questa app permette di:

- costruire una tabella descrittiva con nome colonna da descrivere e descrizione associata. Ogni riga della tabella è uno degli oggetti che compone l'array del json specificato. La descrizione risiede nel campo "meta".
- spostare gli campi di ogni oggetto del json specificando il path dell'oggetto da spostare ed il path di destinazione
- eliminare un campo di tutti gli oggetti specificandone il path. 
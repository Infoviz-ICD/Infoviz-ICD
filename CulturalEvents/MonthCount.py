import sparql_dataframe

from SPARQLWrapper import SPARQLWrapper, JSON
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

endpoint = 'https://dati.cultura.gov.it/sparql'

query_2020="""SELECT DISTINCT (?s) (month(xsd:dateTime(?starttime)) as ?StartMonth) (month(xsd:dateTime(?endtime)) as ?EndMonth)WHERE {
 ?s a cis:CulturalEvent;
rdfs:label ?event.
?s tiapit:atTime ?time.
?time tiapit:startTime ?starttime;
tiapit:endTime ?endtime.

FILTER (year(xsd:dateTime(?starttime))=2020)
FILTER (year(xsd:dateTime(?endtime))=2020)

}"""

df_2020 =  sparql_dataframe.get(endpoint, query_2020)


EventCountPerMonth = {}

for idx, row in df_2020.iterrows():
    if row["StartMonth"] == row["EndMonth"]:
        if row["StartMonth"] not in EventCountPerMonth:
            EventCountPerMonth[row["StartMonth"]] = 1
        else:
            EventCountPerMonth[row["StartMonth"]] += 1
    elif row["StartMonth"] < row["EndMonth"]:
        if row["StartMonth"] not in EventCountPerMonth:
            EventCountPerMonth[row["StartMonth"]] = 1
        else:
            EventCountPerMonth[row["StartMonth"]] += 1
        OtherYears = int(row["EndMonth"]) - int(row["StartMonth"])
        year = int(row["StartMonth"]) + 1
        for i in range(OtherYears):
            if year not in EventCountPerMonth:
                EventCountPerMonth[year] = 1
            else:
                EventCountPerMonth[year] += 1
            year += 1
    else:         
        if row["StartMonth"] not in EventCountPerMonth:
            EventCountPerMonth[row["StartMonth"]] = 1
        else:
            EventCountPerMonth[row["StartMonth"]] += 1
        if row["EndMonth"] not in EventCountPerMonth:
            EventCountPerMonth[row["EndMonth"]] = 1
        else:
            EventCountPerMonth[row["EndMonth"]] += 1
EventCountPerMonth
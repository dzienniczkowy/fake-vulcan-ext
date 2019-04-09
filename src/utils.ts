export const endpoints = [
    "Diety.mvc/Get",
    "EgzaminySemestralne.mvc/Get",
    "EgzaminyZewnetrzne.mvc/Get",
    "EwidencjaObecnosci.mvc/Get",
    "FormularzeSzablony.mvc/Get",
    "FormularzeSzablonyDownload.mvc/Get",
    "FormularzeWysylanie.mvc/Get",
    "FormularzeWysylanie.mvc/Post",
    "Frekwencja.mvc/Get",
    "FrekwencjaStatystyki.mvc/Get",
    "FrekwencjaStatystykiPrzedmioty.mvc/Get",
    "Jadlospis.mvc/Get",
    "LekcjeZrealizowane.mvc/GetPrzedmioty",
    "LekcjeZrealizowane.mvc/GetZrealizowane",
    "Oceny.mvc/Get",
    "OkresyUmowOplat.mvc/Get",
    "Oplaty.mvc/Get",
    "PlanZajec.mvc/Get",
    "Pomoc.mvc/Get",
    "RejestracjaUrzadzeniaToken.mvc/Get",
    "RejestracjaUrzadzeniaToken.mvc/Delete",
    "RejestracjaUrzadzeniaTokenCertyfikat.mvc/Get",
    "Sprawdziany.mvc/Get",
    "Statystyki.mvc/GetOcenyCzastkowe",
    "Statystyki.mvc/GetOcenyRoczne",
    "Statystyki.mvc/GetPunkty",
    "SzkolaINauczyciele.mvc/Get",
    "Uczen.mvc/Get",
    "UczenCache.mvc/Get",
    "UczenDziennik.mvc/Get",
    "Usprawiedliwienia.mvc/Post",
    "UwagiIOsiagniecia.mvc/Get",
    "ZadaniaDomowe.mvc/Get",
    "ZarejestrowaneUrzadzenia.mvc/Get",
    "ZarejestrowaneUrzadzenia.mvc/Delete",
    "ZgloszoneNieobecnosci.mvc/Get",
    "ZgloszoneNieobecnosci.mvc/Post"
];

export function decodeResponse(input: BufferSource) {
    return (new TextDecoder("utf-8")).decode(input, {stream: true});
}

export function encodeResponse(input: string) {
    return (new TextEncoder()).encode(input);
}

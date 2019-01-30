'use strict';

function DataLoader (apiKey, databaseUrl) {
    const apiUrl = 'https://api.mongolab.com/api/1/';
    const MACROSES = 'macroses', EVENTS = 'events';

    const buildEventsUrl = () => `${apiUrl}${databaseUrl}${EVENTS}?apiKey=${apiKey}`;
    const buildMacrosesUrl = () => `${apiUrl}${databaseUrl}${MACROSES}?apiKey=${apiKey}`;

    return {
        getMacroses: () => {

        },
        addMacros: (macros) => {
            return fetch(buildEventsUrl(), {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(macros)
            })
                .then(response => response.json());
        },
        removeMacros: () => {

        },
        getEvents: () => {
            return fetch(buildEventsUrl())
                .then(response => response.json());
        },
        addEvent: (event) => {
            return fetch(buildEventsUrl(), {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(event)
            })
                .then(response => response.json());
        },
        removeEvent: () => {

        },
    }
}
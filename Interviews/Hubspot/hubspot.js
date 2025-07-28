const dayjs = require('dayjs');
// import dayjs from "dayjs";

// const DATASET_API = "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=USER_KEY";
// const RESULT_API = "https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=USER_KEY";

const DATASET_API = {
    "partners": [
        {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "country": "USA",
            "availableDates": [
                "2024-12-01",
                "2024-12-02",
                "2024-12-03",
                "2024-12-04",
                "2024-12-05"
            ]
        },
        {
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com",
            "country": "USA",
            "availableDates": [
                "2024-12-01",
                "2024-12-02",
                "2024-12-03"
            ]
        },
        {
            "firstName": "Carlos",
            "lastName": "Garcia",
            "email": "carlos.garcia@example.com",
            "country": "Mexico",
            "availableDates": [
                "2024-12-05",
                "2024-12-06",
                "2024-12-07"
            ]
        },
        {
            "firstName": "Emily",
            "lastName": "Davis",
            "email": "emily.davis@example.com",
            "country": "Mexico",
            "availableDates": [
                "2024-12-06",
                "2024-12-07",
                "2024-12-08"
            ]
        }
    ]
}

// Helper function to find the ideal start date and attendees for a country
const findIdealStartDate = (country, partners) => {
    console.log("**** country partner", country, partners)
    const partnersByDate = {};
    let maxAttendees = 0;
    let bestStartDate = null;

    // Process each partner's available dates
    partners.forEach((partner) => {
        console.log("**** partner", partner)

        const { availableDates } = partner;

        // Identify consecutive dates
        for (let i = 0; i < availableDates.length - 1; i++) {
            const date = availableDates[i];
            const nextDate = availableDates[i + 1];

            if (dayjs(nextDate).isSame(dayjs(date).add(1, 'day'))) {
                // Add the start date to the map
                partnersByDate[date] = partnersByDate[date] || [];
                partnersByDate[date].push(partner.email);
                console.log("****partnersByDate", partnersByDate)

                // Update the maximum attendee count and best start date
                if (partnersByDate[date].length > maxAttendees) {
                    maxAttendees = partnersByDate[date].length;
                    bestStartDate = date;
                }
            }
        }
    });

    // Return the result for the country
    return {
        name: country,
        attendeeCount: maxAttendees,
        attendees: partnersByDate[bestStartDate] || [],
        startDate: bestStartDate,
    };
};

(async () => {
    try {
        // Fetch the dataset
        // const response = await fetch(DATASET_API);
        // const data = await response.json();
        const data = DATASET_API

        // Group partners by country
        const partnersByCountry = data.partners.reduce((grouped, partner) => {
            const { country } = partner;
            grouped[country] = grouped[country] || [];
            grouped[country].push(partner);
            return grouped;
        }, {});

        console.log("*****partnersByCountry", partnersByCountry)

        // Find the ideal start date for each country
        const results = Object.entries(partnersByCountry).map(([country, partners]) =>
            findIdealStartDate(country, partners)
        );
        console.log("****", results)

        // Submit the results
        // const resultResponse = await fetch(RESULT_API, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ countries: results }),
        // });

        // const resultData = await resultResponse.json();
        // console.log("Result submitted successfully:", resultData);
    } catch (error) {
        console.error("Error:", error);
    }
})();



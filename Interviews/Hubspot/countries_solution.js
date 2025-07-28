const dayjs = require('dayjs')
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
            "firstName": "Hebs",
            "lastName": "Sam",
            "email": "Heb.sam@example.com",
            "country": "USA",
            "availableDates": [
                "2024-12-01",
                "2024-12-02"
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

const groupCountries = () => {
    const countries = DATASET_API.partners.reduce((countryGroup, partner) => {
        const { country } = partner
        countryGroup[country] = countryGroup[country] || []
        countryGroup[country].push(partner)
        return countryGroup
    }, {})
    return countries
}

const findBestStartDate = () => {
    const countries = groupCountries()
    // console.log(countries)
    let output = []
    //loop each country
    // console.log(Object.entries(countries))
    // [
    //     ['USA', [[Object], [Object], [Object]]],
    //     ['Mexico', [[Object], [Object]]]
    // ]
    for (country in countries) {
        const partnerSchedule = {}
        let highestAttendees = 0
        let bestDate = ''
        countries[country].forEach(partners => {
            const { availableDates, email } = partners
            for (let i = 0; i < availableDates.length; i++) {
                const currentDate = availableDates[i]
                const nextDate = dayjs(availableDates[i]).add(1, 'day')
                if (dayjs(nextDate).isSame(availableDates[i + 1])) {
                    partnerSchedule[currentDate] = partnerSchedule[currentDate] || []
                    partnerSchedule[currentDate].push(email)
                    if (partnerSchedule[currentDate].length > highestAttendees) {
                        highestAttendees = partnerSchedule[currentDate].length
                        bestDate = currentDate
                    }
                }
            }
            // console.log("***partnerSchedule", partnerSchedule)
        });
        const countryPartnerDetails = {
            "attendeeCount": highestAttendees,
            "attendees": partnerSchedule[bestDate],
            "name": country,
            "startDate": bestDate
        }
        output.push(countryPartnerDetails)
    }
    // console.log("****output", output)
}
findBestStartDate()
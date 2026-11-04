chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "PERSONAL") {
        const personal = message.personal

        const iframe = window.top.document.getElementById("icims_content_iframe").contentDocument

        iframe.getElementById("PersonProfileFields.Login").value = personal.username
        iframe.getElementById("PersonProfileFields.Password").value = personal.password
        iframe.getElementById("PersonProfileFields.Password_Confirm").value = personal.password

        iframe.getElementById("PersonProfileFields.FirstName").value = "Grayson"
        iframe.getElementById("PersonProfileFields.LastName").value = "Domoleczny"
        iframe.getElementById("rcf2039").value = "Grayson"
        iframe.getElementById("PersonProfileFields.Email").value = "gdomoleczny3@gmail.com"
        
        iframe.getElementById("1101415_PersonProfileFields.PhoneType").value = 15145
        iframe.getElementById("1101415_PersonProfileFields.PhoneNumber").value = "2242687918"

        iframe.getElementById("result-selectable_rcf3553_1").click()

        iframe.getElementById("939774_PersonProfileFields.AddressType").value = 15149
        iframe.getElementById("939774_PersonProfileFields.AddressStreet1").value = personal.address1
        iframe.getElementById("939774_PersonProfileFields.AddressStreet2").value = personal.address2
        iframe.getElementById("939774_PersonProfileFields.AddressCity").value = personal.city
        iframe.getElementById("939774_PersonProfileFields.AddressZip").value = personal.zipcode
        iframe.getElementById("result-selectable_939774_PersonProfileFields.AddressCountry_0").click()
        setTimeout(() => {
            iframe.getElementById("result-selectable_939774_PersonProfileFields.AddressState_16").click()
        }, 1000)

        iframe.getElementById("rcf3048").value = "Job Board"
        iframe.getElementById("rcf3048").dispatchEvent(new Event("change", { bubbles: true }))
        iframe.getElementById("rcf3049").value = 'LinkedIn'

        iframe.getElementById("3033753_PersonProfileFields.rcf3212").value = "Reyes Holdings"
        iframe.getElementById("result-selectable_3033753_PersonProfileFields.rcf3217_16").click()
        iframe.getElementById("3033753_PersonProfileFields.rcf3213").value = "Enterprise Applications Developer Intern"
        iframe.getElementById("3033753_PersonProfileFields.rcf3214_Month").value = '06'
        iframe.getElementById("3033753_PersonProfileFields.rcf3214_Date").value = '1'
        iframe.getElementById("3033753_PersonProfileFields.rcf3214_Year").value = '2026'
        iframe.getElementById("3033753_PersonProfileFields.rcf3215_Month").value = '07'
        iframe.getElementById("3033753_PersonProfileFields.rcf3215_Date").value = '31'
        iframe.getElementById("3033753_PersonProfileFields.rcf3215_Year").value = '2026'
        iframe.getElementById("3033753_PersonProfileFields.rcf3219").value = `- Developed a Python-based MVC application using FastAPI and SQLAlchemy to retrieve, transform, and store driver, vehicle, route, and site data from both XRS and Omnitracs OT1 systems in SQL databases for migration validation.
- Built integrations with XRS SOAP/XML services and OT1 REST/JSON APIs, using API token authentication for OT1 and creating SQL tables and queries to organize and compare data between the two systems.
- Standardized inconsistent data formats and mapped fields between XRS and OT1, researching field relationships and consulting coworkers when equivalent fields were unclear; created placeholder fields for data without current equivalents to support future migration requirements.
- Developed a repeatable validation process to compare data between XRS and OT1 and verify that information was transferred accurately and consistently during the migration.
- Independently downloaded and analyzed 497 Microsoft Orchestrator runbooks using AI-assisted tools, creating an executive overview document to support planning for the migration of on-premises systems to the cloud.`
        iframe.getElementById("3033753_PersonProfileFields.rcf3268").value = 'Internship Completed.'

        setTimeout(() => {
            iframe.getElementById("cp_form_submit_i").click()
        }, 1500)
    }
})
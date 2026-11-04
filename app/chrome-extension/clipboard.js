document.getElementById("emailToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("gdomoleczny3@gmail.com")
})

document.getElementById("majorToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("Information Technology")
})

document.getElementById("linkedinToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("https://www.linkedin.com/in/grayson-domoleczny-8a4456351")
})

document.getElementById("githubToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("https://github.com/GraysonDomoleczny")
})

document.getElementById("lewisDescToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("Bachelor of Science (BS) in Computer and Information Technology. Current 4.0 GPA with coursework focused on programming, databases, networking, cybersecurity, and information technology.")
})

document.getElementById("codDescToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("Associate of Applied Science (AAS) in Computer Information Technology, graduated Magna Cum Laude. Completed coursework and technical training in networking, cybersecurity, Linux, Windows administration, programming, and systems troubleshooting.")
})

document.getElementById("reyesAddressToClipboard").addEventListener("click", async () => { 
    await navigator.clipboard.writeText("6250 North River Road")
})

document.getElementById("reyesDescriptionToClipboard").addEventListener("click", async () => {
    await navigator.clipboard.writeText(`- Developed a Python-based MVC application using FastAPI and SQLAlchemy to retrieve, transform, and store driver, vehicle, route, and site data from both XRS and Omnitracs OT1 systems in SQL databases for migration validation.
- Built integrations with XRS SOAP/XML services and OT1 REST/JSON APIs, using API token authentication for OT1 and creating SQL tables and queries to organize and compare data between the two systems.
- Standardized inconsistent data formats and mapped fields between XRS and OT1, researching field relationships and consulting coworkers when equivalent fields were unclear; created placeholder fields for data without current equivalents to support future migration requirements.
- Developed a repeatable validation process to compare data between XRS and OT1 and verify that information was transferred accurately and consistently during the migration.
- Independently downloaded and analyzed 497 Microsoft Orchestrator runbooks using AI-assisted tools, creating an executive overview document to support planning for the migration of on-premises systems to the cloud.`);
});
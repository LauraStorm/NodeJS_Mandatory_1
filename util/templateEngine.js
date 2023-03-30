import fs from "fs";

// concat components and html pages
function renderPage (page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "My Notes");
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);
    return navbar + page + footer;
}

// find html page
function readPage (pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage
}

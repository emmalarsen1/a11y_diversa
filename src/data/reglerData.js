export const reglerData = [
  {
    id: "landmark-one-main",
    impact: "Moderat",
    tags: ["Blind", "Hørehæmmelse", "Mobilitet"],
    description: "Det er god praksis at sikre, at der kun er én hovedmærke, der kan navigere til primært indhold på siden, og at hvis siden indeholder iframe-elementer, skal hver af dem enten ikke indeholde nogen mærker eller kun et enkelt mærke.",
    why: "At navigere på en webside er langt enklere for skærmlæserbrugere, hvis alt indhold er opdelt i en eller flere høje niveauer af sektioner. Indhold uden for disse sektioner er svært at finde, og dets formål kan være uklart. HTML har historisk set manglet nogle centrale semantiske markører, såsom evnen til at angive sektioner af siden som header, navigation, hovedindhold og fodnote. Det anses for god praksis at bruge både HTML5-elementer og ARIA-landemærker i det samme element, men fremtiden vil foretrække HTML-regioner, når browserunderstøttelsen øges.",
  },

  {
    id: "region",
    impact: "Moderat",
    tags: ["Blind", "Hørehæmmelse", "Mobilitet"],
    description: "Det er god praksis at indeholde alt indhold undtagen skip links inden for klart definerede områder såsom header, nav, main og footer.",
    why: "At navigere på en webside er langt enklere for skærmlæserbrugere, hvis alt indhold er opdelt i en eller flere høje niveauer af sektioner. Indhold uden for disse sektioner er svært at finde, og dets formål kan være uklart. HTML har historisk set manglet nogle centrale semantiske markører, såsom evnen til at angive sektioner af siden som header, navigation, hovedindhold og fodnote. Det anses for god praksis at bruge både HTML5-elementer og ARIA-landemærker i det samme element, men fremtiden vil foretrække HTML-regioner, når browserunderstøttelsen øges.",
  },

  {
    id: "tabindex",
    impact: "Alvorlig",
    tags: ["Blind", "Hørehæmmelse", "Mobilitet"],
    description: "Et tabindex-attribut må aldrig have en værdi større end 0 for at forhindre en uventet tabulatorrækkefølge, der kan give indtryk af at springe visse elementer helt over.",
    why: "At bruge tabindex med en værdi større end 0 kan skabe lige så mange problemer, som det løser. Det skaber en uventet tabulatorrækkefølge, hvilket gør siden mindre intuitiv, og det kan få det til at se ud som om, visse elementer helt springes over.",
  },

  {
    id: "landmark-one-main",
    impact: "Moderat",
    tags: ["Blind", "Hørehæmmelse", "Mobilitet"],
    description: "Det er god praksis at sikre, at der kun er én hovedmærke, der kan navigere til primært indhold på siden, og at hvis siden indeholder iframe-elementer, skal hver af dem enten ikke indeholde nogen mærker eller kun et enkelt mærke.",
    why: "At navigere på en webside er langt enklere for skærmlæserbrugere, hvis alt indhold er opdelt i en eller flere høje niveauer af sektioner. Indhold uden for disse sektioner er svært at finde, og dets formål kan være uklart. HTML har historisk set manglet nogle centrale semantiske markører, såsom evnen til at angive sektioner af siden som header, navigation, hovedindhold og fodnote. Det anses for god praksis at bruge både HTML5-elementer og ARIA-landemærker i det samme element, men fremtiden vil foretrække HTML-regioner, når browserunderstøttelsen øges.",
  },
];

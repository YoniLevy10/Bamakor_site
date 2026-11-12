/* Quadra — brochure content.
   Media lives under /quadra/media:

   media/project/01.jpg … 07.jpg          homepage slides (same order as quadrajerusalem)
   media/location/01.jpg                  location page
   media/apartments/01.jpg … 06.jpg       apartments page
   media/gallery/01.jpg … 07.jpg          gallery
   media/contact/01.jpg                   contact page
   media/spec.pdf                         technical specification
   media/plans/catalog.jpg                plans cover
   media/plans/A/floor-garden.jpg         floor plan (also floor-1.jpg … floor-8.jpg)
   media/plans/A/unit-1.jpg               apartment plan (B, C, and D use the same pattern)
*/
window.QUADRA_CONTENT = {
  draft: false,
  phone: "+972 52 602 6437",
  phoneHref: "tel:+972526026437",
  email: "office@bamakor.com",
  address: {
    he: "רחוב מקור חיים 37, ירושלים 93465",
    en: "37 Mekor Chaim St., Jerusalem, Israel 93465",
    fr: "37, rue Mekor Chaim, Jérusalem, Israël 93465"
  },
  counts: {
    projectSlides: 7,
    construction: 0,
    apartmentPhotos: 6,
    gallery: 7
  },
  texts: {
    project: {
      he: "קחו את אחד המיקומים הטובים ביותר בירושלים, הוסיפו תכנון מדוקדק, עיצוב נפלא וקירבה לכל מה שהופך את ירושלים למיוחדת, ותקבלו את קוואדרה — פיוז'ן של מסורת ומודרניות. קוואדרה ממוקמת מעל פארק המסילה, התוואי המקורי של הרכבת לירושלים אשר הפך לפארק פסטורלי, במרחק הליכה מבתי ספר, בתי קפה, מסעדות, בתי כנסת ואווירה אורבנית פורחת.",
      en: "Take one of the best locations in Jerusalem, add meticulous planning, beautiful design and a closeness to everything that makes Jerusalem special and you have Quadra – a fusion of tradition and modernity. Quadra overlooks Mesila Park, a charmingly landscaped park which sits alongside the original route of the railroad track to Jerusalem. The four luxury buildings are in close proximity to schools, cafés, restaurants, synagogues and the thriving neighborhood of Baka.",
      fr: "Imaginez l’un des plus beaux sites de Jérusalem associé à une planification méticuleuse, une architecture moderne, un accès facile aux centres d’intérêt qui font la gloire de la ville éternelle – et découvrez Quadra, une rencontre merveilleuse entre tradition et modernité. Ce somptueux complexe résidentiel se situe le long du parc Messila qui abrite l’ancienne voie ferrée de Jérusalem, transformée en un magnifique parc paysager. Côtoyant à proximité écoles, cafés, restaurants et synagogues, Quadra vous offre un style de vie agréable et dynamique."
    },
    location: {
      he: "קוואדרה ממוקמת בסמוך לשכונת בקעה, אחת השכונות היוקרתיות ביותר בירושלים המשלבת חיי משפחה, פנאי ומקומות בילוי. הרחוב הפסטורלי בו היא ממוקמת נמצא בסמוך למושבה הגרמנית ורחוב עמק רפאים המציעים שפע של בתי קפה, מסעדות, מינימרקטים ועוד. הסביבה מבורכת בבתי כנסת, בתי ספר ופארקים ההופכים את החיים לעשירים ומהנים יותר.",
      en: "Quadra is located adjacent to Bak'a, one of the liveliest neighborhoods in Jerusalem, combining family life with various recreational venues. The quiet pastoral street is adjacent to the German Colony neighborhood and Emek Refa'im Street lined with cafes, restaurants, shops and minimarkets. The area also offers many synagogues, schools, parks and all the conveniences that make life more enjoyable.",
      fr: "Quadra profite d’un emplacement idéal à proximité du quartier animé de Bakaa et combine parfaitement vie de famille et activités de loisirs. Situé au cœur d’une rue paisible et verdoyante, le complexe est à quelques minutes du célèbre quartier de la Moshava Guermanit et de la rue Emek Refaïm, bordée de charmants cafés, restaurants, boutiques et épiceries. Vous y trouverez également des synagogues, des écoles et de nombreux parcs, ainsi que tous les services communautaires nécessaires."
    },
    apartments: {
      he: "מתחם קוואדרה, על מגרש בן 5,000 מ״ר, מציע 4 בניינים מיוחדים בני 8 קומות כל אחד, עם סך של 108 דירות. בפרויקט שפע דירות בגדלים ועיצובים שונים, החל מדירות גן מפוארות, דירות סטודיו, דירות המתאימות למשפחות בגדלים שונים, ועד פנטהאוזים מרווחים ודופלקסים מהודרים — כולם מעוצבים עד לפרט האחרון ומצוידים במותגים מהשורה הראשונה. לכל בניין כניסה פרטית ומאובטחת על מנת שהדיירים יוכלו ליהנות מתחושת שלווה ואינטימיות. בנוסף מציעה קוואדרה חניון תת־קרקעי פרטי, שטחים ציבוריים נרחבים ומעוצבים וגינה פרטית. קוואדרה הוא גם הפרויקט היחיד באזור המציע לדייריו בריכת שחייה פרטית וחדר כושר.",
      en: "Quadra is a fusion of 4 distinct buildings of 8 floors each and a total of 108 units built on a 5000 sqm plot in one of the most attractive neighborhoods. The project offers a wide range of different style apartments, from 2, 3, 4, 5 or 6 rooms to luxurious garden apartments, lavish penthouses and villa-units, all designed to perfection and equipped with the latest brand-name fixtures. Each building has a secured private entrance, to insure residents their utmost privacy. Quadra also offers private underground parking, expansive public spaces, and is the only residential project in this area to provide a private pool and gym for its tenants.",
      fr: "Quadra s’étend sur un terrain de 5000 m² et se compose de 108 appartements répartis sur 4 immeubles de 8 étages. Le complexe offre un large choix d’appartements de types et agencements variables. Pensés dans les moindres détails, tous les appartements bénéficient de prestations de haut standing. À chaque immeuble une entrée privée et sécurisée afin de garantir un cadre de vie intime et serein. Le complexe inclut un parking souterrain ainsi qu’un jardin de 1300 m² avec des aires de jeux pour enfants. Quadra est le seul projet dans le quartier avec une piscine privée et une salle de sport."
    }
  },
  /* Room counts follow the existing plans tree.
     A value like "4b" means 4 bedrooms rather than 4 rooms. */
  buildings: [
    {
      id: "A",
      floors: [
        ["garden", [6, 6, 5, 4]],
        ["1", [6, 5]],
        ["2", [6, 4, 5, 5]],
        ["3", [6, 4, 5, 5]],
        ["4", [6, 4, 5, 5]],
        ["5", [6, 4, 5, 5]],
        ["6", [6, 6]],
        ["7", [5, 5]],
        ["8", [5]]
      ]
    },
    {
      id: "B",
      floors: [
        ["garden", [6, 5, 5, "4b", 4, 5, 4]],
        ["2", [5, 5, 5, 4]],
        ["3", [5, 5, 5, 4]],
        ["4", [5, 5, 5, 4]],
        ["5", [5, 5, 5, 4]],
        ["6", [6, 6]],
        ["7", [4, 4]],
        ["8", [5]]
      ]
    },
    {
      id: "C",
      floors: [
        ["garden", [5, 5, 5, 6]],
        ["2", [4, 2, 5, 3]],
        ["3", [4, 2, 5, 3]],
        ["4", [4, 2, 5, 3]],
        ["5", [4, 2, 5, 3]],
        ["6", [5, 6]],
        ["7", [5, 5]],
        ["8", [4, 5]]
      ]
    },
    {
      id: "D",
      floors: [
        ["garden", [4, 6, 6, 5]],
        ["1", [4]],
        ["2", [4, 3, 4, 3]],
        ["3", [4, 3, 4, 3]],
        ["4", [4, 3, 4, 3]],
        ["5", [4, 3, 4, 3]],
        ["6", [5, 6]],
        ["7", [5, 5]],
        ["8", [4, 5]]
      ]
    }
  ]
};

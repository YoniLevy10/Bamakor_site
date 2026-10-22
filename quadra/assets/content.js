/* Quadra — site structure only.
   Replace the placeholder sentences in `texts` when the copy arrives.
   Drop files into /quadra/media using the names shown on each empty frame:

   media/project/01.jpg … 07.jpg          homepage slides
   media/construction/01.jpg … 29.jpg     construction-site pictures
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
  draft: true,
  phone: "+972 2 650 0556",
  phoneHref: "tel:+97226500556",
  email: "office@quadrajerusalem.co.il",
  address: {
    he: "רחוב מקור חיים 37, ירושלים 93465",
    en: "37 Mekor Chaim St., Jerusalem, Israel 93465",
    fr: "37, rue Mekor Chaim, Jérusalem, Israël 93465"
  },
  counts: {
    projectSlides: 7,
    construction: 29,
    apartmentPhotos: 6,
    gallery: 7
  },
  texts: {
    project: {
      he: "כאן ייכנס טקסט הפרויקט: המיקום, התכנון והאופי של קוואדרה.",
      en: "The project description goes here: Quadra's location, planning, and character.",
      fr: "La description du projet viendra ici : l'emplacement, la conception et le caractère de Quadra."
    },
    location: {
      he: "כאן ייכנס טקסט המיקום: השכונה, הרחוב ומה שיש בסביבה.",
      en: "The location text goes here: the neighborhood, the street, and the surroundings.",
      fr: "Le texte sur l'emplacement viendra ici : le quartier, la rue et les environs."
    },
    apartments: {
      he: "כאן ייכנס תיאור הדירות והשטחים המשותפים. התוכניות לפי בניין וקומה כבר מסודרות בעמוד תוכניות הדירה.",
      en: "The apartments description goes here, including the shared areas. Floor plans are already organized by building and floor.",
      fr: "La description des appartements viendra ici, y compris les parties communes. Les plans sont déjà classés par bâtiment et par étage."
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

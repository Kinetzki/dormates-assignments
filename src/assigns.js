import Mhel from "./assets/Mhel.jpg";
import Des from "./assets/Des.jpg";
import Kenneth from "./assets/Kenneth.jpg";
import Ayan from "./assets/Ayan.jpg";
import Rhez from "./assets/Rhez.jpg";

const assignment = {
  Monday: {
    "Maghuhugas ng plato": {
      name: "Ayan",
      proxies: ["Mhel", "Des"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Rhez",
      proxies: ["Des", "Ayan"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Kenneth",
      proxies: ["Ayan", "Rhez"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Mhel",
      proxies: ["Rhez", "Kenneth"],
    },
  },
  Tuesday: {
    "Maghuhugas ng plato": {
      name: "Rhez",
      proxies: ["Des", "Ayan"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Kenneth",
      proxies: ["Ayan", "Rhez"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Mhel",
      proxies: ["Rhez", "Kenneth"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Des",
      proxies: ["Kenneth", "Mhel"],
    },
  },
  Wednesday: {
    "Maghuhugas ng plato": {
      name: "Kenneth",
      proxies: ["Ayan", "Rhez"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Mhel",
      proxies: ["Rhez", "Kenneth"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Des",
      proxies: ["Kenneth", "Mhel"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Ayan",
      proxies: ["Mhel", "Des"],
    },
  },
  Thursday: {
    "Maghuhugas ng plato": {
      name: "Mhel",
      proxies: ["Rhez", "Kenneth"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Des",
      proxies: ["Kenneth", "Mhel"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Ayan",
      proxies: ["Mhel", "Des"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Rhez",
      proxies: ["Des", "Ayan"],
    },
  },
  Friday: {
    "Maghuhugas ng plato": {
      name: "Des",
      proxies: ["Kenneth", "Mhel"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Ayan",
      proxies: ["Mhel", "Des"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Rhez",
      proxies: ["Des", "Ayan"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Kenneth",
      proxies: ["Ayan", "Rhez"],
    },
  },
  Saturday: {
    "Maghuhugas ng plato": {
      name: "Ayan",
      proxies: ["Mhel", "Des"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Rhez",
      proxies: ["Des", "Ayan"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Kenneth",
      proxies: ["Ayan", "Rhez"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Mhel",
      proxies: ["Rhez", "Kenneth"],
    },
  },
  Sunday: {
    "Maghuhugas ng plato": {
      name: "Rhez",
      proxies: ["Des", "Ayan"],
    },
    "Magwawalis at Magmo-mop": {
      name: "Kenneth",
      proxies: ["Ayan", "Rhez"],
    },
    "Magdidilig ng halaman at maglilinis ng banyo": {
      name: "Mhel",
      proxies: ["Rhez", "Kenneth"],
    },
    "Magpupunas ng bintana at magtatapon ng basura": {
      name: "Des",
      proxies: ["Kenneth", "Mhel"],
    },
  },
};

const pics = {
  Ayan: Ayan,
  Rhez: Rhez,
  Kenneth: Kenneth,
  Mhel: Mhel,
  Des: Des,
};

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// Maghuhugas ng plato
// Magwawalis at mop
// Magdidilig ng halaman at maglilinis ng banyo
// Magpupunas ng bintana at magtatapon ng basura

export { assignment, weekdays, pics };

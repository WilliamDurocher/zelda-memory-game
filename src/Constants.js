import uniqid from "uniqid";
import link from "./images/link.jpg";
import younglink from "./images/younglink.jpg";
import zelda from "./images/zelda.jpg";
import youngzelda from "./images/youngzelda.jpg";
import saria from "./images/saria.jpg";
import sheik from "./images/sheik.jpg";
import ganondorf from "./images/ganondorf.jpg";
import impa from "./images/impa.jpg";


const level1 = {
    "level": 1,
    "highestScore": 1,
    "cards": [
        {
            "id": uniqid(),
            "title": "Zelda",
            "image": zelda
        }
    ]
};


const level2 = {
    "level": 2,
    "highestScore": 8,
    "cards": [
        {
            "id": uniqid(),
            "title": "Zelda",
            "image": zelda
        },
        {
            "id": uniqid(),
            "title": "Link",
            "image": link
        },
        {
            "id": uniqid(),
            "title": "Ganondorf",
            "image": ganondorf
        },
        {
            "id": uniqid(),
            "title": "Young Link",
            "image": younglink
        },
        {
            "id": uniqid(),
            "title": "Young Zelda",
            "image": youngzelda
        },
        {
            "id": uniqid(),
            "title": "Saria",
            "image": saria
        },
        {
            "id": uniqid(),
            "title": "Sheik",
            "image": sheik
        },
        {
            "id": uniqid(),
            "title": "Impa",
            "image": impa
        }
    ]
};

export { level1, level2 } 
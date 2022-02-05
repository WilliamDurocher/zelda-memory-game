import uniqid from "uniqid";

import link1 from "./images/level1/link.png";
import emptybottle from "./images/level1/emptybottle.png";
import ocarina from "./images/level1/ocarina.jpg";
import sheikahslate from "./images/level1/sheikahslate.png";

import dekulink from "./images/level2/dekulink.jpg";
import fiercedeity from "./images/level2/fiercedeity.jpg";
import goronlink from "./images/level2/goronlink.jpg";
import link2 from "./images/level2/link2.jpg";
import skullkid from "./images/level2/skullkid.jpg";
import tingle from "./images/level2/tingle.jpg";
import zoralink from "./images/level2/zoralink.jpg";



import link3 from "./images/level3/link.jpg";
import younglink from "./images/level3/younglink.jpg";
import zelda from "./images/level3/zelda.jpg";
import youngzelda from "./images/level3/youngzelda.jpg";
import saria from "./images/level3/saria.jpg";
import sheik from "./images/level3/sheik.jpg";
import ganondorf from "./images/level3/ganondorf.jpg";
import impa from "./images/level3/impa.jpg";
import kaepora from "./images/level3/kaepora.jpg"
import redead from "./images/level3/redead.jpg"
import stalfos from "./images/level3/stalfos.jpg"



const level1 = {
    "level": 1,
    "name": "Introduction",
    "highestScore": 4,
    "cards": [
        {
            "id": uniqid(),
            "title": "Link",
            "image": link1
        },
        {
            "id": uniqid(),
            "title": "Empty Bottle",
            "image": emptybottle
        }, {
            "id": uniqid(),
            "title": "Ocarina of Time",
            "image": ocarina
        }, {
            "id": uniqid(),
            "title": "Sheikah Slate",
            "image": sheikahslate
        }
    ]
};

const level2 = {
    "level": 2,
    "name": "Majora's Mask",
    "highestScore": 7,
    "cards": [
        {
            "id": uniqid(),
            "title": "Deku Link",
            "image": dekulink
        },
        {
            "id": uniqid(),
            "title": "Fierce Deity Link",
            "image": fiercedeity
        },
        {
            "id": uniqid(),
            "title": "Tingle",
            "image": tingle
        },
        {
            "id": uniqid(),
            "title": "Goron Link",
            "image": goronlink
        },
        {
            "id": uniqid(),
            "title": "Skull Kid",
            "image": skullkid
        },
        {
            "id": uniqid(),
            "title": "Zora Link",
            "image": zoralink
        },
        {
            "id": uniqid(),
            "title": "Link",
            "image": link2
        }
    ]
    };


const level3 = {
    "level": 3,
    "name": "Ocarina of Time",
    "highestScore": 11,
    "cards": [
        {
            "id": uniqid(),
            "title": "Zelda",
            "image": zelda
        },
        {
            "id": uniqid(),
            "title": "Link",
            "image": link3
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
        },
        {
            "id": uniqid(),
            "title": "Kaepora Gaepora",
            "image": kaepora
        },
        {
            "id": uniqid(),
            "title": "Redead",
            "image": redead
        },
        {
            "id": uniqid(),
            "title": "Stalfos",
            "image": stalfos
        }
    ]
};




export { level1, level2, level3 } 
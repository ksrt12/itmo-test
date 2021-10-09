
interface Icategory {
    category_id: number,
    category_title: string,
    color_title: string,
    color: string;
};

interface Inews {
    category: Icategory,
    creation_date: string,
    date: string,
    id: number,
    image_big: string,
    image_small: string,
    lead: string,
    parent_category: Icategory,
    title: string,
    url: string,
    view_count: number,
}

interface Iresults {
    category: number,
    last_page: number,
    news: Inews[],
    page: number,
    per_page: number,
    total: number;
}

const
    emptyCategory = {
        "category_id": 0,
        "category_title": "",
        "color_title": "",
        "color": ""
    },
    emptyNews = {
        "id": 0,
        "title": "",
        "image_small": "",
        "image_big": "",
        "creation_date": "",
        "date": "",
        "view_count": 0,
        "parent_category": emptyCategory,
        "category": emptyCategory,
        "url": "",
        "lead": ""
    };

export default emptyNews;
export type { Iresults, Inews };
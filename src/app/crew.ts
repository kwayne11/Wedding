export class Crew {
    name: string;
    role: string;
    image: string;
    meta: string;
    facts: Array<string>;

    constructor(name: string, role: string, image: string, meta: string, facts: Array<string>) {
        this.name = name;
        this.role = role;
        this.image = image;
        this.meta = meta;
        this.facts = facts;
    }
}


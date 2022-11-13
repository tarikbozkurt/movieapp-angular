import { Category } from "./category";

export class CategoryRepository {

    private categories: Category[];



    constructor() {

        this.categories = [
            { id: 1, name: "macera" },

            { id: 2, name: "akisyon" },

            { id: 3, name: "Bilim/Kurgu" },

            { id: 4, name: "Korku" },

            { id: 5, name: "Romantik" }
        ];


    }

    getCategories(): Category[] {

        return this.categories;
    }
}



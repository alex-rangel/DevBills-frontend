import axios from "axios"

import { CreateCategory } from "./api-types"
import { Category } from "./api-types"

export class APIService {
    private static  client = axios.create({
        baseURL: import.meta.env.VITE_API_URL
    })

    static async createCategory(createCategoryData: CreateCategory): Promise<Category> {

        const { data } = await this.client.post<Category>('/categories', createCategoryData)

        return data
    }

    static async getCategories(): Promise<Category[]> {

        const { data } = await this.client.get<Category[]>('/categories')

        return data
    }
}
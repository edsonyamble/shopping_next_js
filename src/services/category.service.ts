import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { ICategory, ICategoryInput } from '@/shared/types/category.interface'

class CategoryService {
	//получение категори по storeid (магазину)
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<ICategory[]>({
			url: API_URL.categories(`/by-storeId/${id}`),
			method: 'GET'
		})

		return data
	}
//получение категории по id
	async getById(id: string) {
		const { data } = await axiosClassic<ICategory>({
			url: API_URL.categories(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}
//	создание категории
	async create(data: ICategoryInput, storeId: string) {
		const { data: createdCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${storeId}`),
			method: 'POST',
			data
		})

		return createdCategory
	}
//	обновление категории
	async update(id: string, data: ICategoryInput) {
		const { data: updatedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedCategory
	}
//	удаление категории
	async delete(id: string) {
		const { data: deletedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: 'DELETE'
		})

		return deletedCategory
	}
}

export const categoryService = new CategoryService()

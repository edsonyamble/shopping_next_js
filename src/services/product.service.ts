import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { IProduct, IProductInput } from '@/shared/types/product.interface'

class ProductService {
	// получение всех продуктов
	async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})

		return data || []
	}
//получение продуктов для конкретного магазина
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<IProduct[]>({
			url: API_URL.products(`/by-storeId/${id}`),
			method: 'GET'
		})

		return data || []
	}
//получение продукта по id
	async getById(id: string) {
		const { data } = await axiosClassic<IProduct>({
			url: API_URL.products(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}
//получение продуктов для конкретной категории
	async getByCategory(categoryId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/by-category/${categoryId}`),
			method: 'GET'
		})

		return data
	}
//получение продукт самы популярных
	async getMostPopular() {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/most-popular`),
			method: 'GET'
		})

		return data
	}
//получение продуктов похожих
	async getSimilar(id: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/similar/${id}`),
			method: 'GET'
		})

		return data
	}
//	создание продукта
	async create(data: IProductInput, storeId: string) {
		const { data: createdProduct } = await axiosWithAuth<IProduct[]>({
			url: API_URL.products(`/${storeId}`),
			method: 'POST',
			data
		})

		return createdProduct
	}
//	обновление продукта
	async update(id: string, data: IProductInput) {
		const { data: updatedProduct } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedProduct
	}
//	удаление продукта
	async delete(id: string) {
		const { data: deletedProduct } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`/${id}`),
			method: 'DELETE'
		})

		return deletedProduct
	}
}

export const productService = new ProductService()

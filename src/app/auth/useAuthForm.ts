import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { DASHBOARD_URL } from '@/config/url.config'

import { authService } from '@/services/auth/auth.service'

import { IAuthForm } from '@/shared/types/auth.interface'
//hook для авторизациия 
export function useAuthForm(isReg: boolean) {
	const router = useRouter()

	const form = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth user'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isReg ? 'register' : 'login', data),
		//перенаправление на дашборд при успешной авторизации
		onSuccess() {
			form.reset()
			toast.success('Успешная авторизация')
			router.replace(DASHBOARD_URL.home())
		},
		//показ ошибки при неудачной авторизации
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при авторизации')
			}
		}
	})
//button для авторизации
	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return { onSubmit, form, isPending }
}

import axiosInstance from './axiosInstance'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data, params,
    }) => {
      try {
        const result = await axiosInstance({
          url: baseUrl + url,
          data,
          method,
          params,


        })
        return { data: result.data }
      } catch (axiosError) {
        const err = axiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }
export default axiosBaseQuery

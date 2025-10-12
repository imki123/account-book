import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { queryKeys } from './queryKeys'
import { typeApi, getTypeResponse } from '../typeApi'

export const useGetTypeQuery = (options?: UseQueryOptions<getTypeResponse>) => {
  return useQuery<getTypeResponse>(
    [queryKeys.getType] as QueryKey,
    () => typeApi.getType().then((res) => res.data),
    options,
  )
}

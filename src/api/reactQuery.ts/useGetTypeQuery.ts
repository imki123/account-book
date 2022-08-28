import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getType, getTypeResponse } from '../type'

export const useGetTypeQuery = (options?: UseQueryOptions<getTypeResponse>) => {
  return useQuery<getTypeResponse>(
    [queryKeys.getType] as QueryKey,
    getType,
    options,
  )
}

import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getSheets } from '../sheet'
import { SheetDataInterface } from '../../page/JoinPage'
import { queryKeys } from './queryKeys'

export const useGetSheetsQuery = (
  options?: UseQueryOptions<SheetDataInterface[]>,
) => {
  return useQuery<SheetDataInterface[]>({
    queryKey: [queryKeys.getSheet],
    queryFn: getSheets,
    ...options,
  })
}

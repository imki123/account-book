import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { sheetApi } from '../sheetApi'
import { SheetDataInterface } from '../../page/JoinPage'
import { queryKeys } from './queryKeys'

export const useGetSheetsQuery = (
  options?: UseQueryOptions<SheetDataInterface[]>,
) => {
  return useQuery<SheetDataInterface[]>({
    queryKey: [queryKeys.getSheet],
    queryFn: () => sheetApi.getSheets().then((res) => res.data),
    ...options,
  })
}

import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getSheets } from '../sheet'
import { SheetDataInterface } from '../../page/JoinPage'

export const useGetSheetsQuery = (
  options?: UseQueryOptions<SheetDataInterface[]>,
) => {
  return useQuery<SheetDataInterface[]>(
    ['getSheets'] as QueryKey,
    getSheets,
    options,
  )
}

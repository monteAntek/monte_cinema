import { defaultClient } from '@/api/client';

import type { Screening } from '@/types/screening';

export const getScreeningsByDate = async (date: string) => {
  const { data } = await defaultClient.get<Screening[]>(
    `/seances?date=${date}`
  );
  return data;
};

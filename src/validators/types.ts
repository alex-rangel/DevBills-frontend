import { z } from "zod";

import { createCategorySchema, createTransactionShema, financialEvolutionFilterSchema, transactionsFilterSchema } from "./schemas";

export type CreateCategoryData = z.infer<typeof createCategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionShema>

export type TransactionsFilterData = z.infer<typeof transactionsFilterSchema>

export type FinancialEvolutionFilterData = z.infer<typeof financialEvolutionFilterSchema>
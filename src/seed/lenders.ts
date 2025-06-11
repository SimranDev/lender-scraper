import { InferSelectModel } from 'drizzle-orm'
import { lenders } from 'src/lenders/schema'

type Lender = InferSelectModel<typeof lenders>

export const seedLenders: Lender[] = [
  {
    id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p',
    name: 'ANZ',
  },
  {
    id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p1q',
    name: 'ASB',
  },
  {
    id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p1q2r',
    name: 'BNZ',
  },
  {
    id: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p1q2r3s',
    name: 'Kiwibank',
  },
  {
    id: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p1q2r3s4t',
    name: 'Westpac',
  },
]

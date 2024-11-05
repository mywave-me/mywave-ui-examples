import { validateEnv} from './utils'

export const config = validateEnv(import.meta.env)

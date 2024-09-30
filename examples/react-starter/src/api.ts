import axios from 'axios'
import { format } from 'date-fns'
import { config } from './config'

type RecognisedIntent = {
  intent: string
  recognised_intent: {
    type: string
    extracted_values: Record<string, string>
  }
}

export async function getRecognisedIntent(input: string) {
  // this format is required by the LLM API
  //2024-01-14T08:00:23.989565+11:00
  const formattedDateTime = format(
    new Date(),
    "yyyy-MM-dd'T'HH:mm:ss.SSSSSSXXX"
  )

  const { data: recognisedIntent } = await axios.post<RecognisedIntent>(
    config.llmIntentRecogniseEndpoint,
    {
      text: input,
      current_date_time: formattedDateTime,
      api_key: config.llmIntentRecogniseApiKey,
    }
  )

  return recognisedIntent
}

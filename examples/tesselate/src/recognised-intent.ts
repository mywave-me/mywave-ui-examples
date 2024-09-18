export const getRecognisedIntent = async (input: string) => {
  const formattedDateTime = formatDateTime(new Date());

  const res = await fetch(MyWaveEnv.llmIntentUrl, {
    method: "POST",
    body: JSON.stringify({
      text: input,
      current_date_time: formattedDateTime,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    return res.json();
  } else {
    return input;
  }
};

function formatDateTime(date: Date) {
  // this format is required by the LLM API
  // 2024-01-14T08:00:23.989565+11:00

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  const milliseconds = `${padZero(date.getMilliseconds())}000`;
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneHours = Math.floor(Math.abs(timezoneOffset) / 60);
  const timezoneMinutes = Math.abs(timezoneOffset) % 60;
  const timezoneSign = timezoneOffset < 0 ? "+" : "-";

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${padZero(
    timezoneHours,
  )}:${padZero(timezoneMinutes)}`;

  return formattedDateTime;
}

const padZero = (num: number) => {
  return num.toString().padStart(2, "0");
};

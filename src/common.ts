export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const BASE_URL = 'https://kwihtaig61.execute-api.us-east-1.amazonaws.com'
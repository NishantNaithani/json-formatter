export function isJSONString(data) {
  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
}

export function createSpace(length) {
  let spacedString = "";
  for (let i = 0; i < length; i++) {
    spacedString += "\u00A0";
  }

  return spacedString;
}

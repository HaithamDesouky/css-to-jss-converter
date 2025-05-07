export function cssToJss(css) {
  const lines = css
    .split(";")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const jss = {};

  lines.forEach((line) => {
    const [property, value] = line.split(":").map((part) => part.trim());

    const camelCaseProperty = property.replace(/-([a-z])/g, (match, p1) =>
      p1.toUpperCase()
    );

    jss[camelCaseProperty] = value;
  });

  return jss;
}

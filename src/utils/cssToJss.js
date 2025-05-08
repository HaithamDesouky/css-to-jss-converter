export function cssToJss(css) {
  const cleanedCss = css.replace(/;;+/g, ';').replace(/['"]+/g, '')

  const lines = cleanedCss
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  const jss = {}

  lines.forEach((line) => {
    const [property, value] = line.split(':').map((part) => part.trim())

    if (property && value) {
      const camelCaseProperty = property.replace(/-([a-z])/g, (match, p1) =>
        p1.toUpperCase(),
      )

      jss[camelCaseProperty] = value
    }
  })

  return jss
}

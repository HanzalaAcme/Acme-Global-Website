export function parseJob(html: string) {
  const clean = html.replace(/<[^>]+>/g, "");

  const lines = clean
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const meta = {
    location: "",
    type: "",
    mode: "",
    experience: "",
    department: "",
  };

  lines.forEach((line) => {
    const parts = line.split(":");

    if (parts.length < 2) return;

    const key = parts[0].trim().toLowerCase();
    const value = parts.slice(1).join(":").trim();

    switch (key) {
      case "location":
        meta.location = value;
        break;

      case "type":
        meta.type = value;
        break;

      case "mode":
        meta.mode = value;
        break;

      case "experience":
        meta.experience = value;
        break;

      case "department":
        meta.department = value;
        break;
    }
  });

  return meta;
}

export function cleanContent(html: string) {
  return html
    .split("\n")
    .filter((line) => {
      const lower = line.toLowerCase();

      return ![
        "location:",
        "type:",
        "mode:",
        "experience:",
        "department:",
      ].some((item) => lower.includes(item));
    })
    .join("\n");
}

export function parseJobMeta(html: string) {
  return parseJob(html);
}
export function parseJob(content: string) {
  const clean = content.replace(/<[^>]+>/g, "");
  const lines = clean.split("\n").map((l) => l.trim());

  let meta = {
    location: "",
    type: "",
    mode: "",
    experience: "",
    salary: "",
    industry: "",
    department: "",
    benefits: [] as { title: string; desc: string }[],
  };

  let isBenefits = false;

  lines.forEach((line) => {
    const l = line.toLowerCase();

    if (l.startsWith("location"))
      meta.location = line.split(":")[1]?.trim();

    if (l.startsWith("type"))
      meta.type = line.split(":")[1]?.trim();

    if (l.startsWith("mode"))
      meta.mode = line.split(":")[1]?.trim();

    if (l.startsWith("experience"))
      meta.experience = line.split(":")[1]?.trim();

    if (l.startsWith("salary"))
      meta.salary = line.split(":")[1]?.trim();

    if (l.startsWith("industry"))
      meta.industry = line.split(":")[1]?.trim();

    if (l.startsWith("department"))
      meta.department = line.split(":")[1]?.trim();

    // 🔥 START BENEFITS BLOCK
    if (l.startsWith("benefits")) {
      isBenefits = true;
      return;
    }

    // 🔥 PARSE BENEFITS LINES
    if (isBenefits && line.length > 0) {
      const parts = line.split("-");

      meta.benefits.push({
        title: parts[0]?.trim() || "",
        desc: parts[1]?.trim() || "",
      });
    }
  });

  return meta;
}
export function cleanContent(html: string) {
  return html
    .split("\n")
    .filter(
      (line) =>
        !line.toLowerCase().includes("location:") &&
        !line.toLowerCase().includes("type:") &&
        !line.toLowerCase().includes("mode:") &&
        !line.toLowerCase().includes("experience:") &&
        !line.toLowerCase().includes("salary:") &&
        !line.toLowerCase().includes("industry:") &&
        !line.toLowerCase().includes("department:") 
     
    )
    .join("\n");
}

export function parseJobMeta(html: string) {
  const text = html.replace(/<[^>]+>/g, "");

  const get = (label: string) => {
    const regex = new RegExp(`${label}:\\s*(.*)`, "i"); // ✅ case-insensitive
    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };

  return {
    location: get("Location"),
    type: get("Type"),
    mode: get("Mode"),
    experience: get("Experience"),
    salary: get("Salary"),
    industry: get("Industry"),
    department: get("Department"),
    benefits: get("Benefits").split(",").map((b) => b.trim()),
  };
}
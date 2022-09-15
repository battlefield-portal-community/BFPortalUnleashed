export class Named {
  name: string
  SID: string

  constructor(json: any) {
    this.name = json.name
    this.SID = json.displayNameSID
  }
}

let reservedKeywords: string[] = ["break", "case", "catch", "continue", "debugger", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "class", "const", "enum", "export", "extends", "import", "super", "null", "true", "false", "NaN", "Infinity", "undefined"];

export function sanitize(s: string): string {
  if (reservedKeywords.includes(s)) return "_" + s;
  return s.replace("-", "_").replace(" ", "_").replace(/^(\d)/g, "_$1");
}

export function category(s: string): string {
  if (s == 'UI') return 'ui'
  s = s[0].toLowerCase() + s.substring(1)
  return s.replace("-", "").replace(" ", "")
}
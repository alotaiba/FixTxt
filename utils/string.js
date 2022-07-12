Object.assign(String.prototype, {
  clearFormatting() {
    return this.replace(/\u202A|\u202B|\u202C/g, "");
  },
});

Object.assign(String.prototype, {
  toRTL() {
    return this.split("\n")
      .map((line) => "\u202B" + line + "\u202C")
      .join("\n");
  },
});

Object.assign(String.prototype, {
  toLTR() {
    return this.split("\n")
      .map((line) => "\u202A" + line + "\u202C")
      .join("\n");
  },
});

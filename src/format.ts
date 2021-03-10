const format = {
  thousand(val: number | string | void): string | number {
    if (val === undefined || !Number(val)) return 0;
    return String(val).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  },
  toPercent(value: number | string | void, unit: string = "%"): string {
    if (value === undefined) return "0";
    let val = Number(value);
    if (!val) return "0";

    if (val >= 1 || val <= -1) {
      val = Number(val.toFixed(4).replace(".", "")) / 100;
    } else {
      const _val = val.toFixed(4).substring(val < 0 ? 3 : 2);
      const unsignVal = Number(`${_val.substring(0, 2)}.${_val.substring(2)}`);
      val = +(val > 0 || -1) * unsignVal;
    }
    return `${val}${unit}`;
  },
};
export default format;
